import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {

const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)

if(!isMenuOpen)return null
  return (
    <div className="pl-3 shadow-lg w-36 mx-3  h-screen pt-3 bg-red-300 ">
      <ul>
        <Link to="/">
        <li className="text-base  text-gray-900 dark:text-white ">Home</li>
        </Link>
        
        <li className="text-base text-gray-900 dark:text-white">Shorts</li>
        <li className="tetx-base text-gray-900 dark:text-white">
          Subscriptions
        </li>
      </ul>

      <ul className="pt-3">
        <li className="text-base text-gray-900 dark:text-white">Library</li>
        <li className="text-base text-gray-900 dark:text-white">History</li>
        <li className="text-base text-gray-900 dark:text-white">Your video</li>
        <li className="text-base text-gray-900 dark:text-white">Watch Later</li>
        <li className="text-base text-gray-900 dark:text-white">
          Liked Videos
        </li>
      </ul>
      <h1 className=" pt-3 pb-3 text-lg font-medium text-gray-900 dark:text-white">
        Subscriptions
      </h1>
      <ul>
        <li className="text-base text-gray-900 dark:text-white">
          Namaste Javascript
        </li>
        <li className="tetx-base text-gray-900 dark:text-white">
          Code Step by Step
        </li>
        <li className="text-base text-gray-900 dark:text-white">
          Not just dev
        </li>
        <li className="text-base text-gray-900 dark:text-white">
          Coderevolution
        </li>
      </ul>

      
      <ul className="pt-3">
        <li className="text-base text-gray-900 dark:text-white">Settings</li>
        <li className="text-base text-gray-900 dark:text-white">
          Report History
        </li>
        <li className="text-base text-gray-900 dark:text-white">Help</li>
        <li className="text-base text-gray-900 dark:text-white">
          Send Feedback
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
