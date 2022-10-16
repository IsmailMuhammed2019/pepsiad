import React from 'react'
import logo from ''

const Header = () => {
  return (
    <div className='header'>
      <logo className='logo'>
        <img src={logo} alt='' srcset='' />
      </logo>
      <div className='nav'>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Community</li>
          <li>Contact</li>
        </ul>
      </div>
      <div></div>
    </div>
  )
}

export default Header
