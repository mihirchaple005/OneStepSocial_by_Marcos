import React, { useState } from 'react';
import { FaMessage } from "react-icons/fa6";
function Newsfeed(props) {
  const [likes, setLikes] = useState(0);

  return (
    <div className=''>
      <img src={props.image} alt="Image" className="rounded-lg relative left-1 sm:left-2 md:absolute lg:absolute lg:mt-1 mt-[3rem]  w-[12rem] h-[15rem] lg:h-[17rem] lg:ml-4 sm:w-[17rem] lg:w-[28rem] md:w-96  " />
      <div className="flex left-[-1rem] relative z-30  mt-[-3rem] md:mt-[3rem] mb-0 bg-sky-200 md:block md:h-[13rem]  items-center gap-4  w-[15rem]
       h-[2rem] h-45 sm:left-[16.5rem] sm:w-[2rem] lg:left-[26rem] md:left-[22.4rem]  md:w-[3.2rem] md:h-45 top-[2rem] gap-x-0.5 rounded-md hover:bg-sky-700">
        <button><i className="far fa-handshake " style={{ fontSize: '13px', color: 'black' }}></i></button>
        <p className="text-xs mr-2 ml-1">123</p>
        <button><i className="fas fa-thumbs-up" style={{ fontSize: '14px', color:"black" }}></i></button>
        <p className="text-xs mr-2 ml-1">123</p>
        <button><i className="fas fa-comment-alt" style={{ fontSize: '11px' ,color:"black"}}></i></button>
        <p className="text-xs mr-2 ml-1">123</p>
        <button><i className="far fa-eye" style={{ fontSize: '12px',color:"black" }}></i></button>
        <p className="text-xs mr-2 ml-1">123</p>
        <button><i className="fas fa-share-alt" style={{ fontSize: '12px',color:"black"}}></i></button>
        <p className="text-xs mr-2 ml-1">123</p>
      </div>
      <div className='mt-12'><p className="bg-slate-200 z-0  text-cyan-950 font-indie mt-[-1rem] md:mt-[3rem] rounded-md  
      overflow-y-scroll no-scrollbar text-[10px] w-[15rem] h-16 relative right-[1.3rem] lg:w-[30rem] 
      md:w-[27rem] lg:ml-0 md:text-[15px] lg:h-16 lg:text-[15px] md:h-16 ">
        {props.description}
      </p></div>
      
      
      
    </div>
  );
}

export default Newsfeed;

