import React from 'react'
import Button from './Button'


function Eco() {
  const cards = [{

  }]
  return (
    <div className='w-full min-h-[45vh] sm:py-5 py-10 relative'>
        <div className='w-full text-center flex items-center sm:justify-center  justify-start sm:gap-2 gap-1'> 
            <img className='w-5' src="/public/images/affiliate.png" alt="" />
            <h3 className='text-white sm:text-xl text-sm font-semibold'>OUR ECOYSYSTEM</h3>
        </div>
        <div className='w-full sm:text-center  text-left my-2 sm:text-7xl font-bold'>

            {["DECENTRAILZED","NETWORK DIVERSITY"].map((item,index)=>  <h2 className='text-4xl sm:text-7xl  leading-none' key={index}>{item}</h2>)}  
            
        </div>
        <div className='my-10 sm:w-[25%] w-[100%]  sm:text-[1.1rem] text-[1rem] sm:mx-auto'>
        <Button data={'LEARN MORE ABOUT SERVICES'}/>
        </div>
        <div className='absolute w-[50%]  h-full sm:top-[-60%] sm:right-[-10%]'>
            <img className='w-[89%] h-[120vh] object-cover ' src="/public/images/2.png" alt="" />
        </div>

      
     
       
        {/* <div className="card basis-[95%] sm:basis-[41.5%] h-[60vh] rounded-3xl sm:rounded-3xl bg-green-500"></div>
        <div className="card  basis-[95%] sm:basis-[41.5%] h-[60vh] rounded-3xl sm:rounded-3xl bg-blue-500"></div> */}
      </div>
  
  )
}

export default Eco