import React from 'react';

import NewBill from '../NewBill/NewBill';
import Bills from '../Bills/Bills';
import Header from './Header';

const Main = props => {
    return (
        <div>
            <NewBill />
            <Bills />
        </div>
    )
};

export default Main;
