import React from 'react';

const Danveer = ({ Doner = {} }) => {

  return (
    <div className="md:h-[5.5rem] h-[4.2rem] border-2 border-blue-600 rounded-lg m-5 flex bg-blue-100">
      <div className='h-[100%] aspect-square  p-2 ml-2'>
        <div className='border-2 border-blue-700 h-[100%] rounded-[50%] overflow-hidden '>
          <img className='h-full w-full ' src={Doner.profilePicUrl} alt="" />
        </div>
      </div>

      <div className='md:w-[55%] w-[40%]  grid grid-cols-1 place-content-center text-center'>
        <p className='text-3xl'>{Doner.username}</p>
      </div>

      <div className=' md:w-[33%] w-[66%]'>
      <div className=' grid grid-cols-1 place-content-end pl-14'>
            <div className='  z-10 mx-5 mt-[-0.7rem] px-5 rounded-md bg-blue-200 text-center border-2 border-blue-600'>
              
              <h6>{Doner.dateOfDonation}</h6>
            </div>
          </div>

          <div className='h-full mt-[-0.84rem] place-content-center text-center'>
        <p className='bold text-2xl'> {Doner.Amount} Rs</p>
      </div>


      </div>

     

    </div>
  );
};

export default Danveer;
