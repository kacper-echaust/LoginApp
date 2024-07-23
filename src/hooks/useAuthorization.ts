import { useEffect, useState } from 'react'
import { useApi } from '../../../LoginApp/src/hooks/useApi'
import { UserDataType } from './useLogin'

const useAuthorization = () => {
	const [isLogged, setIsLogged] = useState(false)
	const { data, getDataFromApi } = useApi()

	useEffect(() => {
		getDataFromApi()
	}, [])
	const checkData = (userData: UserDataType) => {
		data.map((user: { login: string; password: string }) => {
			if (user.login === userData.login) {
				if (user.password === userData.password) {
					setIsLogged(true)
				}
			}
		})
	}
	return {
		isLogged,
		checkData,
		setIsLogged
	}
}

export { useAuthorization }
