import React from "react";
import { Link } from "react-router-dom";

const ProjectPreview = (props) => {
  return (
    <div className="proyect lg:flex h-full lg:w-1/2 overflow-hidden">
      <div className="left-wrapper flex pb-2 lg:pb-0 mr-8 min-w-fit animate__animated animate__fadeIn">
        <h3 className="font-semibold">{props.number}</h3>
        <h3 className="font-semibold block lg:hidden pl-4 lg:pl-0">
          {props.title}
        </h3>
      </div>
      <div className="right-wrapper flex flex-col gap-4">
        <div className="title flex flex-col gap-1 animate__animated animate__fadeIn">
          <h3 className="title hidden lg:block uppercase font-semibold">
            {props.title}
          </h3>
          <h4 className="subtitle hidden lg:block">{props.subtitle}</h4>
        </div>
        <div className="image rounded-md h-full overflow-hidden animate__animated animate__fadeIn">
          <Link to={props.page}>
            <img
              className="project-preview w-full h-full object-cover rounded-md transition ease-in-out duration-300 hover:scale-105"
              src={props.image}
              alt={props.alt}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
