export interface ICoin {
    CoinInfo: {
        Id: string
        Name: string
        FullName: string
    }
    DISPLAY: {
        [currency: string]: {
            FROMSYMBOL: string
            TOSYMBOL: string
            PRICE: string
        }
    }
}
