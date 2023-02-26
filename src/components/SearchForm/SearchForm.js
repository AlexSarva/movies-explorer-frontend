import './SearchForm.css'
import searchIcon from '../../images/search-icon.svg'
import { useSearch } from '../../hook/useSearch'

function SearchForm (props) {
  // const location = useLocation()
  const { moviesSearch, toggleShortMovie, updateMovieQuery } = useSearch()

  const handleCheckboxChange = () => {
    toggleShortMovie()
  }

  const handleChangeSearchQuery = (e) => {
    updateMovieQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSearch()
  }

  return (
    <form onSubmit={handleSubmit} className="search">
      <input onChange={handleChangeSearchQuery} className="search__input" type="text" value={moviesSearch.searchMovieQuery} placeholder="Фильм" required/>
      <div className="search__filter">
        <label className={`search__switch ${moviesSearch.isShortMovie && 'search__switch_active'}`}>
          <input className="search__checkbox" type="checkbox" checked={moviesSearch.isShortMovie} onChange={handleCheckboxChange} />
          <span className="search__handle"></span>
        </label>
        <p className="search__filer-text">Короткометражки</p>
      </div>
      <button className="search__button" type="submit">
        <img className="search__icon" src={searchIcon} alt="search" />
      </button>
    </form>
  )
}

export default SearchForm
