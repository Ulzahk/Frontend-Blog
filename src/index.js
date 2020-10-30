import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes/App'
import axios from 'axios'

axios.defaults.baseURL = 'https://backend-blog-ulzahk.vercel.app/'

ReactDOM.render(<App />, document.getElementById('app'))
