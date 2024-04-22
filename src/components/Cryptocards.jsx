import React from 'react'
import Cryptocard from './Cryptocard'

function Cryptocards() {
    const carddata = [{h2:"PRIVACY",img:"/public/images/shield.png",span:"Our Zero-Knowledge Privacy integrations provide untraceable transactions,", p:" so your swaps are yours alone to know."},
    {
        h2:"EFFICIENCY",img:"/public/images/decentralize.png",span:"We offer limitless swapping with minimal fees and rapid processing,", p:"so your trades are as seamless as they are efficient."
    },
    {
        h2:"CONFIDENTIALITY",img:"/public/images/chart.png", span:"Discretion is a non-negotiable. We promise no KYC, absolute control of your funds, ",para:"and ironclad encryption for every transaction you make."
    }]
  return (
    <div className='w-full p-4 min-h-[60vh] flex gap-4 items-center justify-center shrink-0 flex-wrap'>
        {carddata.map((item,index)=><Cryptocard key={index} data={item} />
)}
      

    </div>
  )
}

export default Cryptocards