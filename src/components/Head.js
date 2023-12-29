import React, { useCallback, useEffect, useState } from "react";
import logo from "../images/youtubelogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { newmenu } from "../utils/appslice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Head = () => {
  const [searchquery, setsearchquery] = useState("");

  const [suggestions, setsuggestions] = useState([]);

  const [showsugestions, setshowsuggestions] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    //Api Call
    console.log(searchquery);
    //make an api call every key press
    //but if the differnce between 2 Api calls is <200ms
    //declaine the api call
    const Timer = setTimeout(() => getSuggestions(), 200);

    return () => {
      clearTimeout(Timer);
    };
  }, [searchquery]);

  /**
   * Key-1
   * render the component
   * useeffect()
   * start timer
   *
   * key make a api call
   * render the component
   * useeffect
   *
   *
   */

  const getSuggestions = async () => {
    console.log("API_CALL-" + searchquery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchquery);
    const json = await data.json();
    //console.log(json[1]);
    setsuggestions(json[1]);
  };

  const togglemenu = useCallback(() => {
    dispatch(newmenu());
  }, [dispatch]);

  useEffect(() => {
    togglemenu();
  }, [togglemenu]);

  return (
    <>
      <div className="grid grid-flow-col pt-3 py-3 shadow-lg ">
        <div className="flex col-span-1">
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            className="mx-3 cursor-pointer "
            onClick={togglemenu}
          />

          <img src={logo} alt="log" className="h-7 mx-3 cursor-pointer" />
        </div>

        <div className="col-span-10 px-10 ">
          <div>
            <input
              type="text"
              value={searchquery}
              onChange={(e) => setsearchquery(e.target.value)}
              onFocus={()=>setshowsuggestions(true)}
              onBlur={()=>setshowsuggestions(false)}
              className="py-2 p-2 w-1/2  border border-gray-500 rounded-l-full "
            />
            <button className="border  border-gray-500 p-2 rounded-r-full">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>
            <div className="bg-white fixed  py-2 px-5 w-[28rem] shadow-lg rounded-lg border ">
              {showsugestions && (
                <ul>
                  {suggestions.map((s) => (
                    <li
                      key={s}
                      className="py-2 shadow-sm hover:border border-gray-100 "
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <FontAwesomeIcon icon={faUser} size="2xl" />
        </div>
      </div>
    </>
  );
};
export default Head;
