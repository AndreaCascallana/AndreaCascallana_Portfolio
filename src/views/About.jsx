import React from "react";

const About = () => {
  return (
    <div className="about py-10 flex flex-col justify-center gap-8 h-full">
      <div className="bio flex">
        <div className="left-wrapper font-semibold pr-8">[01]</div>
        <div className="right-wrapper">
          <div className="title uppercase font-semibold pb-4">bio</div>
          <div className="content flex flex-col gap-1">
            <p>Andrea Cascallana Rodriguez.</p>
            <p>Residiendo en Madrid, España.</p>
            <p className="max-w-prose">
              Junior UX/UI Designer y Front-End Developer con experiencia{" "}
              <br></br> trabajando en pequeñas empresas y reconocidas
              multinacionales.
            </p>
          </div>
        </div>
      </div>
      <div className="contact flex">
        <div className="left-wrapper font-semibold pr-8">[02]</div>
        <div className="right-wrapper">
          <div className="title uppercase font-semibold pb-4">contacto</div>
          <div className="content">
            <a
              className="border-b-[1px] border-b-slate-950"
              href="mailto:andreacascallanarodriguez@gmail.com?subject=¡Hola%20Andrea!"
              target="_blank"
            >
              andreacascallanarodriguez@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
