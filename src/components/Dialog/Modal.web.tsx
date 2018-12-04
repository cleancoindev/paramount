// Temporary usage until it is integrated
// https://github.com/necolas/react-native-web/issues/1020
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ModalProps } from 'react-native';

const ESC_KEY = 27;

class Modal extends React.Component<ModalProps> {
  public el: HTMLDivElement;
  public modalRoot: HTMLBodyElement;
  public content: React.RefObject<HTMLDivElement> = React.createRef();

  constructor(props: ModalProps) {
    super(props);
    this.el = document.createElement('div');
    this.modalRoot = document.getElementsByTagName('body')[0];
  }

  public componentDidMount() {
    this.modalRoot.appendChild(this.el);
    if (this.content.current) {
      this.content.current.focus();
    }
  }

  public componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  public handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { onDismiss } = this.props;

    if (event.keyCode === ESC_KEY && onDismiss) {
      event.stopPropagation();
      onDismiss();
    }
  };

  public render() {
    const { transparent, visible } = this.props;

    if (!visible) return null;

    return (
      <div>
        {ReactDOM.createPortal(
          <div
            ref={this.content}
            onKeyDown={this.handleKeyDown}
            tabIndex={-1}
            style={{
              backgroundColor: transparent ? 'transparent' : 'white',
              bottom: 0,
              left: 0,
              position: 'fixed',
              right: 0,
              top: 0,
              zIndex: 1000,
            }}
          >
            {this.props.children}
          </div>,
          this.el,
        )}
      </div>
    );
  }
}

export default Modal;
