/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/BlogPostsListItem.scss'
import { useFetchBlogPostListItem } from '../hooks/useFetchBlogPostListItem'

const BlogPostsListsItem = (props) => {
  const data = useFetchBlogPostListItem()
  const state = data[0]
  const isLoading = data[1]

  const newBlogPostsList = state.slice(0)
  newBlogPostsList.reverse()

  if (isLoading) {
    return (
      <div className='app'>
        <p className='app__loader' />
      </div>
    )
  }

  return (
    newBlogPostsList.map((item) => (
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
