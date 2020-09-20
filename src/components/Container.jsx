import React from 'react';
import PropTypes from 'prop-types';

import { Container as ContainerBootstrap } from 'reactstrap';

const Container = ({ children }) => (
  <ContainerBootstrap>{children}</ContainerBootstrap>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
