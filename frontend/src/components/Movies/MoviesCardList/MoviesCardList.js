import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
// не удалять!
import SavedMovies from "../../SavedMovies/SavedMovies";
//

function MoviesCardList(props) {
  const width = props.width;
  const fullScreen = width > 768;
  const mediumScreen = width <= 768 && width >= 480;
  const smallScreen = width < 480;

  const [index, setIndex] = useState(3);

  useEffect(() => {
    if (fullScreen) {
      setIndex(12);
    }
    if (mediumScreen) {
      setIndex(8);
    }
    if (smallScreen) {
      setIndex(5);
    }
  }, [width]);

  const filterMovies = props.movies.filter((movie) => movie.duration <= 40);

  const itemsToRender = props.filter
    ? filterMovies.slice(0, index)
    : props.movies.slice(0, index);

  function loadFilms() {
    if (smallScreen) {
      setIndex(index + 2);
    } else {
      setIndex(index + 3);
    }
  }

  function isDisabled() {
    return index > itemsToRender.length;
  }

  return (
    <section className={`movies-list ${props.className}`}>
      <ul className="list">
        {/* сюда добавляем карточки */}
        {itemsToRender.map((item) => {
          // console.log(item);
          return (
            <MoviesCard
              key={item.id}
              // нашли в массиве какой-то объект и потом обратились к его свойству _id
              id={
                props.savedMovies.find((movie) => movie.movieId === item.id)
                  ?._id
              }
              //key будет равняться movieId
              movieId={item.id}
              nameRU={item.nameRU}
              duration={item.duration}
              imageUrl={`https://api.nomoreparties.co/${item.image.url}`}
              trailerLink={
                item.trailerLink === null ||
                item.trailerLink === "" ||
                !item.trailerLink.includes("/")
                  ? "https://yandex.ru/"
                  : item.trailerLink
              }
              nameEN={
                item.nameEN === null || item.nameEN === ""
                  ? item.nameRU
                  : item.nameEN
              }
              director={item.director}
              country={item.country === null ? "No information" : item.country}
              year={item.year}
              description={item.description}
              thumbnailUrl={item.image.formats.thumbnail.url}
              onAddMovie={props.onAddMovie}
              onDeleteMovie={props.onDeleteMovie}
              isClicked={props.savedMovies.find(
                (movie) => movie.movieId === item.id
              )}
              setIsClicked={props.setIsClicked}
              location={props.location}
            />
          );
        })}
      </ul>
      <div className="movies-list__loading">
        <button
          type="button"
          className={`movies-list__button ${
            index > itemsToRender.length ? "movies-list__button_inactive" : ""
          }`}
          onClick={loadFilms}
          //надо подгружать 2 фотки на смолскрине
          disabled={isDisabled()}
        >
          Еще
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
