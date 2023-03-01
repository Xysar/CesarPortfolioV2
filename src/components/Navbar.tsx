import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="h-[105px] py-6 px-6">
      <div className="flex justify-between items-center ">
        <Link className="text-2xl flex-1" to="/">
          Cesar Camacho
        </Link>
        <ul className="gap-16 hidden md:flex justify-end">
          <li className="flex-1">
            <a
              className=" flex-1 px-5 py-[10px] rounded-xl hover:text-white hover:bg-slate-800 ease-in duration-150"
              href="https://github.com/Xysar"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li className="flex-1">
            <a
              className=" px-5 py-[10px] rounded-xl hover:text-white hover:bg-slate-800 ease-in duration-150"
              href="https://www.linkedin.com/in/cesarcamacho760/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex-1">
            <Link
              className=" px-5 py-[10px] rounded-xl hover:text-white hover:bg-slate-800 ease-in duration-150"
              to="/resume"
            >
              Resume
            </Link>
          </li>
          <li className="flex-1 w-32">
            <a
              className="box-border px-5 py-[10px] rounded-xl text-white bg-slate-800 hover:bg-opacity-0 ease-in duration-150 hover:border-slate-800 hover:text-slate-800 hover:border"
              href="#projects"
            >
              Portfolio
            </a>
          </li>
        </ul>
        <div className="md:hidden flex flex-1 justify-end">
          <button
            onClick={() => {
              setToggle((prev) => !prev);
            }}
            className="flex items-center "
          >
            <img
              src="assets/bars-solid.svg"
              alt="Menu"
              className="w-14 h-14 p-2 cursor-pointer object-contain"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
