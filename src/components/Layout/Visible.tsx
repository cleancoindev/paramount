import * as React from 'react';

import {
  ASC_ORDER_SCREEN_SIZES,
  LayoutContext,
  ScreenSize,
} from './LayoutContext';

export interface VisibleConfig {
  xsmall?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  xlarge?: boolean;
}

export interface VisibleProps extends VisibleConfig {
  children: React.ReactElement;
}

const combineConfig = (config: VisibleConfig) => {
  const { xsmall, small, medium, large, xlarge } = config;

  return [xsmall, small, medium, large, xlarge];
};

const isVisible = (config: VisibleConfig, currentScreenSize: ScreenSize) => {
  const visibles = combineConfig(config);
  const currentScreenSizeIndex = ASC_ORDER_SCREEN_SIZES.indexOf(
    currentScreenSize,
  );

  return !!visibles.find(
    (val, index) => index === currentScreenSizeIndex && !!val,
  );
};

export const Visible = (props: VisibleProps) => {
  const { children, ...config } = props;
  const { currentScreenSize } = React.useContext(LayoutContext);

  if (isVisible(config, currentScreenSize)) return children;

  return null;
};