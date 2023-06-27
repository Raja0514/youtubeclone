import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Videodata = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    getvideo();
  }, []);

  async function getvideo() {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log("video data", json.items);
    setvideos(json.items);
    
  }

  if(videos.length===0) return <Shimmer/>



  return (
    <>
      <div className="flex flex-wrap">
        {videos.map((video) => {
          return (
            <>
              <Link to={"/watch?v=" + video.id}>
                <Videocard key={video.id} info={video} />
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Videodata;
