import cardPic from '../../images/cardPic.jpg'
import { useLocation } from "react-router-dom"; 

function MoviesCard (props) {
  let location = useLocation();

  return (
    <div className="movies-card">
        <h2 className="movies-card__header">33 слова о дизайне</h2>
        <p className="movies-card__duration">1ч 47м</p>
        <button className={`movies-card__add-button ${location.pathname.includes('saved-movies') ? "movies-card__add-button_type_delete" : ""}`} type="button"></button>
        <img className="movies-card__image" src={cardPic}/>
    </div>
  )
}

export default MoviesCard;