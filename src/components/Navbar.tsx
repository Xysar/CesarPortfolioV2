import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ portfolio }: any) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="h-[105px] relative">
      <div className="max-w-[1400px] m-auto">
        <div className=" flex justify-between items-center py-6 px-6 ">
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
            <li className="flex-1 w-32">{portfolio()}</li>
          </ul>
          <div className="md:hidden flex flex-1 justify-end">
            <button
              onClick={() => {
                setToggle((prev) => !prev);
              }}
              className="flex items-center z-[1] "
            >
              <img
                src="assets/bars-solid.svg"
                alt="Menu"
                className="w-14 h-14 p-2 cursor-pointer object-contain"
              />
            </button>
            <ul
              className={`${
                toggle ? "flex" : "hidden"
              } flex-col absolute bg-slate-50 inset-y-0 right-0 min-h-screen  pt-24`}
            >
              <li className="  text-center  bg-slate-500">
                <a
                  className="px-10 py-2   inline-block w-full  bg-slate-100  hover:text-white hover:bg-slate-800 ease-in duration-150"
                  href="https://github.com/Xysar"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li className="text-center  ">
                <a
                  className="px-5 py-2  w-full inline-block hover:text-white hover:bg-slate-800 ease-in duration-150"
                  href="https://www.linkedin.com/in/cesarcamacho760/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li className="text-center">
                <Link
                  className="inline-block w-full px-5 py-2  hover:text-white hover:bg-slate-800 ease-in duration-150"
                  to="/resume"
                >
                  Resume
                </Link>
              </li>
              <li className="text-center">{portfolio()}</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
