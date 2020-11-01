/* eslint-disable camelcase */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const useFetchBlogPostDetails = () => {
  const meta_title = useParams().meta_title
  const [isLoading, setLoading] = useState(true)
  const [state, setState] = useState([])

  useEffect(() => {
    axios({
      url: `https://backend-blog-ulzahk.vercel.app/blogposts/${meta_title}`,
      method: 'GET'
    })
      .then((response) => {
        const blogpost_data = response.data.result
        setState(blogpost_data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(`${err.name} : ${err.message}`)
      })
  }, [])

  return [state, isLoading]
}
