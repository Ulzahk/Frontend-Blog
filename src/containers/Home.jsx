import React from 'react'
import BlogPostsList from '../components/BlogPostsList'
import BlogPostsListItem from '../components/BlogPostsListItem'
import '../assets/styles/App.scss'
import '../assets/styles/Media.scss'

const Home = () => {
  return (
    <BlogPostsList>
      <BlogPostsListItem />
      <BlogPostsListItem />
      <BlogPostsListItem />
    </BlogPostsList>
  )
}

export default Home
