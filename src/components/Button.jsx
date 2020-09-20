import React from 'react';
import PropTypes from 'prop-types';
import { Button as BootstrapButton } from 'reactstrap';

const Button = ({ onClick, label, color, isDisabled }) => (
  <BootstrapButton color={color} disabled={isDisabled} onClick={onClick}>
    {label}
  </BootstrapButton>
);

Button.defaultProps = {
  label: 'label',
  color: 'primary',
  isDisabled: false,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
  color: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
