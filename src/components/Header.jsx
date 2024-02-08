import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="menu flex flex-row justify-between items-center fixed top-0 right-0 left-0 m-auto lg:w-10/12 pt-8 pb-4 px-8 lg:px-0">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "cursor-pointer uppercase hidden lg:block border-b-[1px] border-b-slate-950 transition-all duration-150 ease-out"
            : "cursor-pointer uppercase hidden lg:block border-0 transition-all duration-150 ease-out"
        }
        to="/"
      >
        ANDREA CASCALLANA
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "cursor-pointer uppercase lg:hidden border-b-[1px] border-b-slate-950 transition-all duration-150 ease-out"
            : "cursor-pointer uppercase lg:hidden border-0 transition-all duration-150 ease-out"
        }
        to="/"
      >
        A
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "cursor-pointer uppercase border-b-[1px] border-b-slate-950 transition-all duration-150 ease-out"
            : "cursor-pointer uppercase border-0 transition-all duration-150 ease-out"
        }
        to="/about"
      >
        Sobre mí
      </NavLink>
      <a
        className="uppercase hidden lg:block border-b-slate-950 transition-all duration-150 ease-out"
        href="Andrea-Cascallana_CV.pdf"
        download="AndreaCascallana_CV"
      >
        Descarga mi CV
      </a>
      <a
        className="uppercase lg:hidden border-b-slate-950 transition-all duration-150 ease-out"
        href="Andrea-Cascallana_CV.pdf"
        download="AndreaCascallana_CV"
      >
        CV
      </a>
    </div>
  );
};

export default Header;
