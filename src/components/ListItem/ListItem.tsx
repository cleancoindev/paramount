import * as React from 'react';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Avatar, AvatarProps } from '../Avatar';
import { Icon } from '../Icon';
import { Text } from '../Typography';
import {
  GetListItemStyles,
  getListItemStyles,
  ListItemStyles,
} from './ListItem.styles';

export interface ListItemProps {
  /**
   * Title of the list item
   */
  title?: React.ReactNode;

  /**
   * Description of the list item
   */
  description?: React.ReactNode;

  /**
   * Props to be passed to `Avatar`
   */
  avatarProps?: AvatarProps;

  /**
   * When true, list item will not be able to be pressed.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * React node replacing `Avatar` on the left hand-side
   */
  leftNode?: React.ReactNode;

  /**
   * React node replacing right hand-side icon
   */
  rightNode?: React.ReactNode;

  /**
   * Called when pressing list item
   */
  onPress?: (event: GestureResponderEvent) => void;

  /** Label for screen readers */
  accessibilityLabel?: string;

  /** Hint for screen readers */
  accessibilityHint?: string;

  /**
   * When true, indicates that the view is an accessibility element.
   * @default true
   */
  accessible?: boolean;

  /** Callback to get element styles. */
  getStyles?: ReplaceReturnType<GetListItemStyles, DeepPartial<ListItemStyles>>;

  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export const ListItem = (props: ListItemProps) => {
  const {
    avatarProps,
    getStyles,
    isDisabled = false,
    title,
    description,
    onPress,
    rightNode,
    leftNode,
    testID,
    accessibilityHint,
    accessibilityLabel,
    accessible = true,
  } = props;
  const theme = useTheme();

  const {
    imageWrapperStyle,
    leftWrapperStyle,
    textWrapperStyle,
    touchableStyle,
    titleStyle,
    descriptionStyle,
    rightWrapperStyle,
    wrapperStyle,
  } = mergeStyles(
    getListItemStyles,
    getStyles,
    theme.components.getListItemStyles,
  )(props, theme);

  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={touchableStyle}
      testID={testID}
      onPress={onPress}
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      accessible={accessible}
    >
      <View style={wrapperStyle}>
        <View style={leftWrapperStyle}>
          {leftNode || avatarProps ? (
            <View style={imageWrapperStyle}>
              {leftNode || <Avatar size="small" {...avatarProps} />}
            </View>
          ) : null}
          <View style={textWrapperStyle}>
            {title ? (
              typeof title === 'string' ? (
                <Text
                  getStyles={() => ({ textStyle: titleStyle })}
                  size="large"
                >
                  {title}
                </Text>
              ) : (
                title
              )
            ) : null}
            {description ? (
              typeof description === 'string' ? (
                <Text
                  getStyles={() => ({ textStyle: descriptionStyle })}
                  size="medium"
                  color="muted"
                >
                  {description}
                </Text>
              ) : (
                description
              )
            ) : null}
          </View>
        </View>
        {rightNode === null ? null : (
          <View style={rightWrapperStyle}>
            {rightNode || <Icon name="chevron-right" />}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
