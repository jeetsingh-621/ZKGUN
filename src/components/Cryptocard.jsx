import React from 'react'


function Cryptocard({data}) {
    const {h2,p,span,img}=data;
  return (
    <div className='w-[27.6rem] shrink-0 flex-wrap h-[25rem] bg-[#0B1426] rounded-3xl flex items-center justify-between flex-col sm:py-6 sm:px-7' >
        <h1 className='text-4xl font-bold'>{h2}</h1>
        
        <img className='w-1/3 h-fit' src={img} alt="" />
        
        <p className='text-center text-lg leading-none'>
            <span>{span}</span>{p}</p>

    </div>
  )
}

export default Cryptocard