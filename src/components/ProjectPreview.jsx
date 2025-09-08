import React from "react";
import { Link } from "react-router-dom";

const ProjectPreview = (props) => {
  return (
    <div className="proyect flex flex-col gap-4 lg:w-[48.3%]">
      <div className="image lg:h-[88%] rounded-md overflow-hidden animate__animated animate__fadeIn">
        <Link to={props.page}>
          <img
            className="project-preview w-full h-full object-cover rounded-md transition ease-in-out duration-300 hover:scale-105"
            src={props.image}
            alt={props.alt}
          />
        </Link>
      </div>
      <Link to={props.page} className="w-full">
        <div className="project-info flex justify-between items-center lg:justify-start lg:gap-1">
          <h2 className="title uppercase font-semibold text-normal lg:text-xl hover:text-slate-700">{props.title}</h2>
          <div className="icon">
            <img className="h-7" src="/landing/arrow-icon.svg" alt="arrow icon" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectPreview;
