import Logo from "../Logo/Logo";

function AuthForm(props) {
  return (
    <section className="auth">
      <div className="auth__container">
        <Logo area="auth" />
        <h2 className="auth__title">{props.title}</h2>
        {props.children}
      </div>
    </section>
  )
}

export default AuthForm;