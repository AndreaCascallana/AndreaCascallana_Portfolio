import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routing from "./Routing";

const App = () => {
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
