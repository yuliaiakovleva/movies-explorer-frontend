import React from 'react';
import './SearchForm.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
    
    const location = props.location.pathname;

    return (
        <section className='search' noValidate>
            <form className='serch-form'>
                <div className='serch-form__row'>
                    <input className='search-form__input' name='search' placeholder='Фильм' type="text" onChange={location === '/saved-movies' ? props.handleMySearchTag: props.handleSearchTag} value={location === '/saved-movies' ? props.mySearchTag : props.searchTag} minLength={1} required></input>
                    <button className='search-form__button' type='submit' onClick={location === '/saved-movies' ?  props.searchSavedMovies : props.search}>Найти</button>
                </div>
                <FilterCheckbox setFilter={props.setFilter} filter={props.filter}></FilterCheckbox>
            </form>
        </section>
      );
}

export default SearchForm;