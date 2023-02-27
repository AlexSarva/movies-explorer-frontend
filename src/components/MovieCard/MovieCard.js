import './MovieCard.css'
import '../../styles/fade/fade.css'
import { Link } from 'react-router-dom'
import mainApi from '../../utils/MainApi'
import { useAuth } from '../../hook/useAuth'
import { useSearch } from '../../hook/useSearch'

function MovieCard (props) {
  const { token } = useAuth()
  // eslint-disable-next-line no-unused-vars
  const { updateMovies, moviesSearch } = useSearch()
  const { duration, image, trailerLink, country, director, nameRU, nameEN, year, description, isLiked } = props.movie
  const imgSrc = 'https://api.nomoreparties.co/' + image.url
  const thumbnail = 'https://api.nomoreparties.co/' + image.formats.thumbnail.url

  const timeFormat = (duration) => {
    const hours = Math.floor(duration / 60)
    const minutes = Math.floor(duration % 60)
    return `${hours}ч ${minutes}м`
  }

  const timeline = timeFormat(duration)

  const onLikeClick = () => {
    if (!isLiked) {
      mainApi.postMovie({
        country,
        director,
        nameRU,
        nameEN,
        movieId: props.movie.id,
        trailer: trailerLink,
        duration,
        year,
        description,
        thumbnail,
        image: imgSrc
      }, token)
        .then((res) => {
          console.log(res)
          // updateMovies((state) => state.map((oldMovie) => oldMovie.id === res.movieId && { ...oldMovie, isLiked: true }))
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      mainApi.deleteMovie(props.movie._id, token)
        .then((res) => {
          console.log(res)
          const newMovies = moviesSearch.movies.map((movie) => {
            if (movie._id === props.movie._id) {
              movie.isLiked = false
              movie._id = ''
              return movie
            } else {
              return movie
            }
          })
          updateMovies(newMovies)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  // eslint-disable-next-line no-unused-vars

  return (
    <article className="movie-card fade fade_type_in">
      <Link to={trailerLink} className="movie-card__link link" target="_blank" rel="noopener noreferrer">
        <img className="movie-card__image" src={imgSrc} alt={nameRU} />
      </Link>
      <div className="movie-card__description">
        <h3 className="movie-card__title">{nameRU}</h3>
        {props.main && <div onClick={onLikeClick} className={`${isLiked ? 'movie-card__like movie-card__like_active' : 'movie-card__like'}`}></div>}
        {!props.main && <div className="movie-card__delete"></div>}
      </div>
      <span className="movie-card__timeline">{timeline}</span>
    </article>
  )
}

export default MovieCard
