import React from 'react'
import '../assets/styles/components/BlogPostsList.scss'
const BlogPostsList = ({ children }) => (
  <section className='blogpostslist'>
    <div className='blopostslist__container'>
      <h2>Lista de Blog Posts</h2>
      {children}
    </div>
  </section>
)

export default BlogPostsList
