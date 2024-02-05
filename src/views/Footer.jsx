import React from "react";
import Linkedin from "/linkedin.svg";
import Github from "/github.svg";
import Behance from "/behance.svg";

const Footer = () => {
  return (
    <div className="flex justify-between items-center fixed bottom-0 right-0 left-0 m-auto lg:w-10/12 pb-8">
      <p className="text-sm hidden lg:block">
        Diseñado y desarrollado por Andrea Cascallana
      </p>
      <div className="links hidden lg:flex gap-3 items-center justify-center lg:w-[312px]">
        <div className="links flex items-center gap-3">
          <a
            className="linkedin w-8 h-8 bg-slate-950 rounded-full hover:bg-[#0a66c2] transition-colors duration-150 ease-in-out"
            href="https://www.linkedin.com/in/andrea-cascallana-rodr%C3%ADguez-b35803249/"
            target="_blank"
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
            target="_blank"
            style={{
              backgroundImage: `url(${Github})`,
              backgroundPositionX: "50%",
              backgroundPositionY: "50%",
              backgroundSize: "20px",
              backgroundRepeat: "no-repeat",
            }}
          ></a>
          <a
            className="github w-8 h-8 bg-slate-950 rounded-full hover:bg-[#0057ff] transition-colors duration-150 ease-in-out"
            href="https://www.behance.net/andreacascallana"
            target="_blank"
            style={{
              backgroundImage: `url(${Behance})`,
              backgroundPositionX: "50%",
              backgroundPositionY: "50%",
              backgroundSize: "20px",
              backgroundRepeat: "no-repeat",
            }}
          ></a>
        </div>
      </div>
      <p className="text-sm text-center lg:text-end w-full lg:w-[312px]">
        Última actualización 2024
      </p>
    </div>
  );
};

export default Footer;
