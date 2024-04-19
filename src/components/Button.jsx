import React from 'react'

function Button({data,width,smw}) {
  return (
    <div>
         <div className={` sm:${width} w-full  mx-auto sm:mx-0 sm:text-center my-8 sm:my-0`}>
        <a
          href="#_"
          class={`relative inline-flex items-center justify-center px-10 py-4 overflow-hidden  font-medium tracking-tighter hover:text-[#63C796] bg-[#63C796] rounded-full group w-full   border border-[#63C796]`}
        >
          <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-[#03031b] rounded-full group-hover:w-full group-hover:h-56 "></span>
          <span class="absolute inset-0 w-full h-full mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700 hover:text-[#63C796]"></span>
          <span class={`relative    text-black font-semibold group-hover:text-[#63C796]`}>
            {data}
          </span>
        </a>
      </div>
    </div>
  )
}

export default Button