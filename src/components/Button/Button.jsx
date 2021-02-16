import React from 'react';
import cn from 'classnames';
import './Button.scss';

/**
 * @param type
 * @param variant Array<String> | 'primary' | 'danger' | 'success' | 'info'
 * @param children
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const Button = ({
  type, variant, children, ...rest
}) => {
  const classes = cn({
    btn: true,
    [`btn-${variant}`]: true,
  });

  return (
    <button type={type} className={classes} {...rest}>{children}</button>
  );
};

export default Button;
