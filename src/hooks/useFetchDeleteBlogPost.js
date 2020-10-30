/* eslint-disable */
import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetchDeleteBlogPost = (blogpost_id) => {
  const [state, setState] = useState([])

  useEffect(() => {
    axios({
      url: `https://backend-blog-ulzahk.vercel.app/blogposts/${blogpost_id}`,
      method: 'DELETE'
    })
      .then((response) => {
      })
      .catch((err) => {
        console.error(`${err.name} : ${err.message}`)
      })
  }, [])

  return [state]
}
