import React from 'react';
import Header from './common/Header'
import { Typography } from '@material-ui/core';
const Main = () => {
    return (
        <>
            <Header/>
            <div>
                <Typography variant="h5" align="center">Main</Typography>
            </div>
        </>
    );
};

export default Main;