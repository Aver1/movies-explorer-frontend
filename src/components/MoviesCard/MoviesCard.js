import cardPic from '../../images/cardPic.jpg'
import { useLocation } from "react-router-dom"; 

function MoviesCard (props) {
  let location = useLocation();

  function timeConvert() {
    let num = props.film.duration;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    if (rhours === 0) {
      return rminutes + "м";
    }
    if (rminutes === 0) {
      return rhours + "ч";
    }
      return rhours + "ч " + rminutes + "м";
    }
    
  let time = timeConvert();

  // function handleLike () {
  //   debugger;
  //   props.onLike({data: props.film})
  // }

  function getImage () {
    // debugger;
    if (!props.film.image.url) {
      return props.film.image
    }
    return `https://api.nomoreparties.co${props.film.image.url}`
  }

  let img = getImage();
  
  let isLiked = props.savedMovies.some(i => i.movieId === props.film.id);

  console.log(props.film);

  return (
    <div className="movies-card">
        <h2 className="movies-card__header">{props.film.nameRU}</h2>
        <p className="movies-card__duration">{time}</p>
        <button className={`movies-card__add-button ${props.onLike({data: props.film}) ? 'movies-card__add-button_active' : ''} ${location.pathname.includes('saved-movies') ? "movies-card__add-button_type_delete" : ""}`} onClick={ () => {!props.onLike({data: props.film}) ? props.onAddFilm({data: props.film}) : props.onRemoveFilm({data: props.film})}} type="button"></button>
        <a className="movies-card__link" href={props.film.trailerLink} target="_blank"><img className="movies-card__image" src={img} alt={props.film.nameRU}/></a>
    </div>
  )
}

export default MoviesCard;