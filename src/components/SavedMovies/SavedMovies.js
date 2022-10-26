import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies (props) {
  return (
    <main className="saved-movies">
      <SearchForm movieName={props.movieName} onSetMovieName={props.onSetMovieName} checkBox={props.checkBox} onSetCheckBox={props.onSetCheckBox} onSearch={props.onSearch}></SearchForm>
      <h2 className="saved-movies__filter-error">{props.onFilterError}</h2>
      <MoviesCardList>
        {
          props.filteredMovies.slice(0, props.moviesCount).map((movie) => (
            <MoviesCard onRemoveFilm={props.onRemoveFilm} onAddFilm={props.onAddFilm} savedMovies={props.savedMovies} key={movie.id} film={movie} onLike={props.onLike}></MoviesCard>
          ))
        }
      </MoviesCardList>
    </main>
  );
}

export default SavedMovies;