import './SavedMovies.css'
import MovieCardList from '../MoviesCardList/MoviesCardList'
import { Fragment, useEffect, useState } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import { useAuth } from '../../hook/useAuth'
import mainApi from '../../utils/MainApi'
import SearchError from '../SearchError/SearchError'
import { SearchEngine } from '../../utils/SearchEngine'
import Preloader from '../Preloader/Preloader'

function SavedMovies () {
  const [isLoading, setIsLoading] = useState(false)
  const [moviesSearch, setMoviesSearch] = useState({
    searchMovieQuery: '',
    movies: [],
    isShortMovie: false
  })
  const [allMovies, setAllMovies] = useState([])
  const [isDataReady, setIsDataReady] = useState(false)
  const [isActiveNoContent, setIsActiveNoContent] = useState(false)
  const [isApiError, setIsApiError] = useState(false)
  const { token } = useAuth()

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

  const updateMovies = (newMovies) => {
    setMoviesSearch({
      ...moviesSearch,
      movies: newMovies
    })
  }

  const initMovies = () => {
    setIsLoading(true)
    setIsDataReady(false)
    mainApi.getMovies(token)
      .then((res) => {
        if (res.length > 0) {
          updateMovies(res)
          setAllMovies(res)
          setIsDataReady(true)
          setIsLoading(false)
          setIsActiveNoContent(false)
        } else {
          setIsLoading(false)
          setIsActiveNoContent(true)
        }
      })
      .catch((err) => {
        setIsLoading(false)
        setIsApiError(true)
        console.log(err)
      })
  }

  const onSearch = () => {
    const { isShortMovie, searchMovieQuery } = moviesSearch
    const res = SearchEngine(allMovies, searchMovieQuery, isShortMovie, allMovies.length, 0, false)
    if (res.length > 0) {
      updateMovies(res)
      setIsActiveNoContent(false)
    } else {
      updateMovies([])
      setIsActiveNoContent(true)
    }
  }

  const onDeleteCard = (id) => {
    updateMovies(moviesSearch.movies.filter((movie) => movie._id !== id))
  }

  useEffect(() => {
    initMovies()
  }, [])

  useEffect(() => {
    if (moviesSearch.movies.length === 0) {
      setIsActiveNoContent(true)
    } else {
      setIsActiveNoContent(false)
    }
  }, [moviesSearch.movies])

  useEffect(() => {
    if (isDataReady) {
      onSearch()
    }
  }, [moviesSearch.isShortMovie, isDataReady])

  return (
    <Fragment>
      <SearchForm onSearch={onSearch} searchData={moviesSearch} onToggleSearch={toggleShortMovie} onSearchChange={updateMovieQuery}/>
      {moviesSearch.movies.length > 0 && <MovieCardList main={false} movies={moviesSearch.movies} onDeleteCard={onDeleteCard}/>}
      {isLoading && <Preloader />}
      {isActiveNoContent && <SearchError errorText="Ничего не найдено" />}
      {isApiError && <SearchError errorText="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз "/>}
    </Fragment>
  )
}

export default SavedMovies
