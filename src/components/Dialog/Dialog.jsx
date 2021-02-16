import React from 'react';
import cn from 'classnames';
import './Dialog.scss';
import Button from '../Button';

const Dialog = ({
  open,
  onClose = () => {},
  title,
  children,
  actionButtons = [],
}) => {
  const classes = cn({
    'dialog-container': true,
    show: open,
  });

  return (
    <div className={classes}>
      <div className="dialog-content">
        <div className="dialog-header">
          <div className="dialog-header-title">
            {title}
          </div>
          <div className="dialog-close-button" onClick={onClose}>X</div>
        </div>
        <div className="dialog-body">
          {children}
        </div>
        <div className="dialog-footer">
          {
            actionButtons.map((btn) => (
              <Button type={btn.type} variant={btn.variant} onClick={btn.action} key={btn.id}>
                {btn.text}
              </Button>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Dialog;
