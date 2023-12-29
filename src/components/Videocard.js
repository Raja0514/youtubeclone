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
      <div className="p-3 mx-1 w-56  shadow-lg">
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

export const Bluebordervideocard = ({ info }) => {
  return (
    <div className="mx-1 border-double border-8 border-indigo-600 bg-neutral-600">
      {" "}
      <Videocard info={info} />{" "}
      <h1 className="mx-5 font-bold">This is an HOC Component</h1>
    </div>
  );
};
