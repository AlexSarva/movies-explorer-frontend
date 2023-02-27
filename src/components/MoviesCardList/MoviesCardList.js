import './MoviesCardList.css'
import MovieCard from '../MovieCard/MovieCard'
import { useEffect } from 'react'

function MovieCardList (props) {
  useEffect(() => {
    console.log(props.movies)
  })

  return (
    <section className="movies">
      {props.movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} main={props.main} />
      )
      )}
    </section>
  )
}

export default MovieCardList
