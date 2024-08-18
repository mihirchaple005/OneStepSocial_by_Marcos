/* eslint-disable react/prop-types */
import React from "react";

function CarouselPartComponent({
  infoItem = {},
  ...rest
}) {

  return (
    <>
      <div className="grid relative">
        <div className=" flex justify-center w-auto h-auto ">

          {/* image and video part */}

          <div className="md:h-[30rem] md:w-[23.5rem] h-[25rem] w-[19.18rem] flex justify-center border-red-400 border-2 overflow-hidden rounded-xl relative z-0 mb-[-10px]">
            

          <img  src={infoItem.url}  alt=""/>


            {/* 
                when we will use props we will take images from the api or through already saved directory on that time we will make use of props directly 
                =>
                  <img  src={path}  alt=""/>
            */}

          </div>
        </div>

        <div className=" flex justify-center w-auto h-auto ">

          {/* descripition part */}

          <div className="md:h-[9rem] md:w-[27.5rem] h-[7rem] w-[21rem] border-blue-400 border-2 overflow-hidden rounded-xl relative z-10 bg-blue-200 text-left">

            <h6 className="mx-5 mt-3 mb-0">{infoItem.title}</h6>

            <p className="mx-5"> 
              {infoItem.description}
            </p>


          </div>
        </div>

      </div>
    </>
  );
}

export default CarouselPartComponent;










// Normal way 
{/* <img
              src="https://cdn.devdojo.com/tails/images/PawCSXL6Bul1aC2IHk1doOigdVFrNNJe0oLfWRzZ.png"
              alt=""
            /> */}
