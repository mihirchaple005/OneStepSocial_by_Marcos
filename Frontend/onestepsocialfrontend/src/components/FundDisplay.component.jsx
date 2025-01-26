import React, { useState } from 'react';


function    FundDisplay(props){
    return(
        <div className=''>
                <div className='md:w-[18rem] md:h-[1.6rem] md:ml-2 mt-[2.4rem] md:relative rounded z-30 md:bg-[#F1F9F9] md:border-spacing-2 md:border-2 md:text-[#ba6977] md:text-[15pxpx] md:flex md:border-[#0086A3]'><div className='md:ml-[0.5rem]'>{props.communityName}</div>   <div className=' md:ml-[8rem]'>{props.goal}</div></div>
                <div className='md:w-[32rem] md:h-[5rem] md:mt-[-0.4rem] z-20 md:relative rounded md:bg-[#F1F9F9] md:border-spacing-2 md:border-2 md:text-[#A53434] md:border-[#0086A3] md:flex'><div className='md:relative w-[26rem] md:h-[4.4rem] md:overflow-y-scroll md:no-scrollbar md:mt-[0.5rem] md:text-center md:block'>{props.PostDetails}</div>
                    <img src={props.image} className=' border-[#0086A3] border-2 rounded-[50px] md:w-[3.5rem] h-[3.5rem] md:mt-[0.7rem] md:ml-[1rem] '></img>
                </div>
                <div className='md:w-[9rem] md:h-[1.5rem] md:bg-[#F1F9F9] md:rounded md:ml-[20rem] md:mt-[-0.3rem] md:z-50 md:border-2 md:border-[#0086A3] md:relative md:text-[#A53434]'> {props.collected} </div>

            </div>
    )
}
export default FundDisplay;