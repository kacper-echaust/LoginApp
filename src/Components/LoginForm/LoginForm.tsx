import { ChangeEvent } from 'react'
import { useAuthorization } from '../../hooks/useAuthorization'
import { useLogin } from '../../hooks/useLogin'
import css from './LoginForm.module.scss'

const LoginForm = () => {
	const { getUserData, userData } = useLogin()
	const { checkData } = useAuthorization()
	const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault()
		checkData(userData)
	}
	return (
		<form onSubmit={handleSubmit} className={css.form}>
			<label>LOGIN</label>
			<input type='text' name='login' onChange={getUserData} className={css.input} placeholder='Kacper' />
			<label>PASSWORD</label>
			<input
				type='password'
				name='password'
				onChange={getUserData}
				className={css.input}
				placeholder='********'
			/>
			<p>
				You don't have a account? <span className={css.register}>Register</span>
			</p>
			<button type='submit' className={css.loginButton}>
				sign up
			</button>
		</form>
	)
}

export { LoginForm }
