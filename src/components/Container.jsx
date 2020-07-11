import React from 'react';
import {Container as ContainerBootstrap} from 'reactstrap';

const Container = ({children}) => (
    <ContainerBootstrap>{children}</ContainerBootstrap>
);

export {Container};