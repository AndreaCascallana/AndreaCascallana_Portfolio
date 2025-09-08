import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="menu fixed top-0 right-0 left-0 lg:px-0 bg-slate-50 animate__animated animate__fadeInDown z-40">
      <div className="container flex flex-row justify-between items-center m-auto lg:w-10/12 pt-4 pb-4 px-8 lg:px-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "cursor-hover uppercase hidden lg:block border-b-[1px] border-b-slate-950 transition-all duration-150 ease-out hover:text-slate-600 hover:border-slate-600"
              : "cursor-hover uppercase hidden lg:block border-0 transition-all duration-150 ease-out hover:text-slate-600 hover:border-slate-600"
          }
          to="/"
        >
          ANDREA CASCALLANA
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "cursor-hover uppercase lg:hidden border-b-[1px] border-b-slate-950 transition-all duration-150 ease-out hover:text-slate-600 hover:border-slate-600"
              : "cursor-hover uppercase lg:hidden border-0 transition-all duration-150 ease-out hover:text-slate-600 hover:border-slate-600"
          }
          to="/"
        >
          A
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "cursor-hover uppercase border-b-[1px] border-b-slate-950 transition-all duration-150 ease-out hover:text-slate-600 hover:border-slate-600"
              : "cursor-hover uppercase border-0 transition-all duration-150 ease-out hover:text-slate-600 hover:border-slate-600"
          }
          to="/about"
        >
          Sobre mí
        </NavLink>
        <a
          className="cursor-hover uppercase hidden lg:block py-2 px-4 border border-slate-950 rounded-full transition-colors duration-300 ease-in-out hover:text-slate-700 hover:border-slate-600 hover:bg-slate-200"
          href="AndreaCascallana_CV.pdf"
          download="AndreaCascallana_CV"
        >
          Descarga mi CV
        </a>
        <a
          className="cursor-hover uppercase lg:hidden py-2 px-4 border border-slate-950 rounded-full"
          href="AndreaCascallana_CV.pdf"
          download="AndreaCascallana_CV"
        >
          CV
        </a>
      </div>
    </div>
  );
};

export default Header;
