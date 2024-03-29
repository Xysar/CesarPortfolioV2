import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ portfolio }: any) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="relative h-[105px]">
      <div className="m-auto max-w-[1400px]">
        <div className=" flex items-center justify-between py-6 px-6 ">
          <Link className="flex-1 text-3xl font-bold" to="/">
            Cesar Camacho
          </Link>
          <ul className="hidden justify-end gap-16 md:flex">
            <li className="flex-1">
              <a
                className=" flex-1 rounded-xl px-5 py-[10px] duration-150 ease-in hover:bg-slate-800 hover:text-white"
                href="https://github.com/Xysar"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li className="flex-1">
              <a
                className=" rounded-xl px-5 py-[10px] duration-150 ease-in hover:bg-slate-800 hover:text-white"
                href="https://www.linkedin.com/in/cesarcamacho760/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex-1">
              <Link
                className=" rounded-xl px-5 py-[10px] duration-150 ease-in hover:bg-slate-800 hover:text-white"
                to="/resume"
              >
                Resume
              </Link>
            </li>
            <li className="w-32 flex-1">{portfolio()}</li>
          </ul>
          <div className="flex flex-1 justify-end md:hidden">
            <button
              onClick={() => {
                setToggle((prev) => !prev);
              }}
              className="z-[1] flex items-center "
            >
              <img
                src="assets/bars-solid.svg"
                alt="Menu"
                className="h-14 w-14 cursor-pointer object-contain p-2"
              />
            </button>
            <ul
              className={`${
                toggle ? "flex" : "hidden"
              } absolute inset-y-0 right-0 min-h-screen flex-col bg-slate-50  pt-24`}
            >
              <li className="  bg-slate-500  text-center">
                <a
                  className="inline-block w-full   bg-slate-100 px-10  py-2  duration-150 ease-in hover:bg-slate-800 hover:text-white"
                  href="https://github.com/Xysar"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li className="text-center  ">
                <a
                  className="inline-block w-full  px-5 py-2 duration-150 ease-in hover:bg-slate-800 hover:text-white"
                  href="https://www.linkedin.com/in/cesarcamacho760/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li className="text-center">
                <Link
                  className="inline-block w-full px-5 py-2  duration-150 ease-in hover:bg-slate-800 hover:text-white"
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
