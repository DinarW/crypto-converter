import React, { useState } from 'react';

const SelectTableCurrency = () => {
    const [currency, setCurrency] = useState('USD')

    return (
        <form>
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
    );
};

export default SelectTableCurrency;
