import React, { useContext } from "react";
import bg from "../assets/bg.webp";
import w2 from "../assets/w2.avif";
function Background() {
 
  return (
    <div className="background-container ">
      
      <div className="">
        <div className="absolute top-0 left-0  h-[100vh] w-full" style={{backgroundColor:"rgba(0,0,0,0.55)"}}></div>
        <img src={w2} alt="Background" className="background-image" />
      </div>
    </div>
  );
}

export default Background;
