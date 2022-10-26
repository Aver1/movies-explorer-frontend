import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom"; 

function MoviesCardList (props) {
  let location = useLocation();

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__cards">
        {props.children}
      </div>
      <button type="button" onClick={props.onMoreBtn} className={`movies-card-list__more-btn ${props.moreBtnStatus ? '' : 'movies-card-list__more-btn_disabled'} ${location.pathname.includes('saved-movies') ? 'movies-card-list__more-btn_disabled' : ''}`}>Ещё</button>
    </section>
  )
}

// moreBtnStatus onMoreBtn

export default MoviesCardList;