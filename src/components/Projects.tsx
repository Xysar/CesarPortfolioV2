import React, { useState } from "react";

const Projects = () => {
  const enum fields {
    Web,
    Game,
  }

  const [category, setCategory] = useState(fields.Web);

  const toggleCategory = (newCategory: fields) => {
    setCategory(newCategory);
  };

  const showProjects = () => {
    if (category === fields.Web) {
      return (
        <div className="flex flex-wrap justify-center gap-16">
          {/* <div className=" overflow-hidden bg-white w-80 p-4 rounded-lg shadow-sm hover:shadow-xl ease-in duration-150">
            <div className="relative">
              <img
                className="w-72 m-auto h-72 object-cover mb-6 rounded-lg"
                src="assets/pathfinderscreenshot.png"
                alt=""
              />
            </div>
            <h1 className="text-center  mb-3 font-bold">Habit Tracker</h1>
            <p className="mb-3 text-zinc-600">
              Habit tracking web app to help keep up with daily habits.
            </p>
            <div className=" flex gap-1 flex-wrap ">
              <p className="inline-block px-2 py-1  bg-navy text-white ">
                React
              </p>
              <p className="inline-block px-2 py-1 bg-navy text-white ">
                Spring Boot
              </p>
              <p className="inline-block px-2 py-1   bg-navy text-white ">
                Java
              </p>
              <p className="inline-block px-2 py-1 bg-navy text-white ">
                {" "}
                Javascript
              </p>
            </div>
          </div> */}
          <div className="bg-white  w-80 p-4 rounded-lg shadow-sm hover:shadow-xl ease-in duration-150">
            <div className="relative hover:flex">
              <img
                className="w-72 m-auto h-72 object-cover mb-6 rounded-lg "
                src="assets/pathfinderscreenshot.png"
                alt="screenshot of pathfinder project"
              />
              <div className=" hidden  absolute w-full h-full  top-0 justify-center items-center ">
                <div>Github</div>
                <div>Link</div>
              </div>
            </div>
            <h1 className="text-center  mb-3 font-bold">Pathfinder</h1>
            <p className="mb-3  ">
              Pathfinder visualizer that displays pathfinding algorithms such as
              A*, Dijsktra's.
            </p>
            <div className=" flex gap-1 flex-wrap ">
              <p className="inline-block px-2 py-1  bg-navy text-white ">
                React
              </p>
              <p className="inline-block px-2 py-1 bg-navy text-white ">
                {" "}
                Javascript
              </p>
            </div>
          </div>
          <div className="bg-white w-80 p-4 rounded-lg shadow-sm hover:shadow-xl ease-in duration-150">
            <img
              className="w-72 m-auto h-72 object-cover mb-6 rounded-lg "
              src="assets/mathbattle.png"
              alt="Mathbattle Screenshot"
            />
            <h1 className="text-center mb-3 font-bold">Math Battle</h1>
            <p className="mb-3">
              2D Tower Defense web game designed to teach basic arithmetic.
            </p>
            <div className=" flex gap-1 flex-wrap ">
              <p className="inline-block px-2 py-1 bg-navy text-white ">
                {" "}
                Javascript
              </p>
            </div>
          </div>
          <div className="bg-white w-80 p-4 rounded-lg shadow-sm hover:shadow-xl ease-in duration-150">
            <img
              className="w-72 m-auto h-72 object-cover rounded-lg mb-6"
              src="public/assets/restaurantScreenshot.png"
              alt="screenshot of restaurant template website"
            />
            <h1 className="text-center mb-3 font-bold">Restaurant Website</h1>
            <p className="mb-3">
              Custom made website template designed for restaurant.
            </p>
            <div className=" flex gap-1 flex-wrap ">
              <p className="inline-block px-2 py-1  bg-navy text-white ">
                React
              </p>
              <p className="inline-block px-2 py-1 bg-navy text-white ">
                {" "}
                Javascript
              </p>
            </div>
          </div>
        </div>
      );
    } else if (category === fields.Game) {
      return <div></div>;
    }
  };

  return (
    <div id="projects" className="pb-24 px-5 m-auto max-w-[1200px] ">
      <p className="text-center text-3xl font-bold mb-10 tracking-wider ">
        Projects
      </p>
      <div data-aos="fade-up">
        {/* <div className="flex gap-8 justify-center mb-10">
          <button
            onClick={() => toggleCategory(fields.Web)}
            className={`${
              category === fields.Web
                ? "scale-110 bg-navy text-white  ring-navy ring-4 ring-offset-1"
                : ""
            } ease-in duration-150    py-2 px-4 rounded-lg border border-slate-500`}
          >
            Web Dev
          </button>
          <button
            onClick={() => toggleCategory(fields.Game)}
            className={`${
              category === fields.Game
                ? "scale-110 bg-navy text-white ring-navy ring-4 ring-offset-1"
                : ""
            } ease-in duration-150  py-2 px-4 rounded-lg border border-slate-500 `}
          >
            Unity
          </button>
        </div> */}
        {showProjects()}
      </div>
    </div>
  );
};

export default Projects;
