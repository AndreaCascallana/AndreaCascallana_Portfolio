import React from "react";

const About = () => {
  return (
    <div className="about px-8 lg:px-0 py-8 flex flex-col justify-center gap-12 h-full">
      <div className="bio flex">
        <div className="left-wrapper font-semibold pr-8">[01]</div>
        <div className="right-wrapper">
          <div className="title uppercase font-semibold pb-4">bio</div>
          <div className="content flex flex-col gap-1">
            <p>Andrea Cascallana Rodriguez.</p>
            <p>Residiendo en Madrid, España.</p>
            <p className="max-w-prose">
              Junior UX/UI Designer y Front-End Developer.
            </p>
          </div>
        </div>
      </div>
      <div className="contact flex">
        <div className="left-wrapper font-semibold pr-8">[02]</div>
        <div className="right-wrapper">
          <div className="title uppercase font-semibold pb-4">contacto</div>
          <div className="content flex flex-col gap-2">
            <a
              className="hidden lg:block xl:block 2xl:block border-b-[1px] border-b-slate-950"
              href="mailto:andreacascallanarodriguez@gmail.com?subject=¡Hola%20Andrea!"
              target="_blank"
            >
              andreacascallanarodriguez@gmail.com
            </a>
            <a
              className="lg:hidden xl:hidden 2xl:hidden border-b-[1px] border-b-slate-950"
              href="mailto:andreacascallanarodriguez@gmail.com?subject=¡Hola%20Andrea!"
              target="_blank"
            >
              Email
            </a>
            <a
              className="lg:hidden xl:hidden 2xl:hidden border-b-[1px] border-b-slate-950"
              href="https://www.linkedin.com/in/andrea-cascallana-rodr%C3%ADguez-b35803249/"
              target="_blank"
            >
              Linkedin
            </a>
            <a
              className="lg:hidden xl:hidden 2xl:hidden border-b-[1px] border-b-slate-950"
              href="https://github.com/AndreaCascallana"
              target="_blank"
            >
              Github
            </a>
            <a
              className="lg:hidden xl:hidden 2xl:hidden border-b-[1px] border-b-slate-950"
              href="https://www.behance.net/andreacascallana"
              target="_blank"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
