import * as React from 'react';
import { Platform, View } from 'react-native';

import { withTheme } from '../../theme';
import { TextColor, TextSize } from '../../theme/ThemeInterface';
import { Spacing } from '../Layout';
import Text, { TextProps } from './Text';

const paddingLeftMap = {
  large: 3,
  medium: 2,
  small: 2,
  xsmall: 1,
};

export interface ListItemProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  index?: number | null;
  iconColor?: TextColor;
  size?: TextSize;
}

const ListItemBase = (props: TextProps & ListItemProps) => {
  const { size = 'medium', index, icon, iconColor, ...textProps } = props;

  const paddingLeft = paddingLeftMap[size] as 1 | 2 | 3;

  const mark = index ? (
    <Text size={size} {...textProps}>{`${index}.`}</Text>
  ) : icon ? (
    icon
  ) : null;

  return (
    // @ts-ignore
    <View accessibilityRole={Platform.OS === 'web' ? 'listitem' : 'none'}>
      <Spacing flexDirection="row" alignItems="center" marginVertical={1}>
        <Spacing>{mark}</Spacing>
        <Spacing width="100%" paddingLeft={paddingLeft}>
          <Text isInline size={size} {...textProps} />
        </Spacing>
      </Spacing>
    </View>
  );
};

export const ListItem = withTheme(ListItemBase);
export default ListItem;