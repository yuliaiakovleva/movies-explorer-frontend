import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    return (
        <section className={`movies-list ${props.className}`}>   
            <ul className='list'>
                {/* сюда добавляем карточки */}
                <MoviesCard></MoviesCard>
            </ul>
        {props.children}
        </section>
    )
};

export default MoviesCardList