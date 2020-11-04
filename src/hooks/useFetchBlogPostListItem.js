import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetchBlogPostListItem = () => {
  const [isLoading, setLoading] = useState(true)
  const [state, setState] = useState([])

  useEffect(() => {
    axios({
      url: '/blogposts',
      method: 'GET'
    })
      .then((response) => {
        setState(response.data.results)
        setLoading(false)
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`)
      })
  }, [])
  return [state, isLoading]
}
