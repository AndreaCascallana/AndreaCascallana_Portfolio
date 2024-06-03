import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routing from "./Routing";

const App = () => {
  const cursor = document.querySelectorAll(".cursor");

  window.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    let path = e.composedPath();

    cursor.forEach((el) => {
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;

      links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          el.classList.add("hover");
        });
        link.addEventListener("mouseleave", () => {
          el.classList.remove("hover");
        });
      });
    });
  });
  
  return (
    <div className="app m-auto w-screen h-screen lg:w-10/12 flex flex-col py-8">
      <Header></Header>

      <div className="main grow mx-8 lg:mx-0 mt-16 pb-20 lg:py-0 lg:my-20">
        <Routing></Routing>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default App;
