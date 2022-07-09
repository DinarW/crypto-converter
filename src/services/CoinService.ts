import { BaseQueryFn, createApi, FetchArgs } from '@reduxjs/toolkit/dist/query/react';
import { coinBaseQuery } from './index';
import { ICoin } from '../models/ICoin';

interface Req {
    limit?: number
    currency?: string
}

interface Res {
    Message: string
    Type: number
    MetaData: any
    SponsoredData: any
    Data: [ICoin]
    HasWarning: boolean
}

export const coinAPI = createApi({
    reducerPath: 'coinAPI',
    baseQuery: coinBaseQuery as BaseQueryFn<string | FetchArgs, unknown>,
    endpoints: (build) => ({
        getTopCoins: build.query<[ICoin], Req>({
            query: ({ limit = 10, currency = 'USD' }) => ({
                url: `/top/totalvolfull?limit=${limit}&tsym=${currency}`
            }),
            transformResponse(response: Res) {
                return response.Data
            }
        })
    })
})

export const { useGetTopCoinsQuery } = coinAPI;
