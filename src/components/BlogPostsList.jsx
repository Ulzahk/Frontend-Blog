import React from 'react'
import '../assets/styles/components/BlogPostsList.scss'
const BlogPostsList = ({ children }) => (
  <section className='blogpostslist'>
    <h2>Lista de Posts</h2>
    <div className='blopostslist__container'>
      {children}
    </div>
  </section>
)

export default BlogPostsList
