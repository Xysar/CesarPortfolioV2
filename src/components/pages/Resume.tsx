import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Resume = () => {
  const element = () => {
    return (
      <Link
        className="box-border rounded-xl bg-slate-800 px-5 py-[10px] text-white duration-150 ease-in hover:border hover:border-slate-800 hover:bg-opacity-0 hover:text-slate-800"
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
