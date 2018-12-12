// Animation taken from https://medium.com/@norbajunior/react-native-facebook-and-instagram-like-top-bar-notifications-with-animated-api-43c48d0443dd
import * as React from 'react';
import { Animated, Easing, View } from 'react-native';

import { IntentType } from '../../constants/Intent';
import { ITheme, withTheme } from '../../theme';
import { Text } from '../Typography';

export type ToastId = string;

export interface IToastSettings {
  id?: ToastId;
  title?: string;
  message?: string;
  duration?: number;
  /* custom component, will take precedence over title and message */
  component?: React.ReactNode;
  /* will override */
  intent?: IntentType;
}

export interface IToast extends IToastSettings {
  id: ToastId;
  onRemove: () => void;
}

export interface IToastProps extends IToast {
  theme: ITheme;
}

export interface IToastState {
  offset: Animated.Value;
}

class ToastBase extends React.Component<IToastProps, IToastState> {
  public closeTimer: number | null = null;

  constructor(props: IToastProps) {
    super(props);

    this.state = { offset: new Animated.Value(-100) };
  }

  public componentDidMount() {
    const { onRemove, duration } = this.props;
    const { offset } = this.state;

    Animated.sequence([
      Animated.spring(offset, {
        tension: -5,
        toValue: 0,
      }),
      Animated.timing(offset, {
        duration,
        easing: Easing.ease,
        toValue: -100,
      }),
    ]).start(() => onRemove());
  }

  public render() {
    const { theme, component, title, message, intent = 'info' } = this.props;

    const { toastStyle, textStyle } = theme.getToastStyles(intent);

    return (
      <Animated.View
        style={{
          transform: [{ translateY: this.state.offset }],
        }}
      >
        {component || (
          <View style={toastStyle}>
            <Text dangerouslySetInlineStyle={{ textStyle }} size="large">
              {title}
            </Text>
            <Text dangerouslySetInlineStyle={{ textStyle }}>{message}</Text>
          </View>
        )}
      </Animated.View>
    );
  }
}

export const Toast = withTheme(ToastBase);
export default Toast;
