import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';

function SearchForm() {
  return (
    <form className="search">
      <input className="search__input" type="text" placeholder="Фильм" />
      <div className="search__filter">
        <label className="search__switch">
          <input className="search__checkbox" type="checkbox" />
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

export default SearchForm;