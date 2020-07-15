import React from 'react';
import { Row as BootstrapRow } from "reactstrap";

const Row = ({children}) => (
    <BootstrapRow >
        {children}  
    </BootstrapRow>
)

export { Row }