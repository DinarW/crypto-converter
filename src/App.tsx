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
                {!isLoading && data?.map(coin => (
                    <div key={coin.CoinInfo.Id}>{coin.CoinInfo.FullName}: {coin.DISPLAY[currency]?.PRICE}</div>
                ))}
            </div>
        </div>
    );
}

export default App;
