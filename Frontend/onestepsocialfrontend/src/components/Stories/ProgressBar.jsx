/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from 'react';
// eslint-disable-next-line no-unused-vars
const ProgressBar=({value})=>{
    // eslint-disable-next-line no-unused-vars
    const [percent,setPercent] = useState(0);
    useEffect(()=>{
       setPercent(Math.min(100,Math.max(value,0)));
    },[value]);
    return(
        <div className='h-2 w-full bg-gray-500 rounded-[55px] overflow-hidden'>
            {/* <span>{percent.toFixed()}</span> */}
            <div className="h-full bg-white"style={{width:`${percent}%`}}></div>
        </div> 
    )
};
export default ProgressBar;