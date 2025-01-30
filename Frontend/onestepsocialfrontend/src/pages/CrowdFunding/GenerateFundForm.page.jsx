import React, { useMemo } from "react"
import Sanrakshak from "../../components/Sanrakshak"
import SingleLineInputBox from "../../components/SingleLineInputBox"
import MultiLineInputBox from "../../components/MultiLineInputBox"


function GenerateFundForm() {


  return (
    
    <>
      <div className="w-full  h-[91vh] flex ">

        <div className="md:grid md:w-[60%] md:h-full md:p-4  ">

            <div className="flex w-full h-[30rem] ">

                <div className=" w-full m-3">
                    {/* name */}
                    <div className="w-full">

                        <SingleLineInputBox label="Name" labelClass="absolute -top-8 left-3 mt-5 border-blue-300 border-2 text-gray-600 bg-white pl-2 pr-4 text-lg rounded-md" className="border-blue-400 border-2 rounded-md h-[4rem] bg-blue-100 w-full"/>

                    </div>


                    {/* phone number */}
                    <div>

                        <SingleLineInputBox label="Phone Number" labelClass="absolute -top-8 left-3 mt-5 border-blue-300 border-2 text-gray-600 bg-white pl-2 pr-4 text-lg rounded-md" className="border-blue-400 border-2 rounded-md h-[4rem] bg-blue-100 w-full"/>

                    </div>


                    {/* upload video */}

                    <div>

                       {/* Upload video component will be here comming soon */}

                    </div>

                </div>

                <div className=" w-full h-[30rem] m-3">

                    {/* Email ID */}
                    <div className="w-full">

                        <SingleLineInputBox label="Email Id" labelClass="absolute -top-8 left-3 mt-5 border-blue-300 border-2 text-gray-600 bg-white pl-2 pr-4 text-lg rounded-md" className="border-blue-400 border-2 rounded-md h-[4rem] bg-blue-100 w-full"/>

                    </div>


                    {/* cause of fund raising */}
                    <div>

                        <SingleLineInputBox label="Cause of Fund Raising" labelClass="absolute -top-8 left-3 mt-5 border-blue-300 border-2 text-gray-600 bg-white pl-2 pr-4 text-lg rounded-md" className="border-blue-400 border-2 rounded-md h-[4rem] bg-blue-100 w-full"/>

                    </div>


                    {/* Fund Raising details  */}

                    <div>

                       {/* Fund Raising Details*/}
                        <MultiLineInputBox label="Fundraising Details" labelClass="absolute -top-8 left-3 mt-5 border-blue-300 border-2 text-gray-600 bg-white pl-2 pr-4 text-lg rounded-md" className="border-red-400 border-2 rounded-md h-64 bg-red-100 w-full"/>
                    </div>


                </div>

            </div>

            <div className=" w-full mt-[-6.5rem] relative ">

              <button className="p-2 border-2 border-red-500 absolute top-0 right-0 rounded-lg mr-3.5 mt-4 bg-red-100">
                <p>Upload Videos</p>
              </button>
            </div>

        </div>

        <div className="hidden md:flex md:w-[40%] md:h-full md:p-8 w-0">

          <div className="md:w-full md:h-full w-0  mx-10 inset-0 rounded-2xl overflow-hidden ">
              <Sanrakshak  />
          </div>

        </div>

      </div>
    </>
  )
}

export default GenerateFundForm


