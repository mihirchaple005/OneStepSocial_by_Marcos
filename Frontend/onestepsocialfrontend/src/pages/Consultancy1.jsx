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
        <div className='place-content-center  h-[40rem] md:bg-red-50'>
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
        
            <div className=' hidden md:block '>
                
                <SingleLineInputBox label="Name" labelClass='bg-stone-50 w-[7rem] h-[1.3rem] rounded text-blue-400 border-2  mt-[-21rem] z-40 border-sky-200 absolute left-[49rem] px-5' className=' bg-stone-50 w-[20rem] h-[2.5rem] mt-[-20rem] border-2 border-sky-200 left-[48rem] rounded-md absolute z-30 p-2 '></SingleLineInputBox>
                
               
                <SingleLineInputBox label="Age" labelClass='bg-stone-50 w-[7rem] h-[1.3rem] rounded text-blue-400 border-2  mt-[-17rem] z-40 border-sky-200 absolute left-[49rem] px-[2rem]' className=' bg-stone-50 w-[20rem] h-[2.5rem] mt-[-16rem] border-2 border-sky-200 left-[48rem] rounded-md absolute z-30 p-2 '></SingleLineInputBox>

              
                <SingleLineInputBox label='BloodGroup' labelClass='bg-stone-50 w-[7rem] h-[1.3rem] rounded text-blue-400 border-2  mt-[-13rem] z-40 border-sky-200 absolute left-[49rem]  px-[1rem]' className=' bg-stone-50 w-[20rem] h-[2.5rem] mt-[-12rem] border-2 border-sky-200 left-[48rem] rounded-md absolute z-30 p-2 '></SingleLineInputBox>

                
                <SingleLineInputBox label="Gender" labelClass='bg-stone-50 w-[7rem] h-[1.3rem] rounded text-blue-400 border-2  mt-[-9rem] z-40 border-sky-200 absolute left-[49rem] px-[2rem]' className=' bg-stone-50 w-[20rem] h-[2.5rem] mt-[-8rem] border-2 border-sky-200 left-[48rem] rounded-md absolute z-30 p-2 '></SingleLineInputBox>
                
               
                <SingleLineInputBox label="Doctor’s Specialization " labelClass='bg-stone-50 w-[12rem] h-[1.3rem] rounded text-blue-400 border-2  mt-[-5rem] z-40 border-sky-200 absolute left-[49rem] px-[1rem]' className=' bg-stone-50 w-[20rem] h-[2.5rem] mt-[-4rem] border-2 border-sky-200 left-[48rem] rounded-md absolute z-30 p-2 '></SingleLineInputBox>

               
                <SingleLineInputBox label="Patient’s Symptoms" labelClass='bg-stone-50 w-[12rem] h-[1.3rem] rounded text-blue-400 border-2  mt-[-1rem] z-40 border-sky-200 absolute left-[49rem] px-[2rem]' className=' bg-stone-50 w-[20rem] h-[2.5rem] mt-[0rem] border-2 border-sky-200 left-[48rem] rounded-md absolute z-30 p-2 '></SingleLineInputBox>

                <SingleLineInputBox labelClass='bg-stone-50 w-[12rem] h-[1.3rem] rounded text-blue-400 border-2  mt-[3rem] z-40 border-sky-200 absolute left-[49rem] px-[1rem]' label="Any Medical Condition" className=' bg-stone-50 w-[20rem] h-[2.5rem] mt-[4rem] border-2 border-sky-200 left-[48rem] rounded-md absolute z-30 p-2 '></SingleLineInputBox>

                
                <SingleLineInputBox label='Patient Status' labelClass='bg-stone-50 w-[10rem] h-[1.3rem] rounded text-blue-400 border-2  mt-[7rem] z-40 border-sky-200 absolute left-[49rem] px-[1rem]' className=' bg-stone-50 w-[20rem] h-[2.5rem] mt-[8rem] border-2 border-sky-200 left-[48rem] rounded-md absolute z-30 p-2 '></SingleLineInputBox>

                <button type='button' className='bg-stone-50 w-[10rem] h-[1.7rem] rounded text-blue-400 border-2  mt-[11rem] z-40 border-sky-200 absolute left-[55rem] '>Submit</button>
            </div>


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

{/* <Consultancy1></Consultancy1> */}
      {/*<Newsfeed image={newsimg} description="Description: NASA images: Let's take a look at the five most spectacular images released by the National Aeronautics and Space Administration, which range from a view of Mount Kilimanjaro from space to sulphur crystals on Mars.Description: NASA images: Let's take a look at the five most spectacular images released by the National Aeronautics and Space Administration, Description: NASA images: Let's take a look at the five most spectacular images released by the National Aeronautics and Space Administration, " />*/}
