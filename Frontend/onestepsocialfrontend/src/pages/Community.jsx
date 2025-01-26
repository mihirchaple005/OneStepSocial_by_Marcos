import React from 'react';
import crfund from '../images/crfund.jpg';
import FundDisplay from '../components/FundDisplay.component';
import puppy from '../images/puppy.jpeg';
function Community(props){
    return(
        <>
        <div className=' md:flex'>
        <div className='md:mt-[2rem]'>
        <FundDisplay communityName="RiseTogether" goal="500M" PostDetails="We aim to build shelter homes for disabled animals and provide neccessary support to street animals, let us try to save this innocent voice. We aim to build shelter homes for disabled animals and provide neccessary support to street animals, let us try to save this innocent voice " image={puppy} collected="100M"></FundDisplay>
       <FundDisplay communityName="RiseTogether" goal="500M" PostDetails="We aim to build shelter homes for disabled animals and provide neccessary support to street animals, let us try to save this innocent voice. We aim to build shelter homes for disabled animals and provide neccessary support to street animals, let us try to save this innocent voice " image={puppy} collected="100M"></FundDisplay>
       <FundDisplay communityName="RiseTogether" goal="500M" PostDetails="We aim to build shelter homes for disabled animals and provide neccessary support to street animals, let us try to save this innocent voice. We aim to build shelter homes for disabled animals and provide neccessary support to street animals, let us try to save this innocent voice " image={puppy} collected="100M"></FundDisplay>
       <FundDisplay communityName="RiseTogether" goal="500M" PostDetails="We aim to build shelter homes for disabled animals and provide neccessary support to street animals, let us try to save this innocent voice. We aim to build shelter homes for disabled animals and provide neccessary support to street animals, let us try to save this innocent voice " image={puppy} collected="100M"></FundDisplay>
       <FundDisplay communityName="RiseTogether" goal="500M" PostDetails="We aim to build shelter homes for disabled animals and provide neccessary support to street animals, let us try to save this innocent voice. We aim to build shelter homes for disabled animals and provide neccessary support to street animals, let us try to save this innocent voice " image={puppy} collected="100M"></FundDisplay>
       <FundDisplay communityName="RiseTogether" goal="500M" PostDetails="We aim to build shelter homes for disabled animals and provide neccessary support to street animals, let us try to save this innocent voice. We aim to build shelter homes for disabled animals and provide neccessary support to street animals, let us try to save this innocent voice " image={puppy} collected="100M"></FundDisplay>
        
        </div>
        <div className=' hidden md:block overflow-y-scroll no-scrollbar  md:mt-0 md:ml-[5rem]'>
                <div><p className=' md:w-[15rem] md:text-[14px] md:ml-[4rem] md:bg-sky-50 md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[4rem] absolute'>Community Name</p></div>
                <div className='  md:w-[35rem] md:h-[40rem] md:mt-[4.5rem] md:bg-sky-50 md:rounded-lg md:border-spacing-1 md:border-2 md:border-0086A3 md:ml-[3rem]'>
                     <p className=' md:w-[7rem] md:text-[14px] z-30 md:ml-[23rem] md:bg-sky-50 md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[2.5rem] absolute'>Members</p>
                     <p className=' md:w-[12rem] md:h-[2.5rem] z-10 md:text-[14px] md:bg-sky-50 md:ml-[22rem] md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[3.6rem] md:pt-1'>400M active members</p>
                     <img src={crfund} className='md:rounded-lg md:ml-20 md:mt-5 md:w-[25rem] md:h-[20rem] md:z-0 absolute'></img>
                     <p className=' md:w-[5rem] md:h-[2.5rem] md:z-50 md:text-[17px] md:bg-sky-50 md:ml-[5rem] md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[19rem] md:pt-1 absolute'>Details</p>
                     <p className=' md:w-[27rem] md:h-[5rem] z-10 md:text-[14px] md:bg-sky-50 md:ml-[4rem] md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[20rem] md:pt-4 md:z-10 absolute
                      overflow-y-scroll no-scrollbar '>Description and all referances</p>
                     <p className='md:text-[20px] md:text-red-400 absolute md:ml-4 md:mt-[26rem]'>Total Fund Raised</p>
                     <p className='md:text-[20px] md:text-red-400 absolute md:ml-4 md:mt-[28rem]'>Target</p>
                </div>

                <div><p className=' md:w-[15rem] md:text-[14px] md:ml-[4rem] md:bg-sky-50 md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[4rem] absolute'>Community Name</p></div>
                <div className='  md:w-[35rem] md:h-[40rem] md:mt-[4.5rem] md:bg-sky-50 md:rounded-lg md:border-spacing-1 md:border-2 md:border-0086A3 md:ml-[3rem]'>
                     <p className=' md:w-[7rem] md:text-[14px] z-30 md:ml-[23rem] md:bg-sky-50 md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[2.5rem] absolute'>Members</p>
                     <p className=' md:w-[12rem] md:h-[2.5rem] z-10 md:text-[14px] md:bg-sky-50 md:ml-[22rem] md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[3.6rem] md:pt-1'>400M active members</p>
                     <img src={crfund} className='md:rounded-lg md:ml-20 md:mt-5 md:w-[25rem] md:h-[20rem] md:z-0 absolute'></img>
                     <p className=' md:w-[5rem] md:h-[2.5rem] md:z-50 md:text-[17px] md:bg-sky-50 md:ml-[5rem] md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[19rem] md:pt-1 absolute'>Details</p>
                     <p className=' md:w-[27rem] md:h-[5rem] z-10 md:text-[14px] md:bg-sky-50 md:ml-[4rem] md:rounded-lg md:border-spacing-1 md:text-red-300 md:border-0086A3 md:border-2 md:mt-[20rem] md:pt-4 md:z-10 absolute
                      overflow-y-scroll no-scrollbar '>Description and all referances</p>
                     <p className='md:text-[20px] md:text-red-400  absolute md:ml-4 md:mt-[26rem]'>Total Fund Raised</p>
                     <p className='md:text-[20px] md:text-red-400 absolute md:ml-4 md:mt-[28rem] '>Target</p>
                </div>
            </div>
        
        </div>
        
        
        </>
    )
}
export default Community;