import './Paginator.css'

function Paginator (props) {
  return (
    <section className="paginator">
      <button onClick={props.onPaginate} type="button" className="paginator__button">
        <span className="paginator__text">Eщё</span>
      </button>
    </section>
  )
}

export default Paginator
