import React from "react";
import { Link } from "react-router-dom";
import ProjectPreview from "../components/ProjectPreview";

const Hero = () => {
  return (
    <div className="landing-container flex flex-col lg:flex-row gap-5 lg:gap-10 h-full">
      <ProjectPreview
        number="[01]"
        title="PLICOGA"
        subtitle="UX/UI Design + Front-End Development"
        page="/plicoga"
        image="/landing/plicoga.png"
        alt="plicoga preview image"
      ></ProjectPreview>

      <ProjectPreview
        number="[02]"
        title="KEY"
        subtitle="UX/UI Design"
        page="/key"
        image="/landing/key.png"
        alt="key preview image"
      ></ProjectPreview>
    </div>
  );
};

export default Hero;
