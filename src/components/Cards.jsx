import React from 'react'
import Card from './Card'

function Cards() {
    var carddata= [{btn:"Trade without limits",img:"/public/images/100.png", h2:"ANONYMOUS",h3:"CROSS-CHAIN SWAP",span:"Trade without limits or custody. ",para:"Our platform offers unmatched rates and fast swaps across an expansive network of blockchains and tokens", width:"100"},
    
    {btn:"ERC-4337", img:"/public/images/13ring.png",h2:"ERC-4337",h3:"COMPLIANT WALLET", span:"Experience freedom with our seedless, gasless web3 wallet. Store, buy, exchange,",para:" and stake crypto on mobile and desktop platforms",width:"basis-[42%]",widsm:"basis-[70vw]" ,imgwidth:"basis-[45%]", h:"h-[50%]"},

    {
        btn:"Fast swapping process",img:"/public/images/33ring.png",h2:"TELEGRAM BOT",span:"Integrate your swapping process with Telegram",
        para:"to make your trades even faster and more convenient",width:"basis-[42%]", widsm:"basis-[70vw]",imgwidth:"basis-[25%]",h:"h-[65%]"
    }]
  return (
    <div className='cards  w-full min-h-[100vh] mx-auto items-center justify-center sm:py-10  gap-5 md:gap-5 flex flex-wrap '>
        {carddata.map((item,index)=> <Card key={index} ind={index} data={item} />)}
        
       
        </div>
  )
}

export default Cards