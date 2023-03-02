import React from "react";

const Background = () => {
  return (
    <section className="mb-24">
      <div className="pt-24 pb-72  px-12 text-white bg-[#0b2036] flex justify-center">
        <div data-aos="fade-up" className="md:w-[900px]">
          <h3 className="text-center text-3xl mb-6 ">About Me</h3>
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
        <div className="bg-slate-200 -mt-40 px-3 py-12 md:px-12 rounded-2xl shadow-md">
          <h3 className="text-3xl text-center mb-12">Skills and Experience</h3>
          <div className="grid md:grid-cols-2  gap-12">
            <div
              data-aos="fade-right"
              className="grid gap-y-16 lg:grid-cols-4 grid-cols-2 justify-center mb-12 "
            >
              {/* List of Frameworks start here */}
              <div className="flex flex-col items-center hover:scale-105 ease-in duration-150">
                <div className="w-24 h-24 mb-1 bg-blue-100 rounded-full flex justify-center items-center">
                  <img className="h-12" src="assets/React-icon.svg" alt="" />
                </div>
                <p className="text-center">React JS</p>
              </div>
              <div className=" flex flex-col items-center hover:scale-105 ease-in duration-150">
                <div className="w-24 h-24 mb-1 rounded-full bg-red-100 flex justify-center items-center">
                  <img className="h-14" src=" assets/java-icon.svg" alt="" />
                </div>
                <p className="text-center">Java</p>
              </div>
              <div className=" flex flex-col items-center hover:scale-105 ease-in duration-150">
                <div className="w-24 h-24 mb-1 bg-yellow-100  rounded-full flex justify-center items-center">
                  <img
                    className="w-10 h-10"
                    src="assets/javascript-icon.svg"
                    alt=""
                  />
                </div>
                <p className=" text-center">JavaScript</p>
              </div>
              <div className=" flex flex-col items-center hover:scale-105 ease-in duration-150">
                <div className="w-24 h-24 mb-1 bg-blue-200  rounded-full flex justify-center items-center">
                  <img
                    className="w-10 "
                    src="assets/typescript-programming-language-icon.svg"
                    alt=""
                  />
                </div>
                <p className=" text-center">TypeScript</p>
              </div>
              <div className=" flex flex-col items-center hover:scale-105 ease-in duration-150">
                <div className="w-24 h-24 mb-1 bg-orange-100  rounded-full flex justify-center items-center">
                  <img className="w-10" src="assets/html-icon.svg" alt="" />
                </div>
                <p className="text-center">HTML5</p>
              </div>
              <div className=" flex flex-col items-center hover:scale-105 ease-in duration-150">
                <div className="w-24 h-24 mb-1 bg-green-100  rounded-full flex justify-center items-center">
                  <img className="w-12" src="assets/node-js-icon.svg" alt="" />
                </div>
                <p className="text-center">Node JS</p>
              </div>
              <div className=" flex flex-col items-center hover:scale-105 ease-in duration-150">
                <div className="w-24 h-24 mb-1 bg-sky-200 rounded-full flex justify-center items-center">
                  <img className="w-11" src="assets/css-icon.svg" alt="" />
                </div>
                <p className="text-center">CSS3</p>
              </div>
              <div className=" flex flex-col items-center hover:scale-105 ease-in duration-150">
                <div className="w-24 h-24 mb-1 bg-cyan-100 rounded-full flex justify-center items-center">
                  <img
                    className="w-14"
                    src="assets/tailwind-css-icon.svg"
                    alt=""
                  />
                </div>
                <p className="text-center">Tailwind.css</p>
              </div>
              <div className=" flex flex-col items-center hover:scale-105 ease-in duration-150">
                <div className="w-24 h-24 mb-1 bg-green-100  rounded-full flex justify-center items-center">
                  <img
                    className="w-12"
                    src="assets/spring-original.svg"
                    alt=""
                  />
                </div>
                <p className="text-center">Spring Boot</p>
              </div>
              <div className=" flex flex-col items-center hover:scale-105 ease-in duration-150">
                <div className="w-24 h-24 mb-1 bg-slate-100  rounded-full flex justify-center items-center">
                  <img className="h-12" src="assets/unity-logo.svg" alt="" />
                </div>
                <p className="text-center">Unity</p>
              </div>
              <div className=" flex flex-col items-center hover:scale-105 ease-in duration-150">
                <div className="w-24 h-24 mb-1 bg-red-100 rounded-full flex justify-center items-center">
                  <img className="w-12" src="assets/git-icon.svg" alt="" />
                </div>
                <p className="text-center">Git</p>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="flex gap-10 mb-6">
                <p className="text-blue-900 font-bold leading-8 ">2022</p>{" "}
                <p className=" text-lg leading-8">
                  Computer Science Research Assistant
                  <br />
                  <span className=" text-[1.08rem] text-gray-600">
                    Vassar College
                  </span>
                </p>
              </div>
              <div className="flex gap-10 mb-6 ">
                <p className="text-blue-900 font-bold leading-8 ">2021</p>{" "}
                <p className="text-lg leading-8 ">
                  Computer Science Coach
                  <br />
                  <span className="text-[1.08rem] text-gray-600">
                    Vassar College
                  </span>
                </p>
              </div>
              <div className="my-12">
                <p className="text-blue-900 mb-4 font-bold text-lg">
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
