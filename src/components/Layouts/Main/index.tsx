import React, { FC, ReactNode } from 'react';
import Container from '@mui/material/Container';

interface IProps {
    children: ReactNode
}

const MainLayout: FC<IProps> = ({ children }) => {
    return (
        <Container maxWidth="lg" sx={{ padding: '30px 0' }}>
            {children}
        </Container>
    )
}

export default MainLayout;
