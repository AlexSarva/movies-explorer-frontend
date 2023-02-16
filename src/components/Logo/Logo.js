import './Logo.css';
import '../../styles/link/link.css';
import {useNavigate} from "react-router-dom";
function Logo(props) {

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/', {replace: true})
  }

  return (
    <div onClick={handleClick} className={`logo logo_area_${props.area} link`}></div>
  )
}

export default Logo;