import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const coinBaseQuery = fetchBaseQuery({
    baseUrl: `https://min-api.cryptocompare.com/data`,
    // prepareHeaders: (headers) => {
    //     headers.set('authorization', `Apikey ${process.env.REACT_APP_API_KEY}`);
    //     return headers;
    // },
});
