import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { ColumnProps } from './Column';
import { defaultLayout, useLayout } from './LayoutContext';
import { GetRowStyles, getRowStyles, RowStyles } from './Row.styles';

export interface RowProps {
  /**
   * When true, there will be gutter between columns
   * @default true
   */
  hasGutter?: boolean;

  /**
   * `Column` components
   */
  children:
    | Array<React.ReactElement<ColumnProps>>
    | React.ReactElement<ColumnProps>;

  /** Callback to get element styles. */
  getStyles?: ReplaceReturnType<GetRowStyles, DeepPartial<RowStyles>>;
}

export const GutterWidthContext = React.createContext(
  defaultLayout.gutterWidth,
);

export const Row = (props: RowProps) => {
  const { children, hasGutter = true, getStyles } = props;
  const layout = useLayout();
  const theme = useTheme();

  const { rowStyle } = mergeStyles(
    getRowStyles,
    getStyles,
    theme.components.getRowStyles,
  )({ ...layout, ...props }, theme);

  return (
    <View style={rowStyle}>
      <GutterWidthContext.Provider value={hasGutter ? layout.gutterWidth : 0}>
        {children}
      </GutterWidthContext.Provider>
    </View>
  );
};