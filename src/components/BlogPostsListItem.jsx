import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/BlogPostsListItem.scss'
import imagePost from '../assets/static/image-posts.jpg'

const BlogPostsListsItem = () => {
  const title = 'Título'
  const date = '29/10/2020'
  const mainParagraph = 'Parrafo principal'
  return (
    <Link className='blopostslist__container--link' to='/blogpost'>
      <div className='blopostslist__container--item'>
        <div className='item__leftside'>
          <p className='item__leftside--date'>{date}</p>
          <img className='item__leftside--image' src={imagePost} alt='image' />
        </div>
        <div className='item__rightside'>
          <h3 className='item__rightside--title'>{title}</h3>
          <p className='item__rightside--main'>{mainParagraph}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogPostsListsItem
