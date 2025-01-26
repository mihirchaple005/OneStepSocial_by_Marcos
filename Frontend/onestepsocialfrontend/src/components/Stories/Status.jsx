/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState,useEffect } from 'react';
import ProgressBar from './ProgressBar';

const Status = ({ status, onNext}) => {
  useEffect(() => {
    setValue(0);
    const timer = setTimeout(() => {
      onNext();
    }, status.duration);
    return () => clearTimeout(timer);
  }, [status, onNext]);

  const [val, setValue]= useState(0);
  // eslint-disable-next-line no-undef
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((val) => val + 1);
    }, status.duration/100);
    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-[90vw] md:w-[40vw] h-[120vh] mt-[3%] ml-[5%] mb-[3%] flex flex-col items-center justify-center bg-black rounded-[25px]">
      <div className='text-black bg-[#b7b7f1] mb-[30%] rounded-[3px] mt-[-20%] p-[1%] border-[2px] border-[#030327]'>Title: {status.title}</div>
      <ProgressBar value={val}></ProgressBar>
      <div className='w-[90vw] md:w-[40vw] h-[70vh] mt-[3%] flex flex-col items-end justify-center bg-black'>
      <div className='flex mb-[2%] mr-[5%] gap-[5%]'>
      <div className='text-[#f0ffff]'>{status.user}</div>
      <div><img className="h-[8vh] w-[4vw] rounded-full" src={status.profile} alt="" /></div>
      </div>
      {status.type === 'image' ? (
        <img className="max-w-[100%] max-h-[90%]" src={status.url} alt="status" />
      ) : (
        <video className='max-w-full max-h-[90%]' src={status.url} autoPlay muted />
      )}
      </div>
    </div>
  );
};

export default Status;
