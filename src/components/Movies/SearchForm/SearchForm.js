import React from 'react';
import './SearchForm.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <section className='search'>
            <form className='serch-form'>
                <div className='serch-form__row'>
                    <input className='search-form__input' name='search' placeholder='Фильм' type="text"></input>
                    <button className='search-form__button' type='submit'>Найти</button>
                </div>
                <FilterCheckbox></FilterCheckbox>
            </form>
        </section>
      );
}

export default SearchForm;