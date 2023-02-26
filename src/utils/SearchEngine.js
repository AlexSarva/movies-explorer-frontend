export const SearchEngine = (movies, query, isShort, limit, offSet) => {
  const result = movies.filter((movie) => {
    return findMovie(movie, query, isShort)
  })
  return result.slice(offSet, limit + offSet)
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
