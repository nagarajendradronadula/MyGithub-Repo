import React from "react";
import profileImage from "../../assets/IMG_20220813_192157-modified-removebg-preview-modified.png";

const home = () => {
  return (
    <div id="Home" className="text-white flex flex-wrap w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-3/5 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          Hello, I am <br /> NAGA RAJENDRA DRONADULA
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-5">
          MERN STACK DEVELOPER | JAVA | PYTHON
        </p>
        <button className="mt-5 md:md-10 text-black p-y2 p-x3 text-sm md:text-lg md:p-y2 md:p-x4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg[#465697] border-solid bg-[#CAC9C7] p-3">
          Contact Me!
        </button>
      </div>
      <div className="flex justify-center align-center mr-16">
        <img src={profileImage} alt="" />
      </div>
    </div>
  );
};

export default home;
