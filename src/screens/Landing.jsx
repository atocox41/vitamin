import React from "react";
// Sections
import Header from "../components/Sections/Header";
import Partnering from "../components/Sections/Partnering";
import Projects from "../components/Sections/Projects";
import Pricing from "../components/Sections/Pricing";

export default function Landing() {
  return (
    <>
      <Header />
      <Partnering />
      <Projects />
      <Pricing />
    </>
  );
}


