import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaJava,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold tracking-wider">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:p-12 py-10">
          {/* Java */}
          <div className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 hover:bg-[#93999A]">
            <FaJava color="#007396" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">Java</p>
          </div>

          {/* Python */}
          <div className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 hover:bg-[#93999A]">
            <FaPython color="#306998" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">Python</p>
          </div>

          {/* HTML */}
          <div className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 hover:bg-[#93999A]">
            <FaHtml5 color="#E34F26" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">HTML5</p>
          </div>

          {/* CSS */}
          <div className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 hover:bg-[#93999A]">
            <FaCss3 color="#1572B6" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">CSS3</p>
          </div>

          {/* JavaScript */}
          <div className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 hover:bg-[#93999A]">
            <FaJs color="#F7DF1E" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">JavaScript</p>
          </div>

          {/* Node.js */}
          <div className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 hover:bg-[#93999A]">
            <FaNodeJs color="#339933" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">Node.js</p>
          </div>

          {/* Express */}
          <div className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 hover:bg-[#93999A]">
            <SiExpress color="#FFFFFF" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">Express.js</p>
          </div>

          {/* React */}
          <div className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 hover:bg-[#93999A]">
            <FaReact color="#61DAFB" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">React.js</p>
          </div>

          {/* MongoDB */}
          <div className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 hover:bg-[#93999A]">
            <SiMongodb color="#47A248" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">MongoDB</p>
          </div>

          {/* MySQL */}
          <div className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 hover:bg-[#93999A]">
            <SiMysql color="#4479A1" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">MySQL</p>
          </div>

          {/* Tailwind CSS */}
          <div className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 hover:bg-[#93999A]">
            <SiTailwindcss color="#06B6D4" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">Tailwind CSS</p>
          </div>

          {/* Redux */}
          <div className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 hover:bg-[#93999A]">
            <SiRedux color="#764ABC" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">Redux</p>
          </div>

          {/* GitHub */}
          <div className="p-3 bg-zinc-950 flex flex-col items-center rounded-2xl duration-300 hover:scale-105 hover:bg-[#93999A]">
            <FaGithub color="#FFFFFF" size={100} />
            <p className="text-white text-center text-2xl font-semibold mt-2 tracking-wider">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
