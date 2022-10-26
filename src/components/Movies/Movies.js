import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";

function Movies (props) {
  return (
    <main className="movies">
      <SearchForm onLoadMovies={props.onLoadMovies} movieName={props.movieName} onSetMovieName={props.onSetMovieName} checkBox={props.checkBox} onSetCheckBox={props.onSetCheckBox} onSearch={props.onSearch}></SearchForm>
      <h2 className="movies__filter-error">{props.onFilterError}</h2>
      {props.preloader ? <Preloader></Preloader> : false}
      <MoviesCardList onMoreBtn={props.onMoreBtn} moreBtnStatus={props.moreBtnStatus}>
        {
          props.movies.slice(0, props.moviesCount).map((movie) => (
            <MoviesCard onAddFilm={props.onAddFilm} onRemoveFilm={props.onRemoveFilm} savedMovies={props.savedMovies} key={movie.id} film={movie} onLike={props.onLike}></MoviesCard>
          ))
        }
      </MoviesCardList>
    </main>
  );
}

export default Movies;