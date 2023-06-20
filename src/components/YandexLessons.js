import React from 'react';

/**
 * Компонент YandexLessons отвечает за отображение блока уроков.
 */


function YandexLessons  ({ avatar, title, description }) {
  return (
    <div className="yandex-lessons">
      <img src={avatar} alt="Аватар уроков" className="avatar" style={{ borderRadius: '40%', width: '130px' }} />
      <h2>
        <a href="#">{title}</a>
      </h2>
      <p>{description}</p>
    </div>
  );
};

export default YandexLessons;
