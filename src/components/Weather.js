import React from 'react';
import weatherImg from '../img/weather.png'

/**
 * Компонент Weather отвечает за отображение прогноза погоды.
 */

function Weather() {
  return (
    <div>
      <h2>Погода</h2>
      <div>
      <img src={weatherImg} alt="Иконка погоды" />
      <p>31°C</p>
      </div>
    </div>
  );
}

export default Weather;