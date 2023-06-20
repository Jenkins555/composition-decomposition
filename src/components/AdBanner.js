import React from 'react';

/**
 * Компонент AdBanner отвечает за рекламный баннер.
 */
function AdBanner({ imageUrl, linkUrl }) {
  return (
    <a href={linkUrl}>
      <img src={imageUrl} alt="Рекламный баннер"  width={'500px'} height={'100px'} />
    </a>
  );
}

export default AdBanner;
