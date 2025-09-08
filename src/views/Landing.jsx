import React from "react";
import { Link } from "react-router-dom";
import ProjectPreview from "../components/ProjectPreview";

const Hero = () => {
  return (
    <div className="landing-container flex flex-col gap-10 pb-24 lg:flex-row lg:flex-wrap">
      <ProjectPreview
        title="PLICOGA"
        subtitle="UX/UI Design + Front-End Development"
        page="/plicoga"
        image="/landing/plicoga.png"
        alt="plicoga preview image"
      ></ProjectPreview>

      <ProjectPreview
        title="KEY"
        subtitle="UX/UI Design"
        page="/key"
        image="/landing/key.png"
        alt="key preview image"
      ></ProjectPreview>

      {/* <ProjectPreview
        title="CONNECTO"
        subtitle="UX/UI Design"
        page="/*"
        image="/landing/key.png"
        alt="connecto preview image"
      ></ProjectPreview> */}
    </div>
  );
};

export default Hero;
