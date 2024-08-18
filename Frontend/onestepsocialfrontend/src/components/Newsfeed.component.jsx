import React, { useState } from 'react';
function Newsfeed(props) {
  const [likes, setLikes] = useState(0);

  return (
    <div >
      <div>
      <h1>NewsFeed</h1>
      <img src={props.image} alt="Image" className="rounded-lg absolute w-[12rem] h-[16rem] sm:w-[17rem] lg:w-96   " />
      </div>
      <div className="bg-sky-200 block items-center relative left-[12rem] w-[1.7rem] h-45 sm:left-[16.5rem] sm:w-[2rem] lg:left-[22.5rem]  lg:w-[3.2rem] lg:h-45  md:w-[3.2rem] top-[2rem] gap-x-0.5 rounded-md hover:bg-sky-700">
        <button><i className="far fa-handshake " style={{ fontSize: '13px', color: 'black' }}></i></button>
        <p className="text-xs">123</p>
        <button><i className="fas fa-thumbs-up" style={{ fontSize: '14px', color:"black" }}></i></button>
        <p className="text-xs">123</p>
        <button><i className="fas fa-comment-alt" style={{ fontSize: '11px' ,color:"black"}}></i></button>
        <p className="text-xs">123</p>
        <button><i className="far fa-eye" style={{ fontSize: '12px',color:"black" }}></i></button>
        <p className="text-xs">123</p>
        <button><i className="fas fa-share-alt" style={{ fontSize: '12px',color:"black"}}></i></button>
        <p className="text-xs">123</p>
      </div>
      <div className='mt-12'>
        <p className="bg-slate-200 text-cyan-950 font-indie rounded-md  overflow-clip hover:overflow-y-scroll text-[10px] w-[15rem] h-20 relative sm:right-[0.9rem] right-[1.3rem] sm:w-[19rem] lg:w-[27rem] md:w-[20.5rem] md:right-[1.2rem] lg:right-[1.3rem] md:text-[15px] lg:h-16 lg:text-[15px] md:h-16 text-lg">
        {props.description}
        </p>
      </div>
      
    </div>
  );
}

export default Newsfeed;
