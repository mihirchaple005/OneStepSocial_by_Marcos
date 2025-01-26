import React, { useMemo } from 'react'
import OutputBox from '../../components/Danveer'
import Danveer from '../../components/Danveer';

function Analysis({
  DigiNgoObject = {
    "url" : 'https://images.pexels.com/photos/5697255/pexels-photo-5697255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    "description" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum consectetur praesentium neque esse, quibusdam, cupiditate quaerat aliquid maiores expedita nulla temporibus recusandae et dolor ipsum quia. "
  },
  Danveers = []
}) {

  const data = {
    "username": "Marcos", // username pe constraint lagana hai not more than 15 words
    "dateOfDonation":"8-18-2024",
    "Amount":"20,000",
    "profilePicUrl":'https://images.pexels.com/photos/5697255/pexels-photo-5697255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  };

  const cachedDanveers = useMemo(() => (
    Danveers.map((Danveer) => (
      <div key={Danveer.id}>
        <OutputBox className="border-2 border-red-400  p-4 rounded-lg bg-blue-300 m-5 " data={data} />
      </div>
    ))
  ), [Danveers])

  return (
    <div className='grid gap-5 md:grid-cols-2  md:w-full md:h-full md:p-4   grid-cols-1 p-2 m-2'>
        {/* for image */}
        <div className='border md:grid grid-cols-1 hidden'>
          <div className='border  absolute z-10 mx-5 mt-[-0.7rem] px-4 rounded-md bg-blue-200  border-blue-500 '>
            <h6 >Title : we are here to help you out</h6>
          </div>

          <div className=' border-2 border-blue-500 h-[32rem] rounded-lg overflow-hidden'>

            <img className='object-fill h-full w-full' src={DigiNgoObject.url} alt="" />
          
          </div>

        </div>
        


        {/* for statistics */}
        <div className='border-2  border-blue-500 md:h-[22rem] h-full rounded-lg overflow-hidden '>
          {/* This graph will be dependent on realtime data as fund collected (y) vs time spend (x) it can be vice versa as well */}

          <div className=' grid grid-cols-1 '>
            <div className='border  border-blue-500 absolute z-10 mx-5 mt-[-0.7rem] px-4 rounded-md bg-blue-200'>
              {/* <h6 >Total Crowdfund Collection</h6> */}
              <h6>Statistics</h6>
            </div>

         
          <img 
          src="https://static.vecteezy.com/system/resources/previews/002/549/751/original/business-candle-stick-graph-chart-of-stock-market-investment-trading-on-blue-background-bullish-point-trend-of-graph-eps10-illustration-vector.jpg" alt="crowdFunding page" />
          
          </div>
          

          {/* here we will use either python labraries to do so and or chart.js of HTML 5*/}

        </div>


        {/* for description */}
        <div className='border-2 border-blue-500 md:h-[15rem] my-2 rounded-lg mb-[10rem] md:mb-0 md:my-0'>
          <div className='grid grid-cols-1'>
            <div className='  absolute z-10 mx-5 mt-[-0.7rem] px-4 rounded-md bg-blue-200  border-blue-500 border-2'>
              {/* <h6 >Total Crowdfund Collection</h6> */}
              <h6>Description</h6>
          </div>
        </div>

          <div className='p-4 px-6 md:h-full overflow-hidden bg-blue-50 md:mb-[10rem]'> 
            <div className='overflow-y-scroll md:h-[70%] no-scrollbar pt-3 '>
            <p>{DigiNgoObject.description}</p>
            </div>
            <div className="relative h-32 w-full mt-[-4rem] ">
              <div className="absolute bottom-0 right-0 h-[2.3rem] w-[25rem] border-2 border-blue-600 bg-blue-100 p-2 text-center rounded-md">
                <h4>All Crowdfunders Verification Documents</h4>
              </div>
            </div>
          </div>
          

        </div>


        {/* for Danveers */}
        <div className=' border-2 border-blue-600 md:h-[25rem] h-[15rem] mt-[-10rem] rounded-lg overflow-y-auto no-scrollbar bg-blue-50 scroll-smooth'>
          {/* <h1>Danveers</h1> */}

          <div className='grid grid-cols-1'>
            <div className='border border-blue-600 absolute z-10 mx-5 mt-[-0.7rem] px-4 rounded-md bg-blue-200'>
              
              <h6>Danveers</h6>
            </div>
          </div>


          <Danveer  Doner={data} />
          <Danveer  Doner={data} />
          <Danveer  Doner={data} />
          <Danveer  Doner={data} />
          <Danveer  Doner={data} />
          <Danveer  Doner={data} />
          <Danveer  Doner={data} />
          
          
          

        </div>
    </div>
  )
}

export default Analysis