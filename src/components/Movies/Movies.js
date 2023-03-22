import MovieCardList from '../MoviesCardList/MoviesCardList'
import Paginator from '../Paginator/Paginator'
import { Fragment, useEffect, useState } from 'react'
import { useSearch } from '../../hook/useSearch'
import SearchForm from '../SearchForm/SearchForm'
import movieApi from '../../utils/MoviesApi'
import { SearchEngine } from '../../utils/SearchEngine'
import Preloader from '../Preloader/Preloader'
import SearchError from '../SearchError/SearchError'
import { useWindowDimensions } from '../../hook/useWindowDimensions'
import mainApi from '../../utils/MainApi'
import { useAuth } from '../../hook/useAuth'

function Movies () {
  const { moviesSearch, toggleShortMovie, updateMovieQuery, updateMovies, appendMovies } = useSearch()
  const [allMovies, setAllMovies] = useState([])
  const [isDataReady, setIsDataReady] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [offSet, setOffSet] = useState(0)
  const [isActivePaginator, setIsActivePaginator] = useState(false)
  const [isActiveNoContent, setIsActiveNoContent] = useState(false)
  const [isApiError, setIsApiError] = useState(false)
  const [initCardsCount, setInitCardsCount] = useState(4)
  const [addCardsCount, setAddCardsCount] = useState(2)
  const { height, width } = useWindowDimensions()
  const { token } = useAuth()

  const checkPagination = (moviesLength, limit) => {
    moviesLength < limit ? setIsActivePaginator(false) : setIsActivePaginator(true)
  }

  const firstMovieLoad = () => {
    setIsLoading(true)
    setIsApiError(false)
    setIsDataReady(false)
    Promise.all([movieApi.getMovies(), mainApi.getMovies(token)])
      .then(([movies, savedMovies]) => {
        return movies.map((movie) => {
          movie.isLiked = !!savedMovies.find((savedMovie) => savedMovie.movieId === movie.id)
          movie._id = !!savedMovies.find((savedMovie) => savedMovie.movieId === movie.id) && savedMovies.find((savedMovie) => savedMovie.movieId === movie.id)._id
          return movie
        })
      })
      .then((res) => {
        if (res.length > 0) {
          setAllMovies(res)
          setIsDataReady(true)
        }
        setIsLoading(false)
      })
      .catch((err) => {
        setIsApiError(true)
        console.log(err)
      })
  }

  const onSearch = () => {
    const { isShortMovie, searchMovieQuery } = moviesSearch
    if (searchMovieQuery !== '') {
      setOffSet(0)
      const res = SearchEngine(allMovies, searchMovieQuery, isShortMovie, initCardsCount, 0, true)
      if (res.length > 0) {
        setIsActiveNoContent(false)
        updateMovies(res)
        setOffSet(offSet + res.length)
      } else {
        updateMovies([])
        setIsActiveNoContent(true)
      }
      checkPagination(res.length, initCardsCount)
      setIsLoading(false)
    }
  }

  const paginateMovies = () => {
    setIsLoading(true)
    const { isShortMovie, searchMovieQuery } = moviesSearch
    const res = SearchEngine(allMovies, searchMovieQuery, isShortMovie, addCardsCount, offSet, true)
    if (res.length > 0) {
      appendMovies(res)
      setOffSet(offSet + res.length)
    }
    checkPagination(res.length, addCardsCount)
    setIsLoading(false)
  }

  const calibrateCardsCount = (initWidth) => {
    switch (true) {
      case initWidth >= 1280:
        setInitCardsCount(12)
        setAddCardsCount(4)
        break
      case initWidth >= 768 && initWidth < 1280:
        setInitCardsCount(8)
        setAddCardsCount(2)
        break
      case initWidth < 768:
        setInitCardsCount(5)
        setAddCardsCount(2)
        break
      default:
    }
  }

  useEffect(() => {
    calibrateCardsCount(width)
  }, [height, width])

  useEffect(() => {
    firstMovieLoad()
  }, [])

  useEffect(() => {
    if (isDataReady) {
      onSearch()
    }
  }, [moviesSearch.isShortMovie, isDataReady])

  return (
    <Fragment>
      <SearchForm onSearch={onSearch} searchData={moviesSearch} onToggleSearch={toggleShortMovie} onSearchChange={updateMovieQuery}/>
      {moviesSearch.movies.length > 0 && <MovieCardList main={true} movies={moviesSearch.movies} />}
      {isLoading && <Preloader />}
      {isActiveNoContent && <SearchError errorText="Ничего не найдено" />}
      {isApiError && <SearchError errorText="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз "/>}
      {isActivePaginator && <Paginator onPaginate={paginateMovies}/>}
    </Fragment>
  )
}

export default Movies
