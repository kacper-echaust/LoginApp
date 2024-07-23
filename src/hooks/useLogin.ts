import { ChangeEvent, useState } from 'react'
export type UserDataType = {
	login: string
	password: string
}
const useLogin = () => {
	const [userData, setUserData] = useState({
		login: '',
		password: '',
	})
	const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
		setUserData(prevUserData => ({ ...prevUserData, [event.target.name]: event.target.value }))
	}
	return {
		userData,
		getUserData,
	}
}

export { useLogin }
