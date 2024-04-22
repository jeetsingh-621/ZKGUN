import React from 'react'
import Button from './Button'
import Cryptocards from './Cryptocards'


function Crypto() {
  return (
    <div className='w-full min-h-[45vh] sm:py-5 py-10 sm:mt-20 relative'>
    <div className='w-full text-center flex items-center sm:justify-center  justify-start sm:gap-2 gap-1'> 
        <img className='w-5' src="/public/images/CRYPTO.png" alt="" />
        <h3 className='text-white sm:text-xl text-sm font-semibold'>CORE VALUES</h3>
    </div>
    <div className='w-full sm:text-center  text-left my-2 sm:text-7xl font-bold'>

        {["OUR CRYPTO CREED"].map((item,index)=>  <h2 className='text-4xl sm:text-7xl leading-none' key={index}>{item}</h2>)}  
        
    </div>
    <div className='my-10 sm:w-[16%] w-[100%]  sm:text-[1.1rem] text-[1rem] sm:mx-auto'>
    <Button data={'LEARN ABOUT US'}/>
    </div>

    <Cryptocards/>
</div>
  )
}

export default Crypto