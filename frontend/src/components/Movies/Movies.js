import React from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies(props) {
  return (
    <>
      <section className="movies">
        <SearchForm
          search={props.search}
          setSearchTag={props.setSearchTag}
          searchTag={props.searchTag}
          handleSearchTag={props.handleSearchTag}
          setFilter={props.setFilter}
          filter={props.filter}
          location={props.location}
        ></SearchForm>
        {props.isLoading && <Preloader></Preloader>}

        <MoviesCardList
          onAddMovie={props.onAddMovie}
          isClicked={props.isClicked}
          setIsClicked={props.setIsClicked}
          savedMovies={props.savedMovies}
          movies={props.movies}
          onDeleteMovie={props.onDeleteMovie}
          width={props.width}
          location={props.location}
          filter={props.filter}
        ></MoviesCardList>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Movies;
