import { Header } from '../../LoginApp2/src/Components/Header/Header'
import { LoginForm } from './Components/LoginForm/LoginForm'
import css from './LoginApp.module.scss'
const LoginApp = () => {
	return (
		<div className={css.page}>
			<div className={css.loginContainer}>
				<Header />
				<LoginForm />
			</div>
		</div>
	)
}

export { LoginApp }
