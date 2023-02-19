import './SavedMovies.css'
import MovieCardList from '../MoviesCardList/MoviesCardList'
import { Fragment } from 'react'
function SavedMovies () {
  return (
    <Fragment>
      <MovieCardList main={false} cardsCnt={3}/>
      <span className="saved-movies saved-movies__span"></span>
    </Fragment>
  )
}

export default SavedMovies
