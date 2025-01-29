/* eslint-disable no-unused-vars */
import React from 'react'
import Sanrakshak from "../components/Sanrakshak"
import Newsfeed from "../components/Newsfeed.component"

export default function Consultancy() {
  return (
    <> 
       <div className='md:flex '>
       <div className='md:ml-[6%] mt-[3%]'>
        <img src="https://s3.envato.com/files/321054303/DSC05827-Recuperado.jpg" alt="no image"/>
        <div className='-mt-[15%] ml-7 '><img className='w-[25%]'src="https://thumbs.dreamstime.com/b/webcam-view-arabian-indian-business-man-face-ethnic-businessman-guy-office-worker-talking-video-call-online-conference-distant-310240101.jpg" alt="no image" /></div>
      </div>
      <div className='w-[30%] h-[25rem] ml-auto mt-11 mr-11 mb-[20%] hidden md:flex'>
      <Sanrakshak></Sanrakshak>
      </div>
      <div className='w-[100%] h-[50rem] ml-auto mt-11 mr-11 mb-11 md:hidden'>
      <Sanrakshak></Sanrakshak>
      </div>
       </div>
    </>
  )
}