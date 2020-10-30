import React from 'react'
import '../assets/styles/components/CreateBlogPost.scss'

const CreateBlogPost = () => {
  return (
    <section className='createblogpost'>
      <section className='createblogpost__container'>
        <form className='signup__container--form' action='/'>
          <h3 className='blogpost__title'>Crear Blog Post</h3>
          <label className='blogpost__label' htmlFor='title'>Título</label>
          <input
            id='title'
            name='title'
            className='blogpost__input'
            type='text'
            placeholder='Título'
            required
          />
          <label className='blogpost__label' htmlFor='category'>Categoria</label>
          <select className='blogpost__select' name='category' id='category'>
            <option className='blogpost__select--option' value='Tecnología'>Tecnología</option>
            <option className='blogpost__select--option' value='Ciencia'>Ciencia</option>
            <option className='blogpost__select--option' value='Crecimiento Personal'>Crecimiento Personal</option>
          </select>
          <label className='blogpost__label' htmlFor='cover'>Imágen Principal</label>
          <input
            id='cover'
            name='cover'
            className='blogpost__input'
            type='text'
            placeholder='Imagen principal'
            required
          />
          <label className='blogpost__label' htmlFor='main_paragraph'>Párrafo Principal</label>
          <textarea
            id='main_paragraph'
            name='main_paragraph'
            className='blogpost__textarea'
            placeholder='Párrafo principal'
            required
          />
          <label className='blogpost__label' htmlFor='content'>Contenido</label>
          <textarea
            id='content'
            name='content'
            className='blogpost__textarea'
            placeholder='Contenido del Blog Post'
            required
          />
          <button className='blogpost__button' type='submit'>Completar Creación</button>
        </form>
      </section>
    </section>
  )
}

export default CreateBlogPost
