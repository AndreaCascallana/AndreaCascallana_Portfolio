import React, { useRef } from "react";
import About from "./routes/About";
import Proyects from "./routes/Proyects";
import Contact from "./routes/Contact";
import Hero from "./views/Hero";
import Footer from "./views/Footer";

const App = () => {
  const menuItemProyectos = document.querySelector(".menuItemProyectos");
  const menuItemSobreMi = document.querySelector(".menuItemSobreMi");
  const menuItemContacto = document.querySelector(".menuItemContacto");
  const menuItem = document.querySelector(".menuItem");

  const proyects = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  const handleClickProyects = () => {
    proyects.current?.scrollIntoView();
    menuItemProyectos.classList.add("btn-link-active");
    menuItemSobreMi.classList.remove("btn-link-active");
    menuItemContacto.classList.remove("btn-link-active");
  };
  const handleClickAbout = () => {
    about.current?.scrollIntoView();
    menuItemSobreMi.classList.add("btn-link-active");
    menuItemProyectos.classList.remove("btn-link-active");
    menuItemContacto.classList.remove("btn-link-active");
  };
  const handleClickContact = () => {
    contact.current?.scrollIntoView();
    menuItemContacto.classList.add("btn-link-active");
    menuItemProyectos.classList.remove("btn-link-active");
    menuItemSobreMi.classList.remove("btn-link-active");
  };
  const handleClick = () => {
    window.scrollTo(0, 0);
    menuItemContacto.classList.remove("btn-link-active");
    menuItemProyectos.classList.remove("btn-link-active");
    menuItemSobreMi.classList.remove("btn-link-active");
  };

  return (
    <div className="app m-auto w-screen px-6 lg:w-10/12 xl:w-10/12 2xl:w-10/12">
      <div className="menu flex flex-row justify-between items-center sticky top-0 z-50 py-4 pl-0 pr-0">
        <div
          className="menuItem cursor-pointer uppercase font-bold hidden lg:block xl:block 2xl:block"
          onClick={handleClick}
        >
          ANDREA CASCALLANA
        </div>
        <div
          className="menuItem cursor-pointer uppercase font-bold lg:hidden xl:hidden 2xl:hiden"
          onClick={handleClick}
        >
          A
        </div>
        <div
          className="btn btn-link menuItemProyectos"
          onClick={handleClickProyects}
          to="/#proyectos"
        >
          Proyectos
        </div>
        <div
          className="btn btn-link menuItemSobreMi"
          onClick={handleClickAbout}
          to="/#sobre-mi"
        >
          Sobre mí
        </div>
        <div
          className="btn btn-link menuItemContacto"
          onClick={handleClickContact}
          to="/#contacto"
        >
          Contacto
        </div>
        <a
          className="btn btn-rounded hidden lg:block xl:block 2xl:block"
          href="AndreaCascallana_CV.pdf"
          download="AndreaCascallanaCV"
        >
          Descarga mi CV
        </a>
      </div>

      <div className="main">
        <div ref={menuItem}>
          <Hero />
        </div>
        <div id="proyectos" ref={proyects}>
          <Proyects />
        </div>
        <div id="sobre-mi" ref={about}>
          <About />
        </div>
        <div id="contacto" ref={contact}>
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
