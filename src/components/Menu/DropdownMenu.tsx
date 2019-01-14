import * as React from 'react';

import { Theme, withTheme } from '../../theme';
import { DrawerMenuStyles } from '../../theme/style-getters/getDrawerMenuStyles';
import { Button, ButtonGroup, ButtonProps } from '../Button';
import { Measurements, ViewMeasure } from '../Helpers';
import { Box } from '../Layout';
import { Popover } from '../Popover';

export interface DropdownMenuProps {
  children: React.ReactNode;
  theme: Theme;
  /** To show dialog or not */
  isVisible?: boolean;
  /** Called when clicking on overlay or pressing Esc */
  onClose?: () => void;
  /** List of menu options, which also take `ButtonProps` */
  options?: ButtonProps[];
  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: Partial<DrawerMenuStyles>;
}

export interface DropdownMenuState {
  targetMeasurements: Measurements;
}

class DropdownMenuBase extends React.Component<DropdownMenuProps> {
  public state = {
    targetMeasurements: {
      height: 0,
      pageX: 0,
      pageY: 0,
      width: 0,
      x: 0,
      y: 0,
    },
  };

  public render = () => {
    const { options = [], isVisible, onClose, children, theme } = this.props;
    const { targetMeasurements } = this.state;

    return (
      <Popover
        position="bottom"
        content={
          <Box
            elevation={1}
            borderRadius={theme.themeVariables.controlBorderRadius.medium}
            borderWidth={1}
            borderColor={theme.themeVariables.colors.border.default}
            width={targetMeasurements.width}
          >
            <ButtonGroup>
              {options.map(option => (
                <Button key={option.title} {...option} />
              ))}
            </ButtonGroup>
          </Box>
        }
        dangerouslySetInlineStyle={{
          modalContainerStyle: {
            borderRadius: theme.themeVariables.controlBorderRadius.medium,
          },
          popoverStyle: {
            borderRadius: theme.themeVariables.controlBorderRadius.medium,
          },
        }}
        showArrow={false}
        isVisible={isVisible}
        onClose={onClose}
      >
        <ViewMeasure
          onMeasure={measurements => {
            this.setState({ targetMeasurements: measurements });
          }}
        >
          {children}
        </ViewMeasure>
      </Popover>
    );
  };
}

export const DropdownMenu = withTheme(DropdownMenuBase);
export default DropdownMenu;
