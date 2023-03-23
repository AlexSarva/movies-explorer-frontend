import './SearchError.css'
function SearchError (props) {
  return (
    <div className="search-error">
      <h3 className="search-error__container">{props.errorText}</h3>
    </div>
  )
}

export default SearchError
