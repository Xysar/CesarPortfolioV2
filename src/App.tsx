import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume";

function App() {
  return (
    <div className="App bg-slate-200 bg-opacity-50 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
