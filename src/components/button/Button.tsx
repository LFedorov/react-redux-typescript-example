import './Button.css';
import * as React from 'react';

interface ButtonProps extends React.HTMLProps<{}> {
  children?: any;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    const { children, className, ...rest } = this.props;
    const buttonClass = `btn ${className}`;

    return (
      <button className={buttonClass} {...rest}>
        {children}
      </button>
    );
  }
}
