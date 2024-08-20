import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cons1 from '../images/Cons1.png';
import Consultancy2 from './Consultancy2';
import Note1 from './Note1';
import BookAppointment from './BookAppointment';
import OutputBox from '../components/OutputBox';
import SingleLineInputBox from '../components/SingleLineInputBox';
import MultiLineInputBox from '../components/MultiLineInputBox';
function Consultancy1() {
    return (
        <div className='place-content-center  h-[35rem] md:bg-red-50'>
            <center>
                <img src={Cons1} alt='Photo' className='w-[22.5rem] center lg:opacity-20 lg:w-[45.5rem] lg:h-auto lg:mt-[-10rem]' />
            </center>
            <h1 className='font-julius text-[27px] right-[5rem] mt-[3rem] lg:mt-[-20rem] lg:ml-[-35rem] lg:text-[50px]'>
                YOUR HEALTH <br />OUR PRIORITY
            </h1>
            <p className='text-[12px] text-sky-600 lg:ml-[-35rem] lg:text-[19px]'>
                Connect with care, helping<br />
                manage your health
            </p>
            {/* Form */}
            
            <Link to="/Consultancy2">
                <button type="button" className='border-2 rounded-md bg-gradient-to-b from-sky-50 to-sky-200 font-mono shadow-lg shadow-sky-400 lg:hidden font-bold mt-[2rem] p-2'>
                    Book Appointment
                </button>
            </Link>
        </div>
    );
}
function App2() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Consultancy1 />} />
                <Route path="/Consultancy2" element={<Consultancy2 />}/>
                <Route path="/note1" element={<Note1 note="Here is how to..." />} />
                <Route path="/note2" element={<Note1 note="Here is how to..." />} />
                <Route path='/BookAppointment' element={<BookAppointment/>}/>
                 
            </Routes>
        </BrowserRouter>
    );
}

export default App2;
