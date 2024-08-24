/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState,useEffect } from 'react';
import Status from './Status';

const StatusViewer = ({ statuses }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < statuses.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  return (
    <div className="relative flex">
      <Status status={statuses[currentIndex]} onNext={handleNext}/>
      <div className='md:h-[50vh] w-[15vw] bg-gray-300 mt-[20%] rounded-[10px] -ml-[1%] flex flex-col'>
      <div className='ml-[20%] mt-[8%] h-[75%] w-[60%]'>
      <img className='rounded-[40px]' src="https://media.istockphoto.com/id/1408881782/vector/customer-care-and-support-concept-editable-stroke-outline-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=B3uVn6yEbaa23M6xKbb6m7nfF45le9zueWrlRIM3QfY=" alt="" /></div>

      <div className='ml-[20%] mt-[8%] h-[75%] w-[60%]'><img className='rounded-[40px]' src="https://static.vecteezy.com/system/resources/thumbnails/000/423/558/small/Multimedia__287_29.jpg" alt="" /></div>

      <div className='ml-[20%] mt-[8%] h-[75%] w-[60%]'><img className='rounded-[40px]'src="https://static.vecteezy.com/system/resources/thumbnails/000/422/741/small_2x/Web__2812_29.jpg" alt="" /></div>

      <div className='ml-[20%] mt-[8%] h-[75%] w-[60%]'><img className='rounded-[40px]' src="https://static.vecteezy.com/system/resources/thumbnails/000/437/767/small/Basic_Ui__28109_29.jpg" alt="" /></div>

      <div className='ml-[20%] mt-[8%] h-[75%] w-[60%]'><img className='rounded-[40px]' src="https://png.pngtree.com/png-vector/20190214/ourlarge/pngtree-share-icon-graphic-design-template-vector-png-image_456743.jpg" alt="" /></div>
      </div>
      
      <div>
      <div className='max-h-full flex-col hidden md:flex'>

      <p className='ml-[12%] mb-[-11%] mt-5 bg-[#cef0f8] w-[31vw] border-2 border-black rounded-[5px] pl-1 flex flex-wrap'>Description</p>

      <div className='bg-[#cef0f8] text-sm ml-[8%] mr-[4%] mt-[10%] p-[3%] rounded-[10px] h-[40vh] border-2 border-black'>{statuses[currentIndex].description}</div>

      </div>

      <div className='max-h-full flex-col hidden md:flex '>
      <p className='ml-[12%] mb-[-11%] mt-5 bg-[#cef0f8] w-[31vw] border-2 border-black rounded-[5px] pl-1 flex flex-wrap'>Comments</p>

      <div className='bg-[#cef0f8] text-sm ml-[8%] mr-[4%] mt-[10%] p-[3%] rounded-[10px] h-[40vh] border-2 border-black'> {statuses[currentIndex].comment}</div>
      </div>

      </div>
    </div>
    
  );
};

export default StatusViewer;
