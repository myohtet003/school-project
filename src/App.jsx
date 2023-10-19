// eslint-disable-next-line no-unused-vars
import React from 'react'
import './index.css'
import { Routes,Route } from 'react-router-dom'
import 'animate.css';
import Home from './Pages/Home';
import About_Us from './Pages/About_Us';
import Classes from './Pages/Classes';
import Teachers from './Pages/Teachers';
import Events from './Pages/Events';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';


import Navbar from './Components/Navbar'

function App() {
  return (
    <>
<div className=' container mx-auto h-[100vh] min-h-screen relative bg-white'>
    
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About_Us/>}/>
        <Route path="/teachers" element={<Teachers/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/classes" element={<Classes/>}/> 
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App