import React from 'react';
import ReactDOM from 'react-dom/client';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore()

root.render(
    <Provider store={store}>
        <CssBaseline/>
        <App />
    </Provider>,
);
