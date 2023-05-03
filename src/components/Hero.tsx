import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import useMousePosition from "./onMousePosition";

const Hero = () => {
  const mousePosition = useMousePosition();
  const [degrees, setDegrees] = useState(0);

  let width = window.innerWidth;
  let height = window.innerHeight;

  const element = () => {
    return (
      <a
        className="inline-block w-full bg-slate-800 px-5 py-2 text-white duration-150 ease-in hover:border hover:border-slate-800 hover:bg-opacity-0 hover:text-slate-800 md:box-border md:inline md:rounded-xl md:px-5 md:py-[10px]"
        href="#projects"
      >
        Portfolio
      </a>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDegrees((prevDegree) => prevDegree + 1);
    }, 75);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const coordinatesToTranslation = (coords: any) => {
    let offsetX = Math.floor(coords.x - width / 2);
    let offsetY = Math.floor(coords.y - height / 2);
    if (offsetX !== 0) {
      offsetX /= 15;
    }
    if (offsetY !== 0) {
      offsetY /= 15;
    }
    return { offsetX, offsetY };
  };

  let { offsetX, offsetY } = coordinatesToTranslation(mousePosition);

  return (
    <section className="relative max-h-[1200px] min-h-screen overflow-hidden">
      <Navbar portfolio={element} />
      <div className="flex flex-col items-center justify-between gap-12 sm:h-[calc(100vh-105px)] sm:gap-32">
        <div></div>
        <div className="flex flex-col items-center gap-10 px-6 sm:flex-row">
          <img
            className="w-52 rounded-full  sm:w-72"
            src="assets/profile-pic.jpg"
            alt=""
          />
          <div className="font-bold">
            <h1 className="text-[2.5em]  ">Hi, I'm Cesar | </h1>
            <h1 className={`text-[2em] `}>Frontend Software Engineer </h1>
          </div>
        </div>
        <a href="#projects" className="mb-16 mt-0">
          <img
            className="h-10 w-10"
            src="assets/caret-down.png"
            alt="Down Arrow"
          />
        </a>
      </div>
      <div
        className={`absolute top-[25%] right-[15%]  z-[-1]  grid h-[500px]  w-[500px] grid-cols-2 gap-2  `}
        style={{
          transform: `translate(${offsetX}px, ${offsetY}px) rotate(${degrees}deg)`,
        }}
      >
        <div className="bg-red-600  blur-[200px] md:blur-[100px] "></div>
        <div className="bg-green-500 blur-[200px] md:blur-[100px]   "></div>
        <div className="bg-blue-500 blur-[200px] md:blur-[100px] "></div>
        <div className="bg-purple-500 blur-[200px] md:blur-[100px] "></div>
      </div>
    </section>
  );
};

export default Hero;
