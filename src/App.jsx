import React from "react";
import { NavLink } from "react-router-dom";
import Routing from "./Routing";
import Footer from "./views/Footer";

const App = () => {
  return (
    <div className="app m-auto w-screen h-screen lg:w-10/12 xl:w-10/12 2xl:w-10/12 flex flex-col py-8">
      <div className="menu flex flex-row justify-between items-center z-50 px-8 py-0 lg:px-0 sticky top-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer uppercase font-semibold hidden lg:block xl:block 2xl:block border-b-[1px] border-b-slate-950 transition-all duration-150 ease-out"
              : "cursor-pointer uppercase font-semibold hidden lg:block xl:block 2xl:block border-0 transition-all duration-150 ease-out"
          }
          to="/"
        >
          ANDREA CASCALLANA
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer uppercase font-semibold lg:hidden xl:hidden 2xl:hiden border-b-[1px] border-b-slate-950 transition-all duration-150 ease-out"
              : "cursor-pointer uppercase font-semibold lg:hidden xl:hidden 2xl:hiden border-0 transition-all duration-150 ease-out"
          }
          to="/"
        >
          A
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer uppercase font-semibold border-b-[1px] border-b-slate-950 transition-all duration-150 ease-out"
              : "cursor-pointer uppercase font-semibold border-0 transition-all duration-150 ease-out"
          }
          to="/about"
        >
          Sobre mí
        </NavLink>
        <a
          className="uppercase font-semibold hidden lg:block xl:block 2xl:block border-b-slate-950 transition-all duration-150 ease-out"
          href="Andrea-Cascallana_CV.pdf"
          download="AndreaCascallana_CV"
        >
          Descarga mi CV
        </a>
        <a
          className="uppercase font-semibold lg:hidden xl:hidden 2xl:hiden border-b-slate-950 transition-all duration-150 ease-out"
          href="Andrea-Cascallana_CV.pdf"
          download="AndreaCascallana_CV"
        >
          CV
        </a>
      </div>

      <div className="main grow">
        <Routing></Routing>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default App;
