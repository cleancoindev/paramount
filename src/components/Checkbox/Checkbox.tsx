import * as React from 'react';
import {
  GestureResponderEvent,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from 'react-native';

import { Icon } from '../../icons';
import { Theme, withTheme } from '../../theme';
import { GetCheckboxStyles, getCheckboxStyles } from './Checkbox.styles';

export type CheckboxShape = 'circle' | 'square';

export interface CheckboxProps {
  theme: Theme;
  isChecked?: boolean;
  isDisabled?: boolean;
  /** Sometimes we just want the display of the checkbox  */
  isInteractive?: boolean;
  checkedIcon?: React.ReactNode;
  /** @default square */
  shape?: CheckboxShape;
  onChange?: (e: GestureResponderEvent) => void | undefined;
  getStyles?: GetCheckboxStyles;
}

const CheckboxBase = (props: CheckboxProps & TouchableHighlightProps) => {
  const {
    isChecked = false,
    isDisabled = false,
    isInteractive = true,
    checkedIcon,
    onChange = () => null,
    shape = 'square',
    theme,
    getStyles = getCheckboxStyles,
    ...touchableHighlightProps
  } = props;

  const { checkboxStyle, checkboxFocusBackgroundColor } = getStyles(
    { isChecked, isDisabled, shape },
    theme,
  );

  return (
    <TouchableHighlight
      accessible
      style={checkboxStyle}
      underlayColor={checkboxFocusBackgroundColor}
      {...(isInteractive
        ? {
            disabled: isDisabled,
            onPress: onChange,
          }
        : {
            disabled: true,
          })}
      {...touchableHighlightProps}
    >
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        {isChecked
          ? checkedIcon || (
              <Icon name="check" size={20} color={theme.colors.text.plain} />
            )
          : null}
      </View>
    </TouchableHighlight>
  );
};

export const Checkbox = withTheme(CheckboxBase);
export default Checkbox;