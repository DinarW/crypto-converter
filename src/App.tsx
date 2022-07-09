import React, {useState} from 'react';
import MainLayout from './components/Layouts/Main';
import Table from './components/Organisms/CoinsTable'
import SelectTableCurrency from './components/Molecules/SelectTableCurrency'
import Grid from '@mui/material/Grid';

function App() {

    return (
        <MainLayout>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <SelectTableCurrency/>
                </Grid>
                <Grid item xs={4}>
                    CONVERT
                </Grid>
                <Grid item xs={8}>
                    <Table currency={'USD'}/>
                </Grid>
            </Grid>
        </MainLayout>
    );
}

export default App;
