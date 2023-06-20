import React, { useState } from 'react';
import newsData from '../data/NewsData';

/**
 * Компонент News отображает список новостей с вкладками для переключения категорий.
 * @param {array} news - Массив объектов новостей.
 */

function News() {
  const [activeTab, setActiveTab] = useState('В России');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const activeNews = newsData[activeTab];

  return (
    <div>
      {/* Вкладки для переключения категорий новостей */}
      <div>
        <button onClick={() => handleTabClick('В России')} className={activeTab === 'В России' ? 'active' : ''}>
          В России
        </button>
        <button onClick={() => handleTabClick('В Мире')} className={activeTab === 'В Мире' ? 'active' : ''}>
          В Мире
        </button>
        <button onClick={() => handleTabClick('Рекомендуемые')} className={activeTab === 'Рекомендуемые' ? 'active' : ''}>
          Рекомендуемые
        </button>
      </div>

      {/* Список новостей */}
      <div>
        {activeNews.map((item, index) => (
          <div key={index}>
             {item.icon && <img src={item.icon} alt="Иконка новости" />}
            <a href={item.link}>{item.text}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
