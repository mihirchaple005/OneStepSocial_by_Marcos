import React from "react"
import Sanrakshak from "../components/Sanrakshak"
import Newsfeed from "../components/Newsfeed.component"



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

          <div className="w-full border-2 border-red-500 h-[15%] flex overflow-hidden overflow-x-auto">

            <div className="h-full aspect-square p-3">

              <div className="h-full border-2 border-blue-600 aspect-square rounded-[50%] bg-blue-300">



              </div>

            </div>

            <div className="h-full aspect-square p-3">

              <div className="h-full border-2 border-blue-600 aspect-square rounded-[50%] bg-blue-300">

              </div>

            </div>

            
            {
              UpdatesAndStories.map((story) => (
                
                <div key={story.id} className="h-full aspect-square p-3">
                  
                  <div className="h-full border-2 border-blue-600 aspect-square rounded-[50%] overflow-hidden" >

                    <img src={story.url} alt="unviewed story" className="h-full w-full"/>

                  </div>

                </div>
              ))
            }
              

          </div>

          <div className="w-full border-2 border-red-500 h-[85%] grid px-20 overflow-y-auto">

            <div className="w-full border-2 border-yellow-600 h-full grid gris-cols-1 place-content-center  gap-2 ">


              {/* ekk chnage krna hai multiple feeds ayege tho useke liye for loop lagana hai bass */}

              <Newsfeed image = 'https://th.bing.com/th/id/OIP.CBS8VWlB8mIzhU8WbUkcsAHaEw?w=1400&h=900&rs=1&pid=ImgDetMain'/>



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