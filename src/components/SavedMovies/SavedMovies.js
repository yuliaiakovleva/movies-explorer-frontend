import React from 'react'
import './SavedMovies.css'
import SearchForm from '../Movies/SearchForm/SearchForm'
// import Preloader from './Preloader/Preloader';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';


function SavedMovies() {

    return (
        <section className='movies'>   
            <SearchForm></SearchForm>
            <MoviesCardList className='movies-list_saved'></MoviesCardList>
        </section>
    )
};

export default SavedMovies