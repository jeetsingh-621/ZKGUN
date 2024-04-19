import React, { useEffect, useState } from 'react'
import Button from './Button'
import { navgaition } from './Icons';
import { Link } from 'react-router-dom';
// import logo from '../../public/images/logo.png'


function Navbar() {
  const [showNavBar, setShowNavBar] = useState(false);
    const toggleNavBar = () => {
        setShowNavBar(prevState => !prevState);
    };
    useEffect(() => {
        if (showNavBar) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [showNavBar]);
  return (
    <div className='w-full  py-6 sm:py-6 flex items-center justify-between  font-[manrope]'>
     <img  className='w-36 sm:w-32 inline-block  sm:mx-0 ' src='/public/images/logo.png' alt="" />
     <ul  className='navul sm:flex lg:gap-10 md:gap-4 text-xl sm:text-sm hidden sm:font-semibold'>
        {["Home","Services","Community","Contact"].map((item,index)=> (<li className='relative hover:text-green-yellow before:absolute before:w-0 before:h-[2px] before:bg-green before:bottom-0 hover:before:w-full before:duration-300' key={index}>{item}</li>))}
    
     </ul>

        <div className='hidden sm:block button'>
       <Button data='SWAP NOW'/>
          </div>

      
        <div onClick={toggleNavBar} className="sm:hidden z-[2000]">
                         <div className={`flex  flex-col w-full cursor-pointer z-[300] ${showNavBar ? "gap-0 justify-between h-6 w-6 ms-1" : "gap-[5px]  h-full"}`}>
                            <span className={`bg-white ms-auto h-[3px] rounded-xl duration-500 ${showNavBar ? "w-6 rotate-45 translate-y-[11px]" : "w-5"}`}></span>
                            <span className={`bg-white h-[3px] rounded-xl duration-500 ${showNavBar ? "w-0" : "w-7"}`}></span>
                            <span className={`bg-white ms-auto h-[3px] rounded-xl duration-500 ${showNavBar ? "w-6 -rotate-45 -translate-y-[10px]" : "w-5"}`}></span>
                        </div>
        </div>

        <div className={`flex flex-col min-h-[100vh] bg-[#03031b] items-center justify-center gap-4 sm:gap-6 font-semibold  sm:hidden fixed transition-all duration-300 bg-ebony ${showNavBar ? "top-0 right-0 w-full h-full z-[100] fixed" : "-right-full top-0 w-full h-full"}`}>

        <ul  className='navul px-8 w-full sm:flex flex flex-col gap-8 items-center justify-center font-semibold text-3xl lg:gap-10 md:gap-4  sm:text-sm  sm:font-semibold'>
        {["Home","Services","Community","Contact"].map((item,index)=> (<li className='relative ' key={index}>{item}</li>))}

        <div className='text-xl  w-full button'>
       <Button data='SWAP NOW'/>
          </div>
    
     </ul>
          </div>

    </div>
  )
}

export default Navbar