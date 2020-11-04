/* eslint-disable no-undef */
/* eslint-disable camelcase */
import React, { useState } from 'react'
import '../assets/styles/components/CreateBlogPost.scss'
import '../assets/styles/components/Modal.scss'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Modal from 'react-modal'

const CreateBlogPost = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const { register, handleSubmit } = useForm()
  let content = ''

  const onSubmit = (data) => {
    const newData = { ...data, content }
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
          toggleModal()
        } else {
          console.error(`${err.name} : ${err.message}`)
        }
      })
  }
  return (
    <section className='createblogpost'>
      <section className='createblogpost__container'>
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel='Título ya reservado, por favor escoge uno nuevo'
          className='createblogpost__container--modal'
          overlayClassName='createblogpost__container--overlay'
        >
          <p>Título ya reservado, por favor escoge uno nuevo y modifica el campo contenido.</p>
          <button onClick={toggleModal}>Cerrar Ventana</button>
        </Modal>
        <form
          className='signup__container--form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className='blogpost__title'>Crear Blog Post</h3>
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
            ref={register}
          />
          <label className='blogpost__label' htmlFor='category'>
            Categoria
          </label>
          <select
            className='blogpost__select'
            name='category'
            id='category'
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
            ref={register}
          />
          <label className='blogpost__label' htmlFor='content'>
            Contenido
          </label>
          <div className='blogpost__ckeditor--container'>
            <CKEditor
              editor={ClassicEditor}
              data=''
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
              onChange={(event, editor) => {
                content = editor.getData()
              }}
              onBlur={(event, editor) => {
              }}
              onFocus={(event, editor) => {
              }}
            />
          </div>
          <button className='blogpost__button' type='submit'>
            Completar Creación
          </button>
        </form>
      </section>
    </section>
  )
}

export default CreateBlogPost
