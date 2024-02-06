import React from "react";

const Hero = () => {
  return (
    <div className="hero-container px-8 lg:px-0 pt-6 lg:pt-8 pb-16 flex flex-col justify-center lg:flex-row items-center gap-4 h-full">
      <a className="img-container lg:h-fit" target="_blank" href="https://www.behance.net/gallery/190887711/PLICOGA">
        <img className="w-full h-full object-contain rounded-md" src="/plicoga.png" alt="plicoga" />
      </a>
      <a className="img-container lg:h-fit" target="_blank" href="https://www.behance.net/gallery/190737511/Key">
        <img className="w-full h-full object-contain rounded-md" src="/key.png" alt="key" />
      </a>
    </div>
  );
};

export default Hero;
