export const SearchEngine = (movies, query, isShort, limit, offSet, main) => {
  const result = movies.filter((movie) => {
    return findMovie(movie, query, isShort)
  })
  return result.map((movie) => {
    if (main) {
      return convertMovieAttributes(movie)
    } else {
      return movie
    }
  }).slice(offSet, limit + offSet)
}

const convertMovieAttributes = (movie) => {
  const { id, duration, image, trailerLink, country, director, nameRU, nameEN, year, description } = movie
  return {
    id,
    nameRU,
    nameEN,
    director,
    country,
    year,
    duration,
    trailer: trailerLink,
    description,
    image: 'https://api.nomoreparties.co/' + image.url,
    thumbnail: 'https://api.nomoreparties.co/' + image.formats.thumbnail.url
  }
}

const findMovie = (movie, query, isShort) => {
  const { nameRU, nameEN, director, country, year, duration } = movie
  const searchTerm = (nameRU + nameEN + director + country + year).toLowerCase()
  if (searchTerm.includes(query.toLowerCase())) {
    if (isShort) {
      if (duration <= 40) {
        return movie
      }
    } else {
      return movie
    }
  }
}
