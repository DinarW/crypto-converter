import React, { FC } from 'react';
import { useGetTopCoinsQuery } from '../../../services/CoinService';
import CoinsTableHead from '../../Molecules/CoinsTableHead';
import CoinsTableRow from '../../Molecules/CoinsTableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

interface IProps {
    currency: string
}

const MyComponent: FC<IProps> = ({ currency }) => {
    const { data, isLoading } = useGetTopCoinsQuery({ limit: 10, currency })

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 350 }} aria-label="coins table">
                <CoinsTableHead/>
                <TableBody>
                    {!isLoading && data?.map(coin => <CoinsTableRow key={coin.CoinInfo.Id} coin={coin} currency={currency} />)}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MyComponent;
