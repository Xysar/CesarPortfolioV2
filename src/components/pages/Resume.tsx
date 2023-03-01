import React from "react";
import Navbar from "../Navbar";

const Resume = () => {
  return (
    <div>
      <Navbar />

      <iframe
        src="assets/Resume.pdf"
        className="m-auto"
        width="800"
        height={1000}
      ></iframe>
    </div>
  );
};

export default Resume;
