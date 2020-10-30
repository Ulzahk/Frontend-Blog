/* eslint-disable no-undef */
/* eslint-disable camelcase */
import React from 'react'
import '../assets/styles/components/CreateBlogPost.scss'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const CreateBlogPost = (props) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    const newData = { ...data }
    axios({
      url: '/blogposts',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: newData
    })
      .then((response) => {
        props.history.push('/')
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`)
        if (err.message === 'Request failed with status code 400') {
          alert(
            'Título ya reservado, por favor escoge uno nuevo'
          )
        } else {
          console.error(`${err.name} : ${err.message}`)
        }
      })
  }
  return (
    <section className='createblogpost'>
      <section className='createblogpost__container'>
        <form className='signup__container--form' onSubmit={handleSubmit(onSubmit)}>
          <h3 className='blogpost__title'>Crear Blog Post</h3>
          <label className='blogpost__label' htmlFor='title'>Título</label>
          <input
            id='title'
            name='title'
            className='blogpost__input'
            type='text'
            placeholder='5 Cosas que Debes Saber de los Gorillas'
            autoComplete='off'
            required
            ref={register}
          />
          <label className='blogpost__label' htmlFor='category'>Categoria</label>
          <select
            className='blogpost__select'
            name='category'
            id='category'
            ref={register({ required: true })}
          >
            <option defaultValue='selected' className='blogpost__select--option' value='Tecnología'>Tecnología</option>
            <option className='blogpost__select--option' value='Ciencia'>Ciencia</option>
            <option className='blogpost__select--option' value='Crecimiento Personal'>Crecimiento Personal</option>
          </select>
          <label className='blogpost__label' htmlFor='cover'>Imágen Principal</label>
          <input
            id='cover'
            name='cover'
            className='blogpost__input'
            type='text'
            placeholder='https://www.gorilaswiki.com/Imagenes/gorila-hd.jpg'
            autoComplete='off'
            required
            ref={register}
          />
          <label className='blogpost__label' htmlFor='main_paragraph'>Párrafo Principal</label>
          <textarea
            id='main_paragraph'
            name='main_paragraph'
            className='blogpost__textarea'
            placeholder='Párrafo principal'
            autoComplete='off'
            required
            ref={register}
          />
          <label className='blogpost__label' htmlFor='content'>Contenido</label>
          <textarea
            id='content'
            name='content'
            className='blogpost__textarea'
            placeholder='Contenido del Blog Post'
            autoComplete='off'
            required
            ref={register}
          />
          <button className='blogpost__button' type='submit'>Completar Creación</button>
        </form>
      </section>
    </section>
  )
}

export default CreateBlogPost
