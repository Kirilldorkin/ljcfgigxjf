import React from "react";

import FeaturesBig from "components/FeatureImages";
import FeaturesGrid from "components/FeatureGrid";
import Hero from "components/Hero";
import { TextField } from "@mui/material";

function Home() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <FeaturesBig />
    </>
  );
}

export default Home;
