import './MoviesCardList.css'
import MovieCard from '../MovieCard/MovieCard'

function MovieCardList (props) {
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
