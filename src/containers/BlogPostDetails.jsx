import React from 'react'
import '../assets/styles/components/BlopPostDetails.scss'
import image from '../assets/static/image-posts.png'
import user from '../assets/static/user.png'
import twitter from '../assets/static/twitter.png'
import email from '../assets/static/email.png'

const BlogPostDetails = () => {
  return (
    <section className='blogpostdetails'>
      <div className='blogpostdetails__welcome'>
        <div className='blogpostdetails__welcome--header'>
          <h3 className='header__title'>Title</h3>
          <p className='header__date'>29/10/2020</p>
        </div>
        <p className='blogpostdetails__welcome--category'><label>Categoría</label></p>
        <p className='blogpostdetails__welcome--main'>Párrafo principal</p>
      </div>
      <div className='blogpostdetails__image'>
        <img className='blogpostdetails__image--picture' src={image} alt='Imagen del Blogpost' />
      </div>
      <div className='blogpostdetails__content'>
        <p className='blogpostdetails__content--text'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni vitae doloribus dolorum, maxime ullam distinctio! Sequi autem cumque corporis illum eum perferendis aliquid fugiat sunt aspernatur, voluptate, neque recusandae deserunt.
        </p>
      </div>
      <div className='blogpostdetails__author'>
        <img className='blogpostdetails__author--picture' src={user} alt='Perfil del Autor' />
        <p className='blogpostdetails__author--name'>Nombre de Autor</p>
        <a href='/' target='_blank'>
          <img className='blogpostdetails__author--twitter' src={twitter} alt='Twitter del Autor' />
        </a>
        <a href='/' target='_blank'>
          <img className='blogpostdetails__author--email' src={email} alt='Email del Autor' />
        </a>
        <p className='blogpostdetails__author--description'>Descripción del autor</p>
      </div>
    </section>
  )
}

export default BlogPostDetails
