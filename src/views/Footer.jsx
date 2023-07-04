import React from "react";
import Linkedin from "/linkedin.svg";
import Github from "/github.svg";

const Footer = () => {
  return (
    <div className="py-12 lg:py-16 flex justify-between">
      <p className="text-sm font-light hidden lg:block">
        Diseñado y desarrollado por{" "}
        <span className="font-medium">Andrea Cascallana</span>
      </p>
      <div className="links flex flex-col lg:flex-row gap-3 items-center">
        <p className="text-sm font-light">Sígueme en</p>
        <div className="links flex items-center gap-3">
          <a
            className="linkedin w-8 h-8 bg-slate-950 rounded-full hover:bg-[#0a66c2] transition-colors duration-150 ease-in-out"
            href="https://www.linkedin.com/in/andrea-cascallana-rodr%C3%ADguez-b35803249/"
            style={{
              backgroundImage: `url(${Linkedin})`,
              backgroundPositionX: "50%",
              backgroundPositionY: "50%",
              backgroundSize: "16px",
              backgroundRepeat: "no-repeat",
            }}
          ></a>
          <a
            className="github w-8 h-8 bg-slate-950 rounded-full hover:bg-[#1F2328] transition-colors duration-150 ease-in-out"
            href="https://github.com/AndreaCascallana"
            style={{
              backgroundImage: `url(${Github})`,
              backgroundPositionX: "50%",
              backgroundPositionY: "50%",
              backgroundSize: "20px",
              backgroundRepeat: "no-repeat",
            }}
          ></a>
        </div>
      </div>
      <p className="text-sm font-light w-[125px] text-end hidden lg:block">
        2023
      </p>
    </div>
  );
};

export default Footer;
