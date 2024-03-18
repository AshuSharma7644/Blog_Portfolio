import React from 'react'
import logo from './images/main-image.jpg'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div className='main-home-page'>
        <div className='inner-home inner-col'>
          <div className='content-home inner-content'>
            <h1>Hello, Welcome</h1>
            <p>I'm Arvind Sharma, I'm a Frontend Developer. My goal is to write clean and deliver awesome final product. I am very persistent and detiled oriented. My skill include Web design , Wordpress , Html, Css ,etc.</p>
            <button className='btn'> <NavLink to="/about">Read More</NavLink></button>
          </div>
          <div className='image-home'>
          <img src={logo} alt="React Image" />
          </div>
        </div>
      </div>
    </>
  )
}





export default Home