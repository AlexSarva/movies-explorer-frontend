import './MovieCard.css'
import '../../styles/fade/fade.css'
import { useState } from 'react'

function MovieCard (props) {
  const { title, timeline, img } = props.movie

  const [isActiveLike, setIsActiveLike] = useState(false)

  const handleLike = () => {
    setIsActiveLike(!isActiveLike)
  }

  return (
    <article className="movie-card fade fade_type_in">
      <img className="movie-card__image" src={img} alt={title} />
      <div className="movie-card__description">
        <h3 className="movie-card__title">{title}</h3>
        <div onClick={handleLike} className={props.main === true
          ? `${isActiveLike ? 'movie-card__like movie-card__like_active' : 'movie-card__like'}`
          : 'movie-card__delete'}></div>
      </div>
      <span className="movie-card__timeline">{timeline}</span>
    </article>
  )
}

export default MovieCard
