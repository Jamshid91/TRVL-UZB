import React from "react";
import "../App.css";
import { Cards } from "../components_JS/Cards";
import { Footer } from "../components_JS/Footer";
import { HeroSection } from "../components_JS/HeroSection";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
};
