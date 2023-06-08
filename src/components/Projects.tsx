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
          <div className="w-80  rounded-lg bg-white p-4 shadow-sm duration-150 ease-in hover:shadow-xl">
            <div className="relative mb-6 overflow-hidden rounded-lg ">
              <img
                className="m-auto h-72 w-72 object-cover  "
                src="assets/music-inbox.png"
                alt="screenshot of pathfinder project"
              />
              <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-2 bg-slate-900 opacity-0 duration-100 ease-in hover:opacity-90 ">
                <div className="">
                  <a
                    href="https://github.com/Xysar/music-inbox-nextjs"
                    target="_blank"
                    className="inline-block rounded-full border-2 border-yellow-400 py-2 px-3 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="">
                  <a
                    href="https://music-inbox-nextjs-tsiq.vercel.app/"
                    target="_blank"
                    className="inline-block rounded-full border-2 border-yellow-400 py-2 px-3 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    Open Project
                  </a>
                </div>
              </div>
            </div>
            <h1 className="mb-3  text-center font-bold">Music Inbox</h1>
            <p className="mb-3  ">
              Music review website that uses Lastfm's API to allow you to review
              your favorite albums.
            </p>
            <div className=" flex flex-wrap gap-1 ">
              <p className="inline-block bg-navy px-2  py-1 text-white ">
                Next.js
              </p>
              <p className="inline-block bg-navy px-2  py-1 text-white ">
                React
              </p>
              <p className="inline-block bg-navy px-2 py-1 text-white ">
                {" "}
                Javascript
              </p>
            </div>
          </div>
          <div className="w-80  rounded-lg bg-white p-4 shadow-sm duration-150 ease-in hover:shadow-xl">
            <div className="relative mb-6 overflow-hidden rounded-lg ">
              <img
                className="m-auto h-72 w-72 object-cover  "
                src="assets/pathfinderscreenshot.png"
                alt="screenshot of pathfinder project"
              />
              <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-2 bg-slate-900 opacity-0 duration-100 ease-in hover:opacity-90 ">
                <div className="">
                  <a
                    href="https://github.com/Xysar/pathfinder-react"
                    target="_blank"
                    className="inline-block rounded-full border-2 border-yellow-400 py-2 px-3 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="">
                  <a
                    href="https://xysar.github.io/pathfinder-react/"
                    target="_blank"
                    className="inline-block rounded-full border-2 border-yellow-400 py-2 px-3 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    Open Project
                  </a>
                </div>
              </div>
            </div>
            <h1 className="mb-3  text-center font-bold">Pathfinder</h1>
            <p className="mb-3  ">
              Pathfinder visualizer that displays pathfinding algorithms such as
              A*, Dijsktra's.
            </p>
            <div className=" flex flex-wrap gap-1 ">
              <p className="inline-block bg-navy px-2  py-1 text-white ">
                React
              </p>
              <p className="inline-block bg-navy px-2 py-1 text-white ">
                {" "}
                Javascript
              </p>
            </div>
          </div>
          <div className="w-80 rounded-lg bg-white p-4 shadow-sm duration-150 ease-in hover:shadow-xl">
            <div className="relative mb-6 overflow-hidden rounded-lg ">
              <img
                className="m-auto h-72 w-72 rounded-lg object-cover "
                src="assets/mathbattle.png"
                alt="Mathbattle Screenshot"
              />
              <div className=" absolute top-0 flex h-full w-full flex-col items-center justify-center gap-2 bg-slate-900 opacity-0 duration-100 ease-in hover:opacity-90 ">
                <div className="">
                  <a
                    href="https://github.com/Xysar/MathBattle"
                    target="_blank"
                    className="inline-block rounded-full border-2 border-yellow-400 py-2 px-3 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="">
                  <a
                    href="https://xysar.github.io/MathBattle/"
                    target="_blank"
                    className="inline-block rounded-full border-2 border-yellow-400 py-2 px-3 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    Open Project
                  </a>
                </div>
              </div>
            </div>
            <h1 className="mb-3 text-center font-bold">Math Battle</h1>
            <p className="mb-3">
              2D Tower Defense web game designed to teach basic arithmetic.
            </p>
            <div className=" flex flex-wrap gap-1 ">
              <p className="inline-block bg-navy px-2 py-1 text-white ">
                {" "}
                Javascript
              </p>
            </div>
          </div>
          <div className="w-80 rounded-lg bg-white p-4 shadow-sm duration-150 ease-in hover:shadow-xl">
            <div className="relative mb-6 overflow-hidden rounded-lg ">
              <img
                className="m-auto h-72 w-72 rounded-lg object-cover "
                src="assets/restaurantScreenshot.png"
                alt="screenshot of restaurant template website"
              />
              <div className="absolute top-0 flex  h-full w-full flex-col items-center justify-center gap-2 bg-slate-900 opacity-0 duration-100 ease-in hover:opacity-90 ">
                <div className="">
                  <a
                    href="https://github.com/Xysar/restaurant-template"
                    target="_blank"
                    className="inline-block rounded-full border-2 border-yellow-400 py-2 px-3 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    Github Repo
                  </a>
                </div>
                <div className="">
                  <a
                    href="https://restaurant-template-o1465utyi-xysar.vercel.app/"
                    target="_blank"
                    className="inline-block rounded-full border-2 border-yellow-400 py-2 px-3 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    Open Project
                  </a>
                </div>
              </div>
            </div>
            <h1 className="mb-3 text-center font-bold">Restaurant Website</h1>
            <p className="mb-3">
              Custom made website template designed for restaurant.
            </p>
            <div className=" flex flex-wrap gap-1 ">
              <p className="inline-block bg-navy px-2  py-1 text-white ">
                React
              </p>
              <p className="inline-block bg-navy px-2 py-1 text-white ">
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
    <div id="projects" className="m-auto max-w-[1200px] px-5 pb-24 ">
      <p className="mb-10 text-center text-3xl font-bold tracking-wider ">
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
