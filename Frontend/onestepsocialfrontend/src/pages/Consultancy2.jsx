import React, { useState } from 'react';
import {  Link } from "react-router-dom";

import './consultancyStyle.css'
import health1 from '../images/healthc4.jpeg'
import health2 from '../images/healthc2.jpeg'
import health3 from '../images/healthc5.webp'


function Consultancy2(props){
   
return(
    <div  className=''>
        
        <div className='gap-7 flex place-content-center'><button type='button' className='border-spacing-4 rounded-md bg-gradient-to-b from-emerald-50 to-emerald-200 w-[5rem] h-[4.6rem] shadow-xl shadow-slate-300'>Visit Doctor</button>
        <button type='button' className='border-spacing-4 rounded-md bg-gradient-to-b from-emerald-50 to-emerald-200 w-[5rem] h-[4.6rem] shadow-xl shadow-slate-300'>See Reports</button></div>
        <div className='gap-6 flex overflow-x-scroll no-scrollbar mt-10'>
        <div className='min-w-[17rem] h-[14rem] flex gap-5'><img className='w-[9rem] h-[8rem] mt-6 rounded-md' src={health1}></img><p className='text-left text-[12px] w-[6rem] mt-8'>"Facilitating Access to Top Medical Specialists Across India"</p></div>
        <div className='min-w-[17rem] h-[14rem]  flex gap-4'><img className='w-[9rem] h-[8rem] mt-6 rounded-md' src={health2}></img><p className='text-left text-[12px] w-[6rem] mt-8'>"Our mission is to connect individuals with leading medical specialists throughout India."</p></div>
        <div className='min-w-[17rem] h-[14rem]  flex gap-5'><img className='w-[9rem] h-[8rem] mt-6 rounded-md' src={health3}></img><p className='text-left text-[12px] w-[6rem] mt-8'>"Feel free to seek medical advice from our experienced doctors.They are here for your better health"</p></div>
       
        </div>
        <center><Link to="/BookAppointment"><button type='button' className='w-[17rem] h-[3.4rem] rounded-md bg-gradient-to-b from-red-50 to-red-200 border-spacing-4 shadow-xl shadow-stone-300'>Book Appointment</button></Link></center>
        <center>
            <div className='border-spacing-4 w-[16rem] h-[10rem] mt-7 bg-sky-100'><h3 className='text-center'>Notice</h3>
            <nav>
            <text className='text-center text-[12px]'>Steps to book Appointment<Link to='/note1'><br/>Click here<br/></Link></text>
            <text className='text-center text-[12px]'>Steps to communicate with doctor<Link to='/note2'><p>Click here</p></Link></text>
            </nav>
        </div>
       </center>
    </div>
)
}
export default Consultancy2; 