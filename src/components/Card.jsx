import React from "react";

function Card({data,ind}) {
    const {h2,h3,span,img,btn,para,width,imgwidth,h ,widsm}=data;
    

  return (
    <>
    <div className={`sm:${ind === 0 ? "w-[85vw] ": width} ${ind=== 0? " w-[70vw] ":widsm} px-4 sm:px-10 py-5 sm:py-12  relative h-[75vh]  sm:h-[65vh] bg-[#0B1426] rounded-3xl sm:rounded-3xl shrink-0`}>
      <h2 className="sm:px-8 px-4 sm:text-sm text-[12px] bg-gradient-to-r from-[#1b1d3c] to-[#0b0d30] py-2  z-10 border-[1px] border-white w-fit rounded-full">{btn}</h2>
      <div className="w-full sm:mt-[-15px]  sm:h-72 h-fit flex sm:justify-end justify-center">
        <img className={`ringimg object-cover ${ind===0?"sm:w-[380px] w-[200px]": "w-[350px] h-fit" } ${ind===1 && "w-[300px] h-fit"} w-[380px] rotate-45  h-full`} src={img} alt="" />

      </div>
      <div className={` sm:mt-[-8%] mt-[7%] ${ind===2 &&"mt-[-7px]"}`}>
      <h2 className={`${ind===0?"sm:text-[3.5vw] text-[3.5vw] leading-none font-bold tracking-tight":"text-[2rem]"} `}>{h2}</h2>
      <h3 className={` ${ind===0?"sm:text-[3.5vw] text-[3.5vw]":"text-[4vw]"} text-[3.5vw] leading-none font-bold tracking-tight`}>{h3}</h3>
      <p className={`${ind===0?"sm:w-1/2 w-full":"w-full"} sm:w-2/3 mt-4 text-semibold sm:text-[1.2vw] text-md text-gray-500  leading-none tracking-tight sm:tracking-tight`}> <span className="text-white">
{span}</span> {para}</p>

</div>
    </div>
    
    </>
    
  );
}

export default Card;
