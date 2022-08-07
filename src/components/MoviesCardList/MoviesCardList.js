import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom"; 

function MoviesCardList (props) {
  let location = useLocation();

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__cards">
        {props.children}
      </div>
      <button type="button" className={`movies-card-list__more-btn ${location.pathname.includes('saved-movies') ? 'movies-card-list__more-btn_disabled' : ''}`}>Ещё</button>
    </section>
  )
}

export default MoviesCardList;