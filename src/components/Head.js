import React from "react";
import logo from "../images/youtubelogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toogglemenu } from "../utils/appslice";
import { Link } from "react-router-dom";


const Head = () => {
  const dispatch = useDispatch();

  function togglemenu() {
    dispatch(toogglemenu());
  }
  return (
    <>
      <div className="grid grid-flow-col pt-3 py-3 shadow-lg  text-center">
        <div className="flex col-span-1">

          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            className="mx-3 cursor-pointer "
            onClick={togglemenu}
          />
       
       
       <img src={logo} alt="log" className="h-7 mx-3 cursor-pointer" />

     
                   
          
        </div>
       
        <div className="col-span-10">
          <input
            type="text"
            className="p-2 w-1/2  border border-gray-500 rounded-l-full "
          />
          <button className="border  border-gray-500 p-2 rounded-r-full">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        </div>
        <div className="col-span-1">
          <FontAwesomeIcon icon={faUser} size="2xl" />
        </div>
      </div>
    </>
  );
};
export default Head;
