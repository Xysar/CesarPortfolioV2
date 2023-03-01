import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import useMousePosition from "./onMousePosition";

const Hero = () => {
  const mousePosition = useMousePosition();
  const [degrees, setDegrees] = useState(0);

  let width = window.innerWidth;
  let height = window.innerHeight;

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
    <section className="relative overflow-hidden min-h-screen">
      <Navbar />
      <div className="sm:h-[calc(100%-105px)] gap-12 sm:gap-32 flex flex-col sm:justify-between items-center">
        <div></div>
        <div className="px-6 flex sm:flex-row flex-col items-center gap-10">
          <img
            className="w-52 sm:w-72  rounded-full"
            src="assets/profile-pic.jpg"
            alt=""
          />
          <div className="font-bold">
            <h1 className="text-[2.5em]  ">Hi, I'm Cesar | </h1>
            <h1 className={`text-[2em] `}>Frontend Software Engineer </h1>
          </div>
        </div>
        <a href="" className="mb-16 mt-0">
          <img
            className="h-10 w-10"
            src="assets/caret-down.png"
            alt="Down Arrow"
          />
        </a>
      </div>
      <div
        className={`absolute grid grid-cols-2  gap-2  top-[25%] right-[15%]  h-[500px] w-[500px] z-[-1]  `}
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
