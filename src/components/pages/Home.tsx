import React from "react";
import Hero from "../Hero";
import Background from "../Background";
import Projects from "../Projects";
import ContactMe from "../ContactMe";

const Home = () => {
  return (
    <div>
      {" "}
      <Hero />
      <Background />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default Home;
