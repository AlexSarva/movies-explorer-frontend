import './SavedMovies.css'
import MovieCardList from '../MoviesCardList/MoviesCardList'
import { Fragment } from 'react'
import SearchForm from '../SearchForm/SearchForm'
function SavedMovies () {
  return (
    <Fragment>
      <SearchForm />
      <MovieCardList main={false} movies={[]}/>
      <span className="movies-span"></span>
    </Fragment>
  )
}

export default SavedMovies
