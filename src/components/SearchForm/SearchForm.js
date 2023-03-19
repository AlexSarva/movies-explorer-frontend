import './SearchForm.css'
import searchIcon from '../../images/search-icon.svg'

function SearchForm (props) {
  // const location = useLocation()
  const handleCheckboxChange = () => {
    props.onToggleSearch()
  }

  const handleChangeSearchQuery = (e) => {
    props.onSearchChange(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSearch()
  }

  return (
    <form onSubmit={handleSubmit} className="search">
      <input onChange={handleChangeSearchQuery} className="search__input" type="text" value={props.searchData.searchMovieQuery} placeholder="Фильм" required/>
      <div className="search__filter">
        <label className={`search__switch ${props.searchData.isShortMovie && 'search__switch_active'}`}>
          <input className="search__checkbox" type="checkbox" checked={props.searchData.isShortMovie} onChange={handleCheckboxChange} />
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
