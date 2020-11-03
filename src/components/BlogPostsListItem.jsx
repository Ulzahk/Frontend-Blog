/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../assets/styles/components/BlogPostsListItem.scss'

const BlogPostsListsItem = () => {
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

  if (isLoading) {
    return (
      <div className='app'>
        <p className='app__loader' />
      </div>
    )
  }
  return (
    state.map((item) => (
      <Link className='blopostslist__container--link' to={`/blogpost/${item.meta_title}`}>
        <div className='blopostslist__container--item'>
          <div className='item__leftside'>
            <p className='item__leftside--date'>{item.published_date}</p>
            <img className='item__leftside--image' src={item.cover} alt={`Imagen principal del blog post ${item.title}`} />
          </div>
          <div className='item__rightside'>
            <h3 className='item__rightside--title'>{item.title}</h3>
            <p className='item__rightside--category'><label>{item.category}</label></p>
            <p className='item__rightside--main'>{item.main_paragraph}</p>
          </div>
        </div>
      </Link>
    ))
  )
}

export default BlogPostsListsItem
