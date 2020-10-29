import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo.png'

const Header = () => {
  return (
    <header className='header'>
      <Link className='header__link' to='/'>
        <div className='header__logo'>
          <p className='header__logo--title'>Blog</p>
          <img className='header__logo--icon' src={logo} />
        </div>
      </Link>
      <nav className='header__nav'>
        <ul className='header__nav--list'>
          <Link to='/log-in'><li>Iniciar Sesión</li></Link>
          <Link to='/sign-up'><li>Crear Cuenta</li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
