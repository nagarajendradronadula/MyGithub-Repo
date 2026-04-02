import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";

const navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setrShowMenu] = useState(true);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide"><a href="#Home">D.N.R's Portfolio</a></span>
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opcity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-md transiton-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#Skills">
          <li className="text-md transiton-all duration-300 p-1 md:p-0">
            Skills
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transiton-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Contact">
          <li className="text-md transiton-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
        />
      )}
    </nav>
  );
};

export default navbar;
