import React from 'react';

const SingleLineInputBox = ({ className = '', ...rest }) => {
  return (
    <input
      className={`${className}`} 
      {...rest} 
    />
  );
};

export default SingleLineInputBox;
