/* eslint-disable camelcase */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetchBlogPostDetails = () => {
  const meta_title = sessionStorage.getItem('meta_title')

  const [state, setState] = useState([])

  useEffect(() => {
    axios({
      url: `https://backend-blog-ulzahk.vercel.app/blogposts/${meta_title}`,
      method: 'GET'
    })
      .then((response) => {
        const blogpost_data = response.data.result
        setState(blogpost_data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return [state]
}
