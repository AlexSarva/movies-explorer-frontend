import './MoviesCardList.css'
import { PreloadMovies } from '../../utils/constants'
import MovieCard from '../MovieCard/MovieCard'

function MovieCardList (props) {
  const slice = PreloadMovies.slice(0, props.cardsCnt)

  return (
    <section className="movies">
      {slice.map((movie, index) => (
        <MovieCard key={index} movie={movie} main={props.main} />
      )
      )}
    </section>
  )
}

export default MovieCardList
