import './SearchForm.css'
import searchIcon from '../../images/search-icon.svg'
import searchIconBlack from '../../images/search-icon-black.svg'
import useInput from '../../hook/useInput'

function SearchForm (props) {
  const query = useInput(props.searchData.searchMovieQuery, { isEmpty: true, minLength: 1 })

  const handleCheckboxChange = () => {
    props.onToggleSearch()
  }

  const handleChangeSearchQuery = (e) => {
    query.onChange(e.target.value)
    props.onSearchChange(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSearch()
  }

  return (
    <form onSubmit={handleSubmit} className="search">
      <input onChange={e => handleChangeSearchQuery(e)} className="search__input" type="text" value={props.searchData.searchMovieQuery} placeholder="Фильм" />
      {(query.isDirty && query.minLengthError) && <span className="search__input-error">Нужно ввести ключевое слово</span>}
      <div className="search__filter">
        <label className={`search__switch ${props.searchData.isShortMovie && 'search__switch_active'}`}>
          <input className="search__checkbox" type="checkbox" checked={props.searchData.isShortMovie} onChange={handleCheckboxChange} disabled={props.loading}/>
          <span className="search__handle"></span>
        </label>
        <p className="search__filer-text">Короткометражки</p>
      </div>
      <button disabled={!query.queryInputValid || props.loading} className="search__button" type="submit">
        {query.queryInputValid ? <img className="search__icon" src={searchIcon} alt="search" /> : <img className="search__icon" src={searchIconBlack} alt="search" />}
      </button>
    </form>
  )
}

export default SearchForm
