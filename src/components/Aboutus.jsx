import React from "react";
import Button from "./Button";

function Aboutus() {
  return (
    <div className="sm:py-10 my-10  w-full h-[90vh] ">
      <div className="flex items-center justify-center gap-2 sm:mt-20 sm:my-5">
        <img className="w-4 sm:w-6 " src="/public/images/clipboard-data.png" alt="" />
        <h3 className="uppercase leading-1 text-sm font-bold">
          Fast and secure decentralized finance
        </h3>
      </div>
      <div className="sm:w-64  w-full text-center mx-auto  sm:my-12  rounded-full">
        <Button data='LEARN MORE ABOUT US ' />

      </div>

      <p className="para w-full text-left sm:text-center text-gray-400 text-[1.6rem] sm:text-[2.6rem] uppercase sm:leading-tight font-semibold leading-none sm:font-bold" > <span className="text-white">
      Swap crypto across chains without a hitch, leveraging our deep liquidity pools from over 20+ sources for instant, vast transactions.</span> Our ERC-4337 wallet is your ticket to a seamless, gas- free crypto experience, integrated with RAILGUN for enhanced privacy when performing transcanctions.</p>
    </div>
  );
}

export default Aboutus;
