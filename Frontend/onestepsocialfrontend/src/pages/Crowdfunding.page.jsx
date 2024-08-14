import React from "react"
import Sanrakshak from "../components/Sanrakshak"



function Crowdfunding({
  UpdatesAndStories = [], // UpdatesAndStories will contain id for perticular story , story video url, flag to check it is viewed or not and required fields 
  flag = false,
  ...rest
}) {

  UpdatesAndStories.flag = {flag}

  return (
    
    <>
      <div className="w-full border-2 border-red-500 h-[91vh] flex ">

        <div className="md:w-[60%] border-2 border-red-300 h-full w-[100%]">

          <div className="w-full border-2 border-red-500 h-[15%] flex overflow-hidden ">

            <div className="h-full aspect-square p-3">

              <div className="h-full border-2 border-blue-600 aspect-square rounded-[50%] ">

              </div>

            </div>

            <div className="h-full aspect-square p-3">

              <div className="h-full border-2 border-blue-600 aspect-square rounded-[50%] ">

              </div>

            </div>

            
            {
              UpdatesAndStories.map((story) => (
                
                <div key={story.id} className="h-full aspect-square p-3">
                  
                  <div className="h-full border-2 border-blue-600 aspect-square rounded-[50%] ">

                    <img src={story.url} alt="unviewed story" />

                  </div>

                </div>
              ))
            }

            

          </div>

          <div className="w-full border-2 border-red-500 h-[85%] flex px-20">

            <div className="w-full border-2 border-red-500 h-full flex ">


            </div>

          </div>

        </div>

        <div className="hidden md:flex md:w-[40%] md:h-full md:p-8 w-0">

          <div className="md:w-full md:h-full w-0  mx-10 inset-0 rounded-2xl overflow-hidden">
              <Sanrakshak  />
          </div>

        </div>

      </div>
    </>
  )
}

export default Crowdfunding