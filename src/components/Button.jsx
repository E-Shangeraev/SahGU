import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ outlined, color, children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={classNames('button', {
      'button--outlined': outlined,
      'button--yellow': color === 'yellow',
      'button--purple': color === 'purple',
    })}>
    {children}
  </button>
);

Button.propTypes = {
  outlined: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  outlined: false,
  color: null,
  children: null,
  onClick: () => {},
};

export default Button;
