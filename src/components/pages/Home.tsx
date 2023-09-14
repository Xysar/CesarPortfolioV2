import React, { useEffect } from "react";
import Hero from "../Hero";
import Background from "../Background";
import Projects from "../Projects";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 500 });
  }, []);

  return (
    <div>
      <Hero />
      <Background />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
