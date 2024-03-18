import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
    
    <div className='main'>
      <div className='inner-main'>
      <div className='logo'><h2><span className='logo-first'>Arvind</span> Sharma</h2></div>
      <div className='menus'>
      <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About Us</NavLink></li>
          <li className="end-contact"><NavLink to='/contact' >Contact us</NavLink></li>
        </ul>
      </div>
        
      </div>
    </div>





    {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <NavLink class="navbar-brand" to="/">Navbar</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/about">About Us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/contact">Contact Us</NavLink>
        </li>
       
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
    
  </>
  )
}
export default Header