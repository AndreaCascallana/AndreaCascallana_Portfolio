import React from "react";

const Hero = () => {
  return (
    <div className="hero-container px-8 lg:px-0 pt-6 lg:pt-8 pb-16 flex flex-col justify-center lg:flex-row items-center gap-4 h-full">
      <a className="img-container lg:h-fit" target="_blank" href="https://www.figma.com/proto/flIm7U52v8NEzvN0bf4aWr/PLICOGA_Portfolio-AndreaCascallana?page-id=601%3A12980&type=design&node-id=604-14990&viewport=-2227%2C6241%2C1.04&t=wbfrA5xHUsyl39Vy-1&scaling=contain&mode=design">
        <img className="w-full h-full object-contain rounded-md" src="/plicoga.png" alt="plicoga" />
      </a>
      <a className="img-container lg:h-fit" target="_blank" href="https://www.behance.net/gallery/190737511/Key-Platform-Visual-Design">
        <img className="w-full h-full object-contain rounded-md" src="/key.png" alt="key" />
      </a>
    </div>
  );
};

export default Hero;
