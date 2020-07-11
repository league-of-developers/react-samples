import React from "react";
import PropTypes from "prop-types";
import { Button as BootstrapButton } from "reactstrap";

const Button = ({ onClick, label, color }) => (
  <BootstrapButton color={color} onClick={onClick}>
    {label}
  </BootstrapButton>
);

Button.defaultProps = {
  label: "label",
  color: "primary"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
  color: PropTypes.string,
};

export { Button };
