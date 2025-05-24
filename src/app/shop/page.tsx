import React from "react";
import Hero from "../../components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import VerticalPromo from "./components/verticalPromo"

export default function Shop() {
  return (
    <>
      {/* <Hero /> */}
      <Hero />
      <CategoryGrid />
      <VerticalPromo />
      {/* Add other home-specific sections here */}
    </>
  );
}
