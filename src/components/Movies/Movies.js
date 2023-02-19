import MovieCardList from '../MoviesCardList/MoviesCardList'
import PreLoader from '../PreLoader/PreLoader'
import { Fragment } from 'react'

function Movies () {
  return (
    <Fragment>
      <MovieCardList main={true} cardsCnt={16}/>
      <PreLoader />
    </Fragment>
  )
}

export default Movies
