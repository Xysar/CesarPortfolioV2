import React from "react";

const Background = () => {
  return (
    <section className="mb-24">
      <div className="flex justify-center  bg-[#0b2036] px-12 pt-24 pb-72 text-white">
        <div data-aos="fade-up" className="md:w-[900px]">
          <h3 className="mb-6 text-center text-3xl ">About Me</h3>
          <p className="text-center text-lg">
            {" "}
            I am a front end developer hoping to create projects that help and
            entertain. I have always been an avid puzzle solver and great
            problem solver, so programming has always been the perfect outlet
            for me. I hope you enjoy browsing my projects and feel free to
            contact me and connect!
          </p>
        </div>
      </div>
      <div className="m-auto max-w-[1200px] px-2">
        <div className="-mt-40 rounded-2xl bg-slate-200 px-3 py-12 shadow-md md:px-12">
          <h3 className="mb-12 text-center text-3xl">Skills and Experience</h3>
          <div className="grid gap-12  md:grid-cols-2">
            <div
              data-aos="fade-right"
              className="mb-12 grid grid-cols-2 justify-center gap-y-16 lg:grid-cols-4 "
            >
              {/* List of Frameworks start here */}
              <div className="flex flex-col items-center duration-150 ease-in hover:scale-105">
                <div className="mb-1 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
                  <img className="h-12" src="assets/React-icon.svg" alt="" />
                </div>
                <p className="text-center">React JS</p>
              </div>
              <div className="flex flex-col items-center duration-150 ease-in hover:scale-105">
                <div className="mb-1 flex h-24 w-24 items-center justify-center rounded-full bg-slate-200">
                  <img className="h-24 " src="assets/nextjs-logo.svg" alt="" />
                </div>
                <p className="text-center">Next JS</p>
              </div>
              <div className="flex flex-col items-center duration-150 ease-in hover:scale-105">
                <div className="mb-1 flex h-24 w-24 items-center justify-center rounded-full bg-red-200">
                  <img className=" h-16" src="assets/astro-logo.png" alt="" />
                </div>
                <p className="text-center">Astro</p>
              </div>
              <div className="flex flex-col items-center duration-150 ease-in hover:scale-105">
                <div className="mb-1 flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
                  <img className="h-12" src="assets/sanitylogo.png" alt="" />
                </div>
                <p className="text-center">Sanity</p>
              </div>
              <div className=" flex flex-col items-center duration-150 ease-in hover:scale-105">
                <div className="mb-1 flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
                  <img className="h-14" src=" assets/java-icon.svg" alt="" />
                </div>
                <p className="text-center">Java</p>
              </div>
              <div className=" flex flex-col items-center duration-150 ease-in hover:scale-105">
                <div className="mb-1 flex h-24 w-24  items-center justify-center rounded-full bg-yellow-100">
                  <img
                    className="h-10 w-10"
                    src="assets/javascript-icon.svg"
                    alt=""
                  />
                </div>
                <p className=" text-center">JavaScript</p>
              </div>
              <div className=" flex flex-col items-center duration-150 ease-in hover:scale-105">
                <div className="mb-1 flex h-24 w-24  items-center justify-center rounded-full bg-blue-200">
                  <img
                    className="w-10 "
                    src="assets/typescript-programming-language-icon.svg"
                    alt=""
                  />
                </div>
                <p className=" text-center">TypeScript</p>
              </div>
              <div className=" flex flex-col items-center duration-150 ease-in hover:scale-105">
                <div className="mb-1 flex h-24 w-24  items-center justify-center rounded-full bg-orange-100">
                  <img className="w-10" src="assets/html-icon.svg" alt="" />
                </div>
                <p className="text-center">HTML5</p>
              </div>
              <div className=" flex flex-col items-center duration-150 ease-in hover:scale-105">
                <div className="mb-1 flex h-24 w-24  items-center justify-center rounded-full bg-green-100">
                  <img className="w-12" src="assets/node-js-icon.svg" alt="" />
                </div>
                <p className="text-center">Node JS</p>
              </div>
              <div className=" flex flex-col items-center duration-150 ease-in hover:scale-105">
                <div className="mb-1 flex h-24 w-24 items-center justify-center rounded-full bg-sky-200">
                  <img className="w-11" src="assets/css-icon.svg" alt="" />
                </div>
                <p className="text-center">CSS3</p>
              </div>
              <div className=" flex flex-col items-center duration-150 ease-in hover:scale-105">
                <div className="mb-1 flex h-24 w-24 items-center justify-center rounded-full bg-cyan-100">
                  <img
                    className="w-14"
                    src="assets/tailwind-css-icon.svg"
                    alt=""
                  />
                </div>
                <p className="text-center">Tailwind.css</p>
              </div>
              <div className=" flex flex-col items-center duration-150 ease-in hover:scale-105">
                <div className="mb-1 flex h-24 w-24  items-center justify-center rounded-full bg-green-100">
                  <img
                    className="w-12"
                    src="assets/spring-original.svg"
                    alt=""
                  />
                </div>
                <p className="text-center">Spring Boot</p>
              </div>
              <div className=" flex flex-col items-center duration-150 ease-in hover:scale-105">
                <div className="mb-1 flex h-24 w-24  items-center justify-center rounded-full bg-slate-100">
                  <img className="h-12" src="assets/unity-logo.svg" alt="" />
                </div>
                <p className="text-center">Unity</p>
              </div>
              <div className=" flex flex-col items-center duration-150 ease-in hover:scale-105">
                <div className="mb-1 flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
                  <img className="w-12" src="assets/git-icon.svg" alt="" />
                </div>
                <p className="text-center">Git</p>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="mb-6 flex gap-10">
                <p className="font-bold leading-8 text-blue-900 ">2023</p>{" "}
                <p className=" text-lg leading-8">
                  Freelance Web Developer
                  <br />
                  <span className=" text-[1.08rem] text-gray-600">
                    Self-Employed
                  </span>
                </p>
              </div>
              <div className="mb-6 flex gap-10">
                <p className="font-bold leading-8 text-blue-900 ">2022</p>{" "}
                <p className=" text-lg leading-8">
                  Computer Science Research Assistant
                  <br />
                  <span className=" text-[1.08rem] text-gray-600">
                    Vassar College
                  </span>
                </p>
              </div>
              <div className="mb-6 flex gap-10 ">
                <p className="font-bold leading-8 text-blue-900 ">2021</p>{" "}
                <p className="text-lg leading-8 ">
                  Computer Science Coach
                  <br />
                  <span className="text-[1.08rem] text-gray-600">
                    Vassar College
                  </span>
                </p>
              </div>
              <div className="my-12">
                <p className="mb-4 text-lg font-bold text-blue-900">
                  Education
                </p>
                <p className="text-lg">
                  <span className="text-lg font-bold">Vassar College</span>
                  <br />
                  <span className="text-slate-600">
                    Poughkeepsie, New York
                    <br /> B.A. Computer Science and Psychology
                    <br /> GPA: 3.66
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
