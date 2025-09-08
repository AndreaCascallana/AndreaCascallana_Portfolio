import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="menu fixed top-0 right-0 left-0 px-8 lg:px-0 bg-slate-50 animate__animated animate__fadeInDown z-40 border border-b-slate-950">
      <div className="container m-auto flex flex-row justify-between items-center lg:w-10/12 pt-4 pb-2 lg:pt-6 lg:pb-3 lg:px-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "cursor-hover uppercase hidden lg:block font-semibold transition-all duration-150 ease-out hover:text-slate-600 hover:border-slate-600"
              : "cursor-hover uppercase hidden lg:block font-normal transition-all duration-150 ease-out hover:text-slate-600 hover:border-slate-600"
          }
          to="/"
        >
          ANDREA CASCALLANA
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "cursor-hover uppercase lg:hidden font-semibold transition-all duration-150 ease-out hover:text-slate-600 hover:border-slate-600"
              : "cursor-hover uppercase lg:hidden font-normal transition-all duration-150 ease-out hover:text-slate-600 hover:border-slate-600"
          }
          to="/"
        >
          A
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "cursor-hover uppercase font-semibold transition-all duration-150 ease-out hover:text-slate-600 hover:border-slate-600"
              : "cursor-hover uppercase font-normal transition-all duration-150 ease-out hover:text-slate-600 hover:border-slate-600"
          }
          to="/about"
        >
          Sobre mí
        </NavLink>
        <a
          className="cursor-hover uppercase hidden lg:block py-2 px-4 bg-slate-950 text-slate-50 border border-slate-950 rounded-full transition-colors duration-300 ease-in-out hover:text-slate-950 hover:border-slate-950 hover:bg-slate-50"
          href="/landing/AndreaCascallana_CV.pdf"
          download="AndreaCascallana_CV"
        >
          Descarga mi CV
        </a>
        <a
          className="cursor-hover uppercase lg:hidden py-2 px-4 border bg-slate-950 text-slate-50 rounded-full"
          href="/landing/AndreaCascallana_CV.pdf"
          download="AndreaCascallana_CV.pdf"
        >
          CV
        </a>
      </div>
    </div>
  );
};

export default Header;
