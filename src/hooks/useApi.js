import { useCallback, useState } from 'react'

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const func = useCallback(async (config, applyData) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(
        config.url,
        {
          method: config.method || 'GET',
          headers: config.headers || {},
          body: config.body ? JSON.stringify(config.body) : null
        }
      )

      if (!response.ok) {
        throw new Error('Request failed!')
      }

      const data = await response.json()
      applyData(data)
    } catch (err) {
      setError(err.message || 'Something went wrong!')
    }
    setIsLoading(false)
  }, [])

  return { isLoading, error, func }
}

export default useApi