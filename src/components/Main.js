import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import  About  from './About';
import Contact from './Contact';

const Main = () => {
  return (
    <>
        <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/about' element={<About/>}  />
          <Route path='/contact' element={<Contact/>}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Main