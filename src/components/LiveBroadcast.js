import React from 'react';
import liveBroadcastData from '../data/liveBroadcastData';

/**
 * Компонент LiveBroadcast отображает блок с эфиром.
 *
 * @param {Array} liveBroadcastData - Массив объектов с данными об эфирах.
 */

function LiveBroadcast () {
  return (
    <div>
      <h2>Текущий эфир</h2>
      {liveBroadcastData.map((broadcast, index) => (
        <div key={index} style={{ display: 'flex' }}>
          <p style={{ marginRight: '10px' }}>Канал: {broadcast.channel}</p>
          <p style={{ marginRight: '10px' }}>Время начала: {broadcast.time}</p>
          <h3>{broadcast.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default LiveBroadcast;
