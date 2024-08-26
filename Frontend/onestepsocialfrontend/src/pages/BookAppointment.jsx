import React from "react";
import SingleLineInputBox from "../components/SingleLineInputBox";
import MultiLineInputBox from '../components/MultiLineInputBox';
function BookAppointment(){
    return(
    <>
    <div>
        <center><h1>Fill the form to book an Appointment</h1></center>
        <div className="mt-6 w-[16rem] h-[30rem] rounded-md bg-gradient-to-b from-sky-100 via-emerald-50 via-red-50 to-red-100">
            
            <SingleLineInputBox label='Name' labelClass="w-[6rem] h-[1.2rem] rounded z-30 border-[#7DE8FF] absolute bg-[#ffffff] mt-[2rem] ml-[1.8rem] px-[1rem] border-2 text-[12px] text-[#317E8F]" className=" w-[14rem] h-[2rem] rounded z-20 border-[#7DE8FF] absolute mt-[2.9rem] ml-[1rem] border-2 text-[10px] text-[#317E8F] "></SingleLineInputBox>
             
           
            <SingleLineInputBox label='Age' labelClass=" w-[3rem] h-[1rem] rounded z-30 border-[#7DE8FF] absolute bg-[#ffffff] mt-[6rem] ml-[1.8rem] border-2 text-[12px] text-[#317E8F] px-[0.7rem] " className=" w-[6rem] h-[1.6rem] rounded z-20 border-[#7DE8FF] absolute mt-[6.5rem] ml-[1rem] border-2 text-[10px] text-[#317E8F] "></SingleLineInputBox>

           
            <SingleLineInputBox label='Gender' labelClass="w-[3.4rem] h-[1rem] rounded z-30 border-[#7DE8FF] absolute bg-[#ffffff] mt-[6rem] ml-[8rem] px-[0.5rem] border-2 text-[12px] text-[#317E8F] " className=" w-[6rem] h-[1.6rem] rounded z-20 border-[#7DE8FF] absolute mt-[6.5rem] ml-[7.6rem] border-2 text-[10px] text-[#317E8F] "></SingleLineInputBox>
            
         
            <SingleLineInputBox label="Doctor’s Specialization" labelClass="w-[10rem] h-[1.2rem] rounded z-30 border-[#8EDADA] absolute bg-[#ffffff] mt-[10rem] ml-[1.8rem] px-[1rem] border-2 text-[12px] text-[#63A589]" className=" w-[14rem] h-[2rem] rounded z-20 border-[#8EDADA] absolute mt-[10.9rem] ml-[1rem] border-2 text-[10px] text-[#63A589] "></SingleLineInputBox>
             
           
            <MultiLineInputBox  label='Patient’s Symptoms' labelClass=" w-[10rem] h-[1.2rem] rounded z-30 border-[#8EDADA] absolute bg-[#ffffff] mt-[14rem] ml-[1.8rem] px-[1rem] border-2 text-[12px] text-[#63A589] " className=" w-[14rem] h-[2rem] rounded z-20 border-[#8EDADA] absolute mt-[14.9rem] ml-[1rem] border-2 text-[10px] text-[#63A589] "></MultiLineInputBox >
             
             <MultiLineInputBox label='Any Medical Condition' labelClass="w-[10rem] h-[1.2rem] rounded z-30 border-[#FFE0DE] absolute bg-[#ffffff] mt-[18rem] ml-[1.8rem] px-[1rem] border-2 text-[12px] text-[#DC7F7F] " className=" w-[14rem] h-[2rem] rounded z-20 border-[#FFE0DE] absolute mt-[18.9rem] ml-[1rem] border-2 text-[10px] text-[#DC7F7F] "></MultiLineInputBox>
             
           
            <MultiLineInputBox label="Patient Status" labelClass='w-[8rem] h-[1.2rem] rounded z-30 border-[#FFCCC8] absolute bg-[#ffffff] mt-[22rem] ml-[1.8rem] px-[1rem]  border-2 text-[12px] text-[#DC7F7F] ' className=" w-[14rem] h-[2rem] rounded z-20 border-[#FFCCC8] absolute mt-[22.9rem] ml-[1rem] border-2 text-[10px] text-[#DC7F7F] "></MultiLineInputBox >
             

            <submit type="submit" className="bg-[#DCAEAB] text-[14px] text-[#A73737] absolute rounded w-[8rem] h-[1.2rem] mt-[26rem] ml-[-4rem]  ">Submit</submit>
        </div>
    </div>
    </>
    )
}
export default BookAppointment;