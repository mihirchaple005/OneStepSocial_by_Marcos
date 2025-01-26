import React from 'react';

const OutputBox = ({ className = "", data = {} }) => {
  const formattedData = [];

  Object.keys(data).forEach((key) => {
    const value = data[key];
    formattedData.push(
      <div key={key} className="flex">
        <span className="font-bold mr-2">{key}:</span>
        <span>{JSON.stringify(value)}</span>
      </div>
    );
  });

  return (
    <div className={className}>
      {formattedData}
    </div>
  );
};

export default OutputBox;
