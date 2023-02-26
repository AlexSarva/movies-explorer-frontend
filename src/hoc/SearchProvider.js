import { createContext, useEffect, useMemo, useState } from 'react'

export const SearchContext = createContext(null)

export const SearchProvider = ({ children }) => {
  const [moviesSearch, setMoviesSearch] = useState(JSON.parse(window.localStorage.getItem('movies')) || {
    searchMovieQuery: '',
    movies: [],
    isShortMovie: false
  })

  const toggleShortMovie = () => {
    setMoviesSearch({
      ...moviesSearch,
      isShortMovie: !moviesSearch.isShortMovie
    })
  }

  const updateMovieQuery = (query) => {
    setMoviesSearch({
      ...moviesSearch,
      searchMovieQuery: query
    })
  }

  const updateMovies = (movies) => {
    setMoviesSearch({
      ...moviesSearch,
      movies
    })
  }

  const appendMovies = (movies) => {
    setMoviesSearch({
      ...moviesSearch,
      movies: [...moviesSearch.movies, ...movies]
    })
  }

  useEffect(() => {
    window.localStorage.setItem('movies', JSON.stringify(moviesSearch))
  }, [moviesSearch])

  const value = useMemo(() => ({
    moviesSearch, toggleShortMovie, updateMovieQuery, updateMovies, appendMovies
  }),
  [moviesSearch, toggleShortMovie, updateMovieQuery, updateMovies, appendMovies]
  )

  return <SearchContext.Provider value={value}>
    {children}
  </SearchContext.Provider>
}
