import './NotFound.css';
import {Link} from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__error-code">404</p>
      <p className="not-found__error">Страница не найдена</p>
      <Link to="/" className="not-found__back">Назад</Link>
    </div>
  )
}

export default NotFound;