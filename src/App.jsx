import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Eco from './components/Eco'
import Cards from './components/Cards'
import Crypto from './components/Crypto'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='max-w-screen-2xl mx-auto min-h-[100vh] px-3 sm:px-16 text-white bg-[#03031b] overflow-hidden '>
      <Navbar/>
      <Home/>
      <Aboutus/>
      <Eco/>
      <Cards/>
      <Crypto/>
      

    </div>
  )
}

export default App