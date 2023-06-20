import React, { useState } from 'react';
import yandexLogo from '../img/yandex_logo.png'

function Search({ filters }) {
    const [searchQuery, setSearchQuery] = useState('');


    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
       
    };

    return (
        <div>

            {/* Окно поиска и кнопка */}
            <form onSubmit={handleSubmit}>
                <img src={yandexLogo} alt="Логотип" />
                {/* Фильтры */}
                <div>
                    {filters.map((filter, index) => (
                        <a key={index} href="#">
                            {filter}
                        </a>
                    ))}
                </div>
                <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Введите запрос" />
                <button type="submit">Найти</button>
            </form>
        </div>
    );
}

export default Search;