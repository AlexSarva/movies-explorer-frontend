import './Logo.css';
import {useNavigate} from "react-router-dom";
function Logo(props) {

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/', {replace: true})
  }

  return (
    <div onClick={handleClick} className={`logo logo_area_${props.area}`}></div>
  )
}

export default Logo;