import React from 'react'
import logo from './imgs/logo.png'

const Header = () => {
  return (
    <div className='header'>
      <logo className='logo'>
        <img src={logo} alt='' srcset='' />
      </logo>
      <div className='nav'>
        <ul className='menu'>
          <li>Home</li>
          <li>Products</li>
          <li>Community</li>
          <li>Contact</li>
        </ul>
        <div className='upperbtn'>
          <button className='btn'>Login</button>
          <button className='btn'>SignUp</button>
        </div>
      </div>
    </div>
  )
}

export default Header
