import React, { useEffect, useState } from 'react';

/**
 * Компонент для отображения курса валют в реальном времени.
 */
function CurrencyRate() {
 
 
  const [rates, setRates] = useState(null);

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then(response => response.json())
      .then(data => {
        const usdRate = data.Valute.USD.Value;
        const eurRate = data.Valute.EUR.Value;
        setRates({ usd: usdRate, eur: eurRate });
      });
  }, []);

  return (
    <div>
      <p>Курсы валют:</p>
      <p>USD: {rates ? rates.usd.toFixed(2) : 'Загрузка...'} руб.  EUR: {rates ? rates.eur.toFixed(2) : 'Загрузка...'} руб.</p>
    </div>
  );
}

export default CurrencyRate;
