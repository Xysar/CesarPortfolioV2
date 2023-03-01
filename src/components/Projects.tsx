import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="pb-24 px-5 m-auto max-w-[1100px] ">
      <p className="text-center text-3xl font-bold mb-10 tracking-wider ">
        Projects
      </p>
      <div className="flex flex-wrap justify-center gap-16">
        <div className="bg-white w-[300px] p-4 rounded-lg shadow-lg">
          <img className=" h-60 object-contain mb-6" src="" alt="" />
          <h1 className="text-center  mb-3 font-bold">Habit Tracker</h1>
          <p className="mb-2">
            Habit tracking web app to help with daily habits
          </p>
        </div>
        <div className="bg-white w-[300px] p-4  rounded-lg shadow-lg">
          <img
            className=" h-60 object-cover mb-6 rounded-lg "
            src="assets/pathfinderscreenshot.png"
            alt=""
          />
          <h1 className="text-center  mb-3 font-bold">Pathfinder</h1>
          <p className="mb-2">
            Habit tracking web app to help with daily habits
          </p>
        </div>
        <div className="bg-white w-[300px] p-4 rounded-lg shadow-lg">
          <img
            className=" h-60  object-cover mb-6 rounded-lg "
            src="assets/mathbattle.png"
            alt=""
          />
          <h1 className="text-center mb-3 font-bold">Math Battle</h1>
          <p className="mb-2">
            Habit tracking web app to help with daily habits
          </p>
        </div>
        <div className="bg-white w-[300px] p-4 rounded-lg shadow-lg">
          <img
            className=" h-60 object-fit rounded-lg mb-6"
            src="public/assets/restaurantScreenshot.png"
            alt="screenshot of restaurant template website"
          />
          <h1 className="text-center mb-3 font-bold">Restaurant Website</h1>
          <p className="mb-2">
            Habit tracking web app to help with daily habits
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
