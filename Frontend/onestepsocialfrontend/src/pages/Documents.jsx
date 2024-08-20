import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { IoNewspaperSharp } from "react-icons/io5";
import { FaBookBookmark } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa6";
import { FaFileInvoice } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { TbCertificate } from "react-icons/tb";
import { FaNewspaper } from "react-icons/fa";
import { RiCommunityFill } from "react-icons/ri";
import { TbLicense } from "react-icons/tb";
import crfund from '../images/crfund.jpg';
function Documents(){
    return(
        < >
        <div className="bg-white ml-[-1rem]  w-full h-full flex "> 
            <div className='md:ml-[5rem] md:mt-[3rem] fixed'>
            <h1  className='mt-[3rem] text-[20px] md:hidden'>Documents</h1>
            <div className='w-[15rem] md:w-[23rem]  h-[2.6rem] md:h-[3rem] mt-6 bg-sky-100 flex rounded-lg md:border-0086A3 md:border-2'><FaIdCard className="text-stone-500 mt-[0.7rem] ml-4 text-xl md:mt-3"/><p className='text-[14px] left ml-4 mt-2 md:text-[17px]   '>Pan Card</p> <FaAngleRight className="text-stone-500 mt-[0.7rem] text-xl ml-4"/></div>
            <div className='w-[15rem]  md:w-[23rem] h-[3.4rem] md:h-[3rem] mt-6 bg-sky-100 flex rounded-lg md:border-0086A3 md:border-2'><TbCertificate className="text-stone-500 mt-[1rem] ml-4 text-[25px] "/><p className='text-[14px] left  ml-2 mt-2  md:text-[17px]'>Trust Deed Registration Certificate</p> <FaAngleRight className="text-stone-500 mt-[0.7rem] text-2xl ml-2"/></div>
            <div className='w-[15rem]  md:w-[23rem] h-[2.6rem]  md:h-[3rem] mt-6 bg-sky-100 flex rounded-lg md:border-0086A3 md:border-2'><RiCommunityFill className="text-stone-500 mt-[0.7rem] ml-4 text-xl md:mt-3"/><p className='text-[14px] left ml-2 mt-2 md:text-[17px] '>Society Registration</p> <FaAngleRight className="text-stone-500 mt-[0.7rem] text-2xl ml-6"/></div>
            <div className='w-[15rem]  md:w-[23rem] h-[3.4rem] md:h-[3rem] mt-6 bg-sky-100 flex rounded-lg md:border-0086A3 md:border-2'><IoNewspaperSharp className="text-stone-500 mt-[0.7rem] ml-4 text-xl"/><p className='text-[14px] left  ml-2 mt-2 md:text-[17px]'>Certificate of Incorporation</p> <FaAngleRight className="text-stone-500 mt-[0.7rem] text-2xl ml-4"/></div>
            <div className='w-[15rem]  md:w-[23rem]  h-[2.6rem] md:h-[3rem] mt-6 bg-sky-100 flex rounded-lg md:border-0086A3 md:border-2'><FaNewspaper className="text-stone-500 mt-[0.7rem] ml-4  text-xl"/><p className='text-[14px] left ml-1 mt-2 md:text-[17px] '>License under Section 8</p> <FaAngleRight className="text-stone-500 mt-[0.7rem] text-2xl ml-4"/></div>
            <div className='w-[15rem]  md:w-[23rem]  h-[3.4rem] md:h-[3rem] mt-6 bg-sky-100 flex rounded-lg md:border-0086A3 md:border-2'><FaClipboardList className="text-stone-500 mt-[0.7rem] ml-4 text-xl"/><p className='text-[14px] center mt-2 ml-[-0.2rem] md:text-[17px]'>12A Registration Certificate</p> <FaAngleRight className="text-stone-500 mt-[0.7rem] text-2xl ml-4"/></div>
            <div className='w-[15rem]  md:w-[23rem] h-[3.4rem] md:h-[3rem] mt-6 bg-sky-100 flex rounded-lg md:border-0086A3 md:border-2'><FaBookBookmark className="text-stone-500 mt-[0.7rem] ml-4 text-[18px]"/><p className='text-[14px] md:ml-1  mt-2 md:text-[17px]'> 20G Registration Certificate</p> <FaAngleRight className="text-stone-500 mt-[0.7rem] text-2xl ml-4"/></div>
        
            </div>
            <div className='hidden md:block overflow-y-scroll no-scrollbar md:ml-[35rem]'>
                <div><p className=' md:w-[15rem] md:text-[14px] md:ml-[4rem] md:bg-sky-50 md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[4rem] absolute'>Community Name</p></div>
                <div className='  md:w-[35rem] md:h-[40rem] md:mt-[4.5rem] md:bg-sky-50 md:rounded-lg md:border-spacing-1 md:border-2 md:border-0086A3 md:ml-[3rem]'>
                     <p className=' md:w-[7rem] md:text-[14px] z-30 md:ml-[23rem] md:bg-sky-50 md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[2.5rem] absolute'>Members</p>
                     <p className=' md:w-[12rem] md:h-[2.5rem] z-10 md:text-[14px] md:bg-sky-50 md:ml-[22rem] md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[3.6rem] md:pt-1'>400M active members</p>
                     <img src={crfund} className='md:rounded-lg md:ml-20 md:mt-5 md:w-[25rem] md:h-[20rem] md:z-0 absolute'></img>
                     <p className=' md:w-[5rem] md:h-[2.5rem] md:z-50 md:text-[17px] md:bg-sky-50 md:ml-[5rem] md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[19rem] md:pt-1 absolute'>Details</p>
                     <p className=' md:w-[27rem] md:h-[5rem] z-10 md:text-[14px] md:bg-sky-50 md:ml-[4rem] md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[20rem] md:pt-4 md:z-10 absolute
                      overflow-y-scroll no-scrollbar '>Description and all referances</p>
                     <p className='md:text-[20px] md:text-red-400 absolute md:ml-4 md:mt-[26rem]'>Total Fund Raised</p>
                     <p className='md:text-[20px] md:text-red-400 absolute md:ml-4 md:mt-[28rem]'>Target</p>
                </div>

                <div><p className=' md:w-[15rem] md:text-[14px] md:ml-[4rem] md:bg-sky-50 md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[4rem] absolute'>Community Name</p></div>
                <div className='  md:w-[35rem] md:h-[40rem] md:mt-[4.5rem] md:bg-sky-50 md:rounded-lg md:border-spacing-1 md:border-2 md:border-0086A3 md:ml-[3rem]'>
                     <p className=' md:w-[7rem] md:text-[14px] z-30 md:ml-[23rem] md:bg-sky-50 md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[2.5rem] absolute'>Members</p>
                     <p className=' md:w-[12rem] md:h-[2.5rem] z-10 md:text-[14px] md:bg-sky-50 md:ml-[22rem] md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[3.6rem] md:pt-1'>400M active members</p>
                     <img src={crfund} className='md:rounded-lg md:ml-20 md:mt-5 md:w-[25rem] md:h-[20rem] md:z-0 absolute'></img>
                     <p className=' md:w-[5rem] md:h-[2.5rem] md:z-50 md:text-[17px] md:bg-sky-50 md:ml-[5rem] md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[19rem] md:pt-1 absolute'>Details</p>
                     <p className=' md:w-[27rem] md:h-[5rem] z-10 md:text-[14px] md:bg-sky-50 md:ml-[4rem] md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[20rem] md:pt-4 md:z-10 absolute
                      overflow-y-scroll no-scrollbar '>Description and all referances</p>
                     <p className='md:text-[20px] md:text-red-400  absolute md:ml-4 md:mt-[26rem]'>Total Fund Raised</p>
                     <p className='md:text-[20px] md:text-red-400 absolute md:ml-4 md:mt-[28rem] '>Target</p>
                </div>
            </div>
        
        </div>
        </>
    )
}
export default Documents;