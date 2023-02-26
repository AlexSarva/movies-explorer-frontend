import './MovieCard.css'
import '../../styles/fade/fade.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function MovieCard (props) {
  const { nameRU, duration, image, trailerLink } = props.movie
  const imgSrc = 'https://api.nomoreparties.co/' + image.url

  const timeFormat = (duration) => {
    const hours = Math.floor(duration / 60)
    const minutes = Math.floor(duration % 60)
    return `${hours}ч ${minutes}м`
  }

  const timeline = timeFormat(duration)

  const [isActiveLike, setIsActiveLike] = useState(false)

  const handleLike = () => {
    setIsActiveLike(!isActiveLike)
  }

  return (
    <article className="movie-card fade fade_type_in">
      <Link to={trailerLink} className="movie-card__link link" target="_blank" rel="noopener noreferrer">
        <img className="movie-card__image" src={imgSrc} alt={nameRU} />
      </Link>
      <div className="movie-card__description">
        <h3 className="movie-card__title">{nameRU}</h3>
        <div onClick={handleLike} className={props.main === true
          ? `${isActiveLike ? 'movie-card__like movie-card__like_active' : 'movie-card__like'}`
          : 'movie-card__delete'}></div>
      </div>
      <span className="movie-card__timeline">{timeline}</span>
    </article>
  )
}

export default MovieCard
