import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes/App'
import axios from 'axios'
import Modal from 'react-modal'

ReactDOM.render(<App />, document.getElementById('app'))
axios.defaults.baseURL = 'https://backend-blog-ulzahk.vercel.app/'
Modal.setAppElement(document.getElementById('app'))
