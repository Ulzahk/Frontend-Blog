import React from 'react'
import '../assets/styles/components/BlopPostDetails.scss'
import { useFetchBlogPostDetails } from '../hooks/useFetchBlogPostDetails'

const BlogPostDetails = () => {
  const data = useFetchBlogPostDetails()
  const blogPostData = data[0]
  return (
    <section className='blogpostdetails'>
      <div className='blogpostdetails__welcome'>
        <div className='blogpostdetails__welcome--header'>
          <h3 className='header__title'>{blogPostData.title}</h3>
          <p className='header__date'>{blogPostData.published_date}</p>
        </div>
        <p className='blogpostdetails__welcome--category'><label>{blogPostData.category}</label></p>
        <p className='blogpostdetails__welcome--main'>{blogPostData.main_paragraph}l</p>
      </div>
      <div className='blogpostdetails__image'>
        <img className='blogpostdetails__image--picture' src={blogPostData.cover} alt={`Imagen principal del blog post ${blogPostData.title}`} />
      </div>
      <div className='blogpostdetails__content'>
        <p className='blogpostdetails__content--text'>
          {blogPostData.content}
        </p>
      </div>
    </section>
  )
}

export default BlogPostDetails
