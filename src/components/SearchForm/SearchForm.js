import './SearchForm.css'
import searchIcon from '../../images/search-icon.svg'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function SearchForm () {
  const location = useLocation()
  const navigate = useNavigate()
  const search = useRef(null)

  const [isCheckboxActive, setIsCheckboxActive] = useState(true)

  const handleCheckboxChange = () => {
    setIsCheckboxActive(!isCheckboxActive)
  }

  const clearSearch = () => {
    search.current.value = ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    clearSearch()
    navigate(location.pathname)
  }

  useEffect(() => {
    clearSearch()
  }, [])

  return (
    <form onSubmit={handleSubmit} className="search">
      <input ref={search} className="search__input" type="text" placeholder="Фильм" required/>
      <div className="search__filter">
        <label className={`search__switch ${isCheckboxActive && 'search__switch_active'}`}>
          <input className="search__checkbox" type="checkbox" checked={isCheckboxActive} onChange={handleCheckboxChange} />
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
