import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
    
    <div className='main'>
      <div className='inner-main'>
      <div className='logo'><h2>Arvind Sharma</h2></div>
      <div className='menus'>
      <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About Us</NavLink></li>
          <li><NavLink to='/contact'>Contact us</NavLink></li>
        </ul>
      </div>
        
      </div>
    </div>
    
  </>
  )
}
export default Header