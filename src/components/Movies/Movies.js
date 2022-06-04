import React from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
// import Preloader from './Preloader/Preloader';
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <section className="movies">
      <SearchForm></SearchForm>
      {/* <Preloader></Preloader> */}
      <MoviesCardList
        children={
          <div className="movies-list__loading">
            <button type="button" className="movies-list__button">
              Еще
            </button>
          </div>
        }
      ></MoviesCardList>
    </section>
  );
}

export default Movies;
