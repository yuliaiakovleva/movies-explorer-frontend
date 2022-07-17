import React from "react";
import MoviesCard from "../../Movies/MoviesCard/MoviesCard";
import SavedMovies from "../../SavedMovies/SavedMovies";

function SavedMoviesCardList(props) {
  // console.log(props.filter);

  const filterSavedMovies = props.savedMovies.filter(
    (movie) => movie.duration <= 40
  );

  const savedMoviesToRender = props.filter
    ? filterSavedMovies
    : props.savedMovies;

  return (
    <section className={`movies-list ${props.className}`}>
      <ul className="list">
        {/* сюда добавляем карточки */}
        {savedMoviesToRender.map((item) => {
          return (
            <MoviesCard
              key={item._id}
              id={item._id}
              movieId={item.movieId}
              isClicked={true}
              setIsClicked={props.setIsClicked}
              nameRU={item.nameRU}
              duration={item.duration}
              imageUrl={item.image}
              trailerLink={item.trailerLink}
              nameEN={item.nameEN}
              director={item.director}
              country={item.country}
              year={item.year}
              description={item.description}
              thumbnailUrl={item.thumbnail}
              onDeleteMovie={props.onDeleteMovie}
              onAddMovie={props.onAddMovie}
              location={props.location}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default SavedMoviesCardList;
