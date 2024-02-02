import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-top flex flex-col gap-10 py-10 lg:gap-12 lg:py-20">
        <div className="text-content flex flex-col gap-10">
          <div className="title flex gap-1">
            <p className="title text-4xl font-bold lg:text-9xl lg:leading-[116px] xl:text-9xl xl:leading-[116px] 2xl:text-9xl 2xl:leading-[116px]">
              ANDREA CASCALLANA
            </p>
          </div>
          <div className="subtitle flex flex-col gap-1">
            <p className="text-2xl font-medium lg:text-4xl xl:text-4xl 2xl:text-4xl">
              Diseñadora UX/UI
            </p>
            <p className="text-2xl font-medium lg:text-4xl xl:text-4xl 2xl:text-4xl">
              y desarrolladora <span className="italic">front-end</span>.
            </p>
          </div>
        </div>
        <div
          className="tooltip w-full lg:w-fit hidden lg:block"
          data-tip="Haz click para enviarme un mail"
        >
          <a
            className="btn btn-rounded text-lg w-full hidden lg:block"
            href="mailto:andreacascallanarodriguez@gmail.com?subject=¡Hola%20Andrea!"
            target="_blank"
          >
            ¡Contáctame!
          </a>
        </div>
        <a
          className="btn btn-primary text-lg w-fit block lg:hidden"
          href="mailto:andreacascallanarodriguez@gmail.com?subject=¡Hola%20Andrea!"
          target="_blank"
        >
          ¡Contáctame!
        </a>
      </div>
    </div>
  );
};

export default Hero;
