import React from 'react';

const MultiLineInputBox = ({ className = '', ...rest }) => {
  return (
    <textarea
      className={`${className}`} 
      {...rest} 
    />
  );
};

export default MultiLineInputBox;
