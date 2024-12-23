import React ,{useContext} from "react";

import { ArrowLeftCircle } from "lucide-react";
import { GroupContext } from "../context/GroupContext";
import { Button } from "react-bootstrap";
import Post from "./Post";

export default function MainPage() {
  const ctx = useContext(GroupContext);
  
  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
      <div className="absolute top-20 z-5 w-full h-20 flex justify-between items-center px-4 hidden 1150:flex">
        <ArrowLeftCircle size={40} className="text-white" />
        <Button
          className="rounded-2xl border-2 text-white px-4 py-2 text-2xl "
          style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
          onClick={() =>{ ctx.setJoinGroup((prv) => !prv)}}
        >
          {ctx.joinGroup ? "Leave Group" : "Join Group"}
        </Button>
      </div>
        <div className=" text-white flex items-end justify-start p-10 h-[100%] 700:h-[79%]" >
          <div>
            <h1 className="text-5xl 700:text-3xl">COMPUTER ENGINEERING</h1>
            <br />
            <h4 className="text-3xl 700:text-2xl">142,765 Computer Engineers follow this</h4>
          </div>
        </div>
      </div>
      <Post/>
    </>
  );
}
