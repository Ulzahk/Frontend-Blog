/* eslint-disable no-undef */
/* eslint-disable camelcase */
import React from 'react'
import '../assets/styles/components/CreateBlogPost.scss'
import { useFetchBlogPostDetails } from '../hooks/useFetchBlogPostDetails'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const ModifyBlogPost = (props) => {
  const data = useFetchBlogPostDetails()
  const blogPostData = data[0]
  const isLoading = data[1]

  const { register, handleSubmit } = useForm()
  let content = blogPostData.content
  const onSubmit = (data) => {
    const newData = { ...data, content }
    axios({
      url: `/blogposts/${blogPostData._id}`,
      method: 'PATCH',
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
          alert('Título ya reservado, por favor escoge uno nuevo')
        } else {
          console.error(`${err.name} : ${err.message}`)
        }
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
    <section className='createblogpost'>
      <section className='createblogpost__container'>
        <form
          className='signup__container--form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className='blogpost__title'>Modificar Blog Post</h3>
          <label className='blogpost__label' htmlFor='title'>
            Título
          </label>
          <input
            id='title'
            name='title'
            className='blogpost__input'
            type='text'
            placeholder='Ejemplo: 5 Cosas que Debes Saber de los Gatos'
            autoComplete='off'
            required
            defaultValue={blogPostData.title}
            ref={register}
          />
          <label className='blogpost__label' htmlFor='category'>
            Categoria
          </label>
          <select
            className='blogpost__select'
            name='category'
            id='category'
            defaultValue={blogPostData.category}
            ref={register({ required: true })}
          >
            <option
              defaultValue='selected'
              className='blogpost__select--option'
              value='Tecnología'
            >
              Tecnología
            </option>
            <option className='blogpost__select--option' value='Ciencia'>
              Ciencia
            </option>
            <option
              className='blogpost__select--option'
              value='Crecimiento Personal'
            >
              Crecimiento Personal
            </option>
          </select>
          <label className='blogpost__label' htmlFor='cover'>
            Imágen Principal
          </label>
          <input
            id='cover'
            name='cover'
            className='blogpost__input'
            type='text'
            placeholder='Ejemplo: https://upload.wikimedia.org/wikipedia/commons/7/7f/Nagec_cat.jpg'
            autoComplete='off'
            required
            defaultValue={blogPostData.cover}
            ref={register}
          />
          <label className='blogpost__label' htmlFor='main_paragraph'>
            Párrafo Principal
          </label>
          <textarea
            id='main_paragraph'
            name='main_paragraph'
            className='blogpost__textarea'
            placeholder='Párrafo principal'
            autoComplete='off'
            required
            defaultValue={blogPostData.main_paragraph}
            ref={register}
          />
          <label className='blogpost__label' htmlFor='content'>
            Contenido
          </label>
          <div className='blogpost__ckeditor--container'>
            <CKEditor
              editor={ClassicEditor}
              data={blogPostData.content}
              config={{
                removePlugins: ['MediaEmbed', 'ImageUpload'],
                toolbar: [
                  'heading',
                  '|',
                  'bold',
                  'italic',
                  '|',
                  'numberedList',
                  'bulletedList',
                  'indent',
                  'outdent',
                  'link',
                  '|',
                  'insertTable',
                  '|',
                  'undo',
                  'redo'
                ]
              }}
              onReady={(editor) => {
              }}
              onChange={(event, editor, data) => {
                data = blogPostData.content
                content = editor.getData()
              }}
              onBlur={(event, editor) => {
              }}
              onFocus={(event, editor) => {
              }}
            />
          </div>
          <button className='blogpost__button' type='submit'>
            Completar Modificación
          </button>
        </form>
      </section>
    </section>
  )
}

export default ModifyBlogPost
