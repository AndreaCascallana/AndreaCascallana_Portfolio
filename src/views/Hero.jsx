import React from "react";

const Hero = () => {
  return (
    <div className="hero-container flex flex-col lg:flex-row gap-5 lg:gap-10 h-full">
      <div className="proyect lg:flex h-full lg:w-1/2">
        <div className="left-wrapper flex pb-2 lg:pb-0 mr-8 min-w-fit">
          <p className="font-semibold">[01]</p>
          <p className="font-semibold block lg:hidden pl-4 lg:pl-0">PLICOGA</p>
        </div>
        <div className="right-wrapper rounded-md">
          <div className="title hidden lg:block uppercase font-semibold pb-1">
            PLICOGA
          </div>
          <div className="subtitle hidden lg:block pb-4">UX/UI Design + Front-End Development</div>
          <a
            className="right-wrapper"
            target="_blank"
            href="https://www.behance.net/gallery/190887711/PLICOGA"
          >
            <img
              className="hidden lg:block w-full h-full object-cover rounded-md"
              src="/plicoga-desktop.png"
              alt="plicoga proyect"
            />
            <img
              className="lg:hidden w-full h-full object-cover rounded-md"
              src="/plicoga-mobile.png"
              alt="plicoga proyect"
            />
          </a>
        </div>
      </div>

      <div className="proyect lg:flex h-full lg:w-1/2">
        <div className="left-wrapper flex pb-2 lg:pb-0 mr-8 min-w-fit">
          <p className="font-semibold">[02]</p>
          <p className="font-semibold block lg:hidden pl-4 lg:pl-0">KEY</p>
        </div>
        <div className="right-wrapper rounded-md">
          <div className="title hidden lg:block uppercase font-semibold pb-1">
            KEY
          </div>
          <div className="subtitle hidden lg:block pb-4">UX/UI Design</div>
          <a
            className="right-wrapper"
            target="_blank"
            href="https://www.behance.net/gallery/190737511/Key"
          >
            <img
              className="hidden lg:block w-full h-full object-cover rounded-md"
              src="/key-desktop.png"
              alt="key proyect"
            />
            <img
              className="lg:hidden w-full h-full object-cover rounded-md"
              src="/key-mobile.png"
              alt="key proyect"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
