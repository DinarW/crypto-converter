import React, {useState} from 'react';
import { useGetTopCoinsQuery } from "./services/CoinService";

function App() {
    const [currency, setCurrency] = useState('USD')
    const { data, isLoading } = useGetTopCoinsQuery({ limit: 10, currency })

    return (
        <div>
            <form style={{ marginBottom: '20px' }}>
                <label htmlFor="city-currency">Валюта </label>
                <select
                    name="currency" id="city-currency"
                    onChange={({ target }) => setCurrency(target.value)}
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="RUB">RUB</option>
                </select>
            </form>
            <div>
                {!isLoading && data?.map(coin => {
                    const { Id, ImageUrl, FullName } = coin.CoinInfo

                    return (
                        <div key={Id}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={ImageUrl} alt="coin-icon"
                                     width="16px" height="16px" style={{ marginRight: '5px' }}
                                />
                                <p>{FullName}: {coin.DISPLAY[currency]?.PRICE}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
