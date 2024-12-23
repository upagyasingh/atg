import React from "react";

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import { Button } from "@mui/material";
function Groups() {
  const grpData = [
    {
      img: p1,
      name: "Leisure",
    },
    {
      img: p2,
      name: "Activism",
    },
    {
      img: p3,
      name: "MBA",
    },

    {
      img: p4,
      name: "Philosphy",
    },
  ];

  return (
    <>
    <div className="flex h-[70px] w-[300px] items-center justify-start mt-2 ">
        <h4 className="">Recommended Groups</h4>
      </div>
      {grpData.map((person, ind) => (
        <div key={"person" + ind} className="flex h-[70px] w-[300px] items-center justify-between ">
         <div className="flex items-center gap-4 justify-center">
         <img className="rounded-full h-10" src={person.img}/>
         <span>{person.name}</span>
         </div>
         <button className="bg-slate-500 text-black p-2 px-4 rounded-3xl hover:text-white hover:bg-slate-300">Follow</button>
        </div>
      ))}
      <div className="flex h-[70px] w-[300px] items-center justify-end mt-3">
        <p className="text-blue-500">See more...</p>
      </div>
    </>
  );
}

export default Groups;
