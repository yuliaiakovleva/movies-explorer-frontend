import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
// import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SavedMoviesCardList from "./SavedMoviesCardList/SavedMoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Movies/Preloader/Preloader";

function SavedMovies(props) {
  return (
    <>
      <section className="movies">
        <SearchForm
          setFilter={props.setFilter}
          filter={props.filter}
          location={props.location}
          searchSavedMovies={props.searchSavedMovies}
          mySearchTag={props.mySearchTag}
          handleMySearchTag={props.handleMySearchTag}
        ></SearchForm>
        {props.isLoading && <Preloader></Preloader>}
        <SavedMoviesCardList
          filter={props.filter}
          className="movies-list_saved"
          onAddMovie={props.onAddMovie}
          isClicked={props.isClicked}
          setIsClicked={props.setIsClicked}
          savedMovies={
            props.onSearch === undefined
              ? props.savedMovies
              : props.searchSaveResult
          }
          onDeleteMovie={props.onDeleteMovie}
        ></SavedMoviesCardList>
      </section>
      <Footer></Footer>
    </>
  );
}

export default SavedMovies;
