import React from "react";
import { easeInOut, easeOut, motion } from "framer-motion";
import Button from "./Button";

function Home() {
  return (
    <div className=" w-full min-h-[100vh] py-3 relative">
      <div className="flex gap-1 items-center mt-10 sm:mt-6 text-[#63C796] justify-center">
        <img className="w-5" src="/public/images/brand-torchain.png" alt="" />
        <h3 className="text-[16px]">NO KYC</h3>
      </div>
      <div className="w-full text-center my-7 sm:my-10 text-[60px]  sm:text-[9rem] sm:leading-none font-[900] sm:font-[800]  leading-none tracking-tight font-[manrope]">
        {["BREAK THE","CHAIN"].map((item,index)=> <h2 key={index}>{item}</h2>)}
       
      </div>
      <p className="text-center  sm:text-xl sm:my-8">
        Non-Custodial, Decentralized & Anonymous. <br className="sm:hidden" />
        Freedom in every transaction
      </p>

    {/* animated button */}
    <div className="sm:w-64 w-full mx-auto">
    <Button data='SWAP NOW' />
    </div>
      {/* clock start */}
      <div className="w-full  flex justify-center z-10">
        <img className="w-[60rem] z-10" src="/public/images/SVGFile1.png" alt="" />
      </div>
      {/* clock end */}
      {/* coin start */}
      <div className=" absolute top-[18%] left-[-9%] sm:top-[3%]  sm:left-[7%] z-30 ">
        <img
          className="sm:w-24 w-16 coin-1 coin"
          src="/public/images/Decentraland.png"
          alt=""
        />
      </div>
      <div className=" absolute top-[22%] right-[-10%] sm:top-[13%] sm:right-[2%] z-30  ">
        <img
          className="sm:w-32 w-16 coin-2 coin"
          src="/public/images/Polkadot.png"
          alt=""
        />
      </div>
      <div className=" absolute top-[66%]  left-[-12%] sm:top-[40%] sm:left-[4%] ">
        <img
          className="sm:w-48 coin-3 w-20 coin "
          src="/public/images/ApeCoin.png"
          alt=""
        />
      </div>
      <div className=" absolute top-[76%]  right-[-1%] sm:top-[83%] sm:right-[12%] ">
        <img
          className="sm:w-20 coin-4 w-12 coin "
          src="/public/images/FTX.png"
          alt=""
        />
      </div>
      {/* coin end */}

      {/* animation hexagon code */}
      <svg
        className="fill-1 rotate-[190deg] sm:w-80 absolute top-[34%] left-[-5%] w-24 md:top-[4%]  md:left-[-10%] z-0"
        width=" 322"
        height=" 338"
        viewBox="0 0 322 508"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M401.44 492.331C421.766 490.891 439.779 478.705 448.693 460.362L544.264 263.713C553.178 245.371 551.64 223.66 540.228 206.758L417.882 25.5508C406.471 8.64857 386.919 -0.875876 366.593 0.564395L148.675 16.0061C128.349 17.4465 110.337 29.6327 101.422 47.9753L5.85048 244.624C-3.06354 262.967 -1.52511 284.677 9.88637 301.58L132.232 482.787C143.645 499.689 163.196 509.213 183.522 507.773L401.44 492.331Z"
          fill="white"
          fill-opacity="0.05"
        />
      </svg>

      <svg
        className=" fill-2 absolute w-36 sm:w-96 top-[30%] sm:top-[18%] sm:left-[6%]"
        width="369"
        height="337"
        viewBox="0 0 369 337"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M70.5804 308.559C76.7588 320.685 88.9586 328.583 102.584 329.277L248.666 336.722C262.292 337.417 275.273 330.802 282.721 319.371L362.562 196.812C370.01 185.381 370.791 170.868 364.613 158.743L298.372 28.7382C292.193 16.612 279.994 8.71446 266.368 8.01975L120.286 0.574755C106.66 -0.119413 93.679 6.49477 86.2316 17.9263L6.38992 140.485C-1.05724 151.917 -1.83872 166.429 4.3399 178.555L70.5804 308.559Z"
          fill="white"
          fill-opacity="0.05"
        />
      </svg>

      <svg
        className="fill-3 rotate-[190deg] sm:w-80 top-[50%] left-[18%] w-32 absolute sm:top-[34%]  sm:left-[-10%] z-5"
        width="322"
        height="338"
        viewBox="0 0 322 508"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M401.44 492.331C421.766 490.891 439.779 478.705 448.693 460.362L544.264 263.713C553.178 245.371 551.64 223.66 540.228 206.758L417.882 25.5508C406.471 8.64857 386.919 -0.875876 366.593 0.564395L148.675 16.0061C128.349 17.4465 110.337 29.6327 101.422 47.9753L5.85048 244.624C-3.06354 262.967 -1.52511 284.677 9.88637 301.58L132.232 482.787C143.645 499.689 163.196 509.213 183.522 507.773L401.44 492.331Z"
          fill="white"
          fill-opacity="0.05"
        />
      </svg>
      <svg
        className="fill-4 w-36 sm:w-80 absolute sm:top-[70%] z-[1] sm:right-[28%]"
        width="368"
        height="341"
        viewBox="0 0 368 341"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
       
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M268.634 330.066C282.208 329.104 294.238 320.949 300.19 308.672L363.999 177.053C369.951 164.776 368.921 150.243 361.298 138.928L279.566 17.622C271.942 6.30705 258.883 -0.0703069 245.308 0.891616L99.7657 11.2048C86.1902 12.1668 74.1613 20.3219 68.2091 32.5988L4.3994 164.218C-1.55219 176.495 -0.522413 191.028 7.10091 202.343L88.833 323.649C96.4569 334.964 109.516 341.341 123.091 340.379L268.634 330.066Z"
          fill="white"
          fill-opacity="0.05"
        />
      </svg>

      <svg
        className="fill-5 w-52 sm:w-[35rem] top-[50%] right-[-30%] absolute sm:top-[60%] z-[1] sm:right-[-15%]"
        width="499"
        height="407"
        viewBox="0 0 369 337"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M70.5804 308.559C76.7588 320.685 88.9586 328.583 102.584 329.277L248.666 336.722C262.292 337.417 275.273 330.802 282.721 319.371L362.562 196.812C370.01 185.381 370.791 170.868 364.613 158.743L298.372 28.7382C292.193 16.612 279.994 8.71446 266.368 8.01975L120.286 0.574755C106.66 -0.119413 93.679 6.49477 86.2316 17.9263L6.38992 140.485C-1.05724 151.917 -1.83872 166.429 4.3399 178.555L70.5804 308.559Z"
          fill="white"
          fill-opacity="0.05"
        />
      </svg>
      {/* animation heaxoagon code end */}
    

    {/* red color bg blur */}
    <div className=" hidden sm:block absolute w-[45rem] top-[35%] right-[-32%] ">
      <img className="w-full h-full object-cover" src="/public/images/BG.png" alt="" />
    </div>
    {/* red color bg end  */}

    </div>
  );
}

export default Home;
