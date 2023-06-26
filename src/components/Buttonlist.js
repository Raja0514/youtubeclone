import React from "react";
import Button from "./Button000";

const Buttonlist = () => {

  const list = [
    "All",
    "computer programming",
    "conversation",
    "Recently updated",
    "live",
    "Tamil Cinema",
    "Music",
    "Mixes",
    "Recently updated",
    "Live",
    "Music",
    
  ];

  return (
    <div className="flex flex-wrap">
      {list.map((itemlist, index) => (
        <Button key={index} name={itemlist} />
      ))}
    </div>
  );
};

export default Buttonlist;
