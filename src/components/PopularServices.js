import React from 'react';


/**
 * Компонент, отображающий блок с популярными сервисами.
 * @param {Array} servicesData - Массив объектов с данными о сервисах.
 */
function PopularServices ({ servicesData }) {
  return (
    <div>
      <h2>Посещаемые сервисы</h2>
      {servicesData.map((service, index) => (
        <div key={index}>
          <a href={service.link}>{service.title}</a> - {service.description}
        </div>
      ))}
    </div>
  );
};

export default PopularServices;
