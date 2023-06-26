import React from "react";

const button = ({name}) => {
  
  return (
    <div>
      <button className="bg-gray-100 font-normal py-2 px-3 m-1 rounded-full">
        {name}
      </button>
    </div>
  );
};

export default button;
