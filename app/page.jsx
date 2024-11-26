import React from "react";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import { Services } from "./components/Services";
import SolidSeperator from "./components/utils/SolidSeperator";
import Portfolio from "./components/Portfolio";
import LandingAbout from "./components/LandingAbout";
import LandingClients from "./components/LandingClients";
import Contact from "./components/Contact";
import TopScroll from "./components/TopScroll";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <SolidSeperator height={"50vh"} />
      <WhyUs />
      <SolidSeperator height={"50vh"} />
      <Portfolio />
      <SolidSeperator height={"50vh"} />
      <LandingAbout />
      <SolidSeperator height={"50vh"} />
      <LandingClients />
      <SolidSeperator height={"50vh"} />
      <Contact />
      <TopScroll />
    </>
  );
};

export default Home;
