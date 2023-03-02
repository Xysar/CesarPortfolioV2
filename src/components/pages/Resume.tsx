import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Resume = () => {
  const element = () => {
    return (
      <Link
        className="box-border px-5 py-[10px] rounded-xl text-white bg-slate-800 hover:bg-opacity-0 ease-in duration-150 hover:border-slate-800 hover:text-slate-800 hover:border"
        to="/"
      >
        Portfolio
      </Link>
    );
  };

  return (
    <div>
      <Navbar portfolio={element} />

      <iframe
        src="assets/Resume.pdf"
        className="m-auto"
        width="800"
        height={1000}
      ></iframe>
      <Footer />
    </div>
  );
};

export default Resume;
