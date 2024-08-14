import React from "react"
import Sanrakshak from "../components/Sanrakshak"



function Crowdfunding() {
  return (
    
    <>
      <div className="w-full border-2 border-red-500 h-full flex ">

        <div className="md:w-[60%] border-2 border-red-300 h-full w-[100%]">

          <div className="w-full border-2 border-red-500 h-[15%] flex">

          </div>

          <div className="w-full border-2 border-red-500 h-[85%] flex px-20">

            <div className="w-full border-2 border-red-500 h-full flex ">


            </div>

          </div>

        </div>

        <div className="hidden md:flex md:w-[40%] md:border-2 md:border-red-300 md:h-full md:p-8 w-0">

          <div className="md:w-full md:h-full w-0 border-2 border-green-500 mx-10 inset-0 rounded-2xl overflow-hidden">
              <Sanrakshak  />
          </div>

        </div>

      </div>
    </>
  )
}

export default Crowdfunding