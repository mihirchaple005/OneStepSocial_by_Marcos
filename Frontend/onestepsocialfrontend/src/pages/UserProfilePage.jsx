import React from 'react'

function UserProfilePage() {
  return (
    <>
    <div className="mt-6 text-blue-400 text-lg font-bold
        md:grid grid-flow-col grid-cols-5 
        md:h-svh min-h-[760px] min-w-[400px]">
        <div className='relative mt-7 col-span-3 bg-blue-100 mx-4 h-4/6 border-blue-400 border-2 rounded-md'>
            <p className=' p-1 absolute top-0 left-0 transform -translate-y-1/2 
            translate-x-1/4 bg-blue-100 w-fit border-blue-400 border-2 rounded-md'>
                Profile Details
            </p>
            <div className='m-10 md:grid md:grid-flow-col grid-cols-4 sm:grid-flow-row sm:grid '>
                <img src="" alt='Profile Image' className='col-span-1 mr-5'>
                </img>
                <div className='col-span-2'>
                    <p>Name :</p>
                    <p>D.O.B :</p>
                    <p>Age :</p>
                    <p>Blood Group :</p>
                    <form className="space-y-6">
                        <div className="relative my-4">
                        <label htmlFor="phone" className="absolute -top-2 left-3 border-blue-400 border-2 rounded-md bg-blue-100 px-1 text-sm">Phone No.</label>
                        <input type="text" maxLength={10} name="phone" id="phone" className="w-full py-3 px-4 border-2 border-blue-400 rounded-md text-lg">
                        </input></div>

                        <div className="relative">
                        <label htmlFor="email" className="absolute -top-2 left-3 border-blue-400 border-2 rounded-md bg-blue-100 px-1 text-sm">E-mail Id</label>
                        <input type="email" name="email" id="email" className="w-full py-3 px-4 border-2 border-blue-400 rounded-md text-lg">
                        </input></div>
                    <button type="submit" className="py-2 px-4 bg-blue-100 border-2 border-blue-400
                    rounded-md hover:bg-blue-700 hover:text-white">Update</button>
                </form>
                </div>
            </div>
        </div>
        <div className='mt-7 relative col-span-2 h-5/6 mx-4'>
            <div className='relative h-2/6 min-h-[200px] bg-blue-100 mb-7 border-blue-400 border-2 rounded-md'>
                <p className=' p-1 absolute top-0 left-0 transform -translate-y-1/2 
                translate-x-1/4 bg-blue-100 w-fit border-blue-400 border-2 rounded-md'>
                    Capital Details
                </p>
            </div>
        <div className='relative h-4/6 min-h-[400px] bg-blue-100 mb-7 border-blue-400 border-2 rounded-md pb-6'>
            <p className='p-1 absolute top-0 left-0 transform -translate-y-1/2 translate-x-1/4 bg-blue-100 w-fit border-blue-400 border-2 rounded-md'>
                Health Details
            </p>
            <div className='h-5/6'>
                <div className='border-2 border-blue-400 h-3/6 min-h-[150px] mt-6 rounded-md mx-2'>Appointment History</div>
                <div className='border-2 border-blue-400 h-3/6 min-h-[150px] mt-2 rounded-md mx-2 mb-4'>Health Reports</div>
            </div>
            <a href="#" className='border-2 border-blue-400 ml-4 w-fit rounded-md 
            hover:bg-blue-700 hover:text-white p-2 block mt-4 absolute bottom-2'>Book Appointment</a>
        </div>
        </div>
    </div>
    </>
  )
}

export default UserProfilePage
    