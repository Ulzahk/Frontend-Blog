import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer__list'>
        <Link to='/'><li>Blog 2020</li></Link>
      </ul>
    </footer>
  )
}

export default Footer
