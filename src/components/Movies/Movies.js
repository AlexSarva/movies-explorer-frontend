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

  const prepareFirstSearch = () => {
    setIsApiError(false)
    setIsActiveNoContent(false)
    updateMovies([])
    setIsLoading(true)
  }

  const initMovies = () => {
    Promise.all([movieApi.getMovies(), mainApi.getMovies(token)])
      .then(([movies, savedMovies]) => {
        const clearMovies = SearchEngine(movies, moviesSearch.searchMovieQuery, moviesSearch.isShortMovie, initCardsCount, 0, true)
        return clearMovies.map((movie) => {
          movie.isLiked = !!savedMovies.find((savedMovie) => savedMovie.movieId === movie.id)
          movie._id = !!savedMovies.find((savedMovie) => savedMovie.movieId === movie.id) && savedMovies.find((savedMovie) => savedMovie.movieId === movie.id)._id
          return movie
        })
      })
      .then((res) => {
        if (res.length > 0) {
          updateMovies(res)
          setOffSet(offSet + res.length)
        } else {
          setIsActiveNoContent(true)
        }
        checkPagination(res.length, initCardsCount)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsApiError(true)
        setIsLoading(false)
        console.log(err)
      })
  }

  const onSearch = () => {
    prepareFirstSearch()
    initMovies()
  }

  const paginateMovies = () => {
    setIsLoading(true)
    setIsApiError(false)
    movieApi.getMovies()
      .then((res) => {
        return SearchEngine(res, moviesSearch.searchMovieQuery, moviesSearch.isShortMovie, addCardsCount, offSet, true)
      })
      .then((res) => {
        if (res.length > 0) {
          appendMovies(res)
          setOffSet(offSet + res.length)
        }
        checkPagination(res.length, addCardsCount)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsApiError(true)
        setIsLoading(false)
        console.log(err)
      })
  }

  useEffect(() => {
    switch (true) {
      case width >= 1280:
        setInitCardsCount(12)
        setAddCardsCount(4)
        break
      case width >= 768 && width < 1280:
        setInitCardsCount(8)
        setAddCardsCount(2)
        break
      case width < 768:
        setInitCardsCount(5)
        setAddCardsCount(2)
        break
      default:
    }
  }, [height, width])

  return (
    <Fragment>
      <SearchForm onSearch={onSearch} searchData={moviesSearch} onToggleSearch={toggleShortMovie} onSearchChange={updateMovieQuery}/>
      {moviesSearch.movies.length > 0 && <MovieCardList main={true} movies={moviesSearch.movies}/>}
      {isLoading && <Preloader />}
      {isActiveNoContent && <SearchError errorText="Ничего не найдено" />}
      {isApiError && <SearchError errorText="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз "/>}
      {isActivePaginator && <Paginator onPaginate={paginateMovies}/>}
    </Fragment>
  )
}

export default Movies
