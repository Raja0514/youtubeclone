import React from "react";

const Videocard = (props) => {
  const data = props.info;

  console.log("video props", data);

  const imageurl = props.info.snippet.thumbnails.medium.url;

  const viewcount = props.info.statistics.viewCount;

  const likcount = props.info.statistics.likeCount;

  const channeltitle = props.info.snippet.channelTitle;

  return (
    <>
      <div className="p-3 mx-2 w-72 shadow-lg">
        <img src={imageurl} alt="url" className="rounded-lg" />
        <ul>
          <li className="font-medium">{channeltitle}</li>
          <li className="font-medium">{viewcount}Views</li>
          <li className="font-medium">{likcount}Count</li>
        </ul>
      </div>
    </>
  );
};

export default Videocard;
