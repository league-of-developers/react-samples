import React from 'react';
import PropTypes from 'prop-types';

import { Row as BootstrapRow } from 'reactstrap';

const Row = ({ children }) => <BootstrapRow>{children}</BootstrapRow>;

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
