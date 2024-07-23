import { useState } from 'react'
type DataType = {
	login: string
	password: string
	id: string
}
const BASE_URL = 'http://localhost:3000/users'

const useApi = () => {
	const [dataFromApi, setDataFromApi] = useState<DataType[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const getDataFromApi = async () => {
		setLoading(true)
		try {
			const response = await fetch(`${BASE_URL}`)
			if (response.ok) {
				const apiData = await response.json()
				setDataFromApi(apiData)
			}
		} catch (error) {
			setError('Błąd')
			console.log(error)
		} finally {
			setLoading(false)
		}
	}
	return {
		dataFromApi,
		loading,
		error,
		getDataFromApi,
	}
}

export { useApi }
