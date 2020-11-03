
import React from 'react'
import { Link } from 'react-router-dom'
import { useFetchBlogPostDetails } from '../hooks/useFetchBlogPostDetails'
import axios from 'axios'
import DOMPurify from 'dompurify'
import '../assets/styles/Media.scss'
import '../assets/styles/components/BlopPostDetails.scss'

const sanitazer = DOMPurify.sanitize
const BlogPostDetails = (props) => {
  const data = useFetchBlogPostDetails()
  const blogPostData = data[0]
  const isLoading = data[1]
  const handleDelete = (blogpostId) => {
    axios({
      url: `https://backend-blog-ulzahk.vercel.app/blogposts/${blogpostId}`,
      method: 'DELETE'
    })
      .then((response) => {
        props.history.push('/')
      })
      .catch((err) => {
        console.error(`${err.name} : ${err.message}`)
      })
  }

  if (isLoading) {
    return (
      <div className='app'>
        <p className='app__loader' />
      </div>
    )
  }
  return (
    <section className='blogpostdetails'>
      <div className='blogpostdetails__welcome'>
        <Link to={`/modificar-blogpost/${blogPostData.meta_title}`}>
          <button className='blogpostdetails__welcome--button'>Modificar Post</button>
        </Link>
        <button className='blogpostdetails__welcome--button' onClick={async () => await handleDelete(blogPostData._id)}>Borrar Post</button>
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
        <div className='blogpostdetails__content--text' dangerouslySetInnerHTML={{ __html: sanitazer(blogPostData.content) }} />
      </div>
    </section>
  )
}

export default BlogPostDetails
