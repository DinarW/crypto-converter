import React, { FC } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { ICoin } from '../../../models/ICoin'

interface IProps {
    coin: ICoin
    currency: string
}

const CoinsTableRow: FC<IProps> = ({ coin, currency }) => {
    const { Id, ImageUrl, FullName } = coin.CoinInfo

    return (
        <TableRow key={Id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center">
                <img src={ImageUrl} width="16px" height="16px" alt="coin icon"/>
            </TableCell>
            <TableCell align="left">
                {FullName}
            </TableCell>
            <TableCell align="left">
                {coin.DISPLAY[currency]?.PRICE}
            </TableCell>
        </TableRow>
    );
};

export default CoinsTableRow;
