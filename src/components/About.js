import React from 'react'
// import { NavLink } from 'react-router-dom'
import logo from '../components/images/person.jpg'

const About = () => {
  return (
    <>
      <div className='main-about'>
      <div className='inner-about inner-col'>
      <div className='image-about'>
          <img src={logo} alt="React Image" />
          </div>
      <div className='content-about inner-content'>
            <h1>About Me</h1>
            <p>I'm Arvind Sharma, I'm a Frontend Developer with 4 years of experience in designing, developing and maintaining front-end web applications. Achieved measurable success in increasing page load speeds by 20% which lead to an increase in website conversion rates. Led the implementation of new front-end development system which resulted in a 15% reduction in development time and a 20% increase in website performance. Adept in collaborating with cross-functional teams and delivering projects on-time and on-budget. </p>
            {/* <button className='btn'> <NavLink to="/about">Read More</NavLink></button> */}
          </div>
          
      </div>

      </div>
    </>
  )
}

export default About