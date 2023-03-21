import './MoviesCardList.css'
import MovieCard from '../MovieCard/MovieCard'

function MovieCardList (props) {
  return (
    <section className="movies">
      {props.main && props.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} main={props.main} onDeleteCard={props.onDeleteCard}/>
      )
      )}
      {!props.main && props.movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} main={props.main} onDeleteCard={props.onDeleteCard}/>
      )
      )}
    </section>
  )
}

export default MovieCardList
