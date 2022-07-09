import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const CoinsTableHead = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell></TableCell>
                <TableCell align="left">Coin</TableCell>
                <TableCell align="left">Price</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default CoinsTableHead;
