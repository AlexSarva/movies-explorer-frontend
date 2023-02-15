import './Logo.css';
function Logo(props) {
  return (
    <div className={`logo logo_area_${props.area}`}></div>
  )
}

export default Logo;