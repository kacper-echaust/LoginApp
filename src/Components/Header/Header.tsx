import css from './Header.module.scss'
const Header = () => {
	return (
		<div className={css.container}>
			<h1>Login</h1>
			<h4>Sign in to continue</h4>
		</div>
	)
}

export { Header }
