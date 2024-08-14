import React from 'react';

const MultiLineInputBox = ({ label,className ="border-blue-400 border-4 rounded-md h-64 bg-blue-100 w-2/3",
  labelClass="absolute -top-8 left-3 mt-5 border-blue-400 border-4 text-gray-600 bg-white pl-2 pr-4 text-lg rounded-md", ...rest }) => {
  return (<>
    <div class="relative w-full my-5 text-left">
        <label for={label} className={labelClass}>{label}</label>
        <input type="text" id={label} name={label} class={className} {...rest}/>
    </div>
    </>
  );
};

export default MultiLineInputBox;