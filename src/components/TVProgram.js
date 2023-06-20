import React from 'react';

/**
 * Компонент TVProgram отображает блок с телепрограммой.
 * @param {Array} programData - Массив объектов с данными о телепрограмме.
 */

function TVProgram ({ programData }) {
  return (
    <div>
      <h2>Телепрограмма</h2>
      {programData.map((program, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '10px' }}>{program.time}</span>
          <div>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TVProgram;
