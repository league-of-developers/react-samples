import React from 'react';
import PropTypes from 'prop-types';

const Button = ({onClick, label}) => (
  <button
  onClick={onClick}
  >
  {label}    
  </button>
);

Button.defaultProps = {
    label: "label"
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string,
}

export { Button };