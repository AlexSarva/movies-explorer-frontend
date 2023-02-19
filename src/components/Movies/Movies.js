import MovieCardList from '../MoviesCardList/MoviesCardList'
import Paginator from '../Paginator/Paginator'
import { Fragment } from 'react'

function Movies () {
  return (
    <Fragment>
      <MovieCardList main={true} cardsCnt={16}/>
      <Paginator />
    </Fragment>
  )
}

export default Movies
