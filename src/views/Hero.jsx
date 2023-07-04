import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-top flex flex-col gap-10 py-10 lg:gap-14 lg:py-20">
        <div className="text-content flex flex-col gap-10">
          <div className="title flex gap-1">
            <p className="title text-4xl font-bold lg:text-9xl lg:leading-[116px] xl:text-9xl xl:leading-[116px] 2xl:text-9xl 2xl:leading-[116px]">
              ANDREA CASCALLANA
            </p>
          </div>
          <div className="subtitle flex flex-col gap-1">
            <p className="text-2xl font-medium lg:text-4xl xl:text-4xl 2xl:text-4xl">
              Diseñadora UI/UX
            </p>
            <p className="text-2xl font-medium lg:text-4xl xl:text-4xl 2xl:text-4xl">
              y desarrolladora <span className="italic">front-end</span>.
            </p>
          </div>
        </div>
        <div
          className="tooltip w-full lg:w-fit"
          data-tip="Haz click para enviarme un mail"
        >
          <a
            className="btn btn-primary text-lg w-full block lg:hidden"
            href="mailto:andreacascallanarodriguez@gmail.com?subject=¡Hola%20Andrea!"
            target="_blank"
          >
            ¡Contáctame!
          </a>
          <a
            className="btn btn-rounded text-lg w-fit hidden lg:block"
            href="mailto:andreacascallanarodriguez@gmail.com?subject=¡Hola%20Andrea!"
            target="_blank"
          >
            ¡Contáctame!
          </a>
        </div>
      </div>
      <div className="hero-bottom flex flex-col gap-8 py-10 mb-10 lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-16 lg:py-20">
        <div className="hero-bottom-left-top-content col-span-1 row-span-1">
          <div className="steps flex items-center gap-2 h-fit">
            <p className="font-bold uppercase text-lg">¿Quién soy?</p>
          </div>
        </div>
        <div className="hero-bottom-right-top-content flex flex-col gap-14 col-span-2 row-span-1">
          <div className="description flex flex-col gap-4">
            <p className="max-w-prose text-xl lg:text-2xl">
              Residiendo en Madrid, desde hace 2 años me dedico a crear
              interfaces de usuario persiguiendo un enfoque de diseño centrado
              en las personas.
            </p>
            <p className="max-w-prose text-xl lg:text-2xl">
              Además, colaboro con los equipos de desarrollo
              <span className="italic"> front-end</span> traduciendo los
              prototipos de diseño a código mediante una filosofía
              <span className="italic"> pixel perfect</span>.
            </p>
          </div>
        </div>
        <div className="hero-bottom-left-bottom-content col-span-1 row-span-1">
          <div className="steps flex items-center gap-2 h-fit">
            <p className="font-bold uppercase text-lg mt-8 lg:mt-0">¿Qué hago?</p>
          </div>
        </div>
        <div className="hero-bottom-right-bottom-content flex flex-col gap-14 col-span-2 row-span-1">
          <div className="flex flex-wrap gap-2">
            <span className="badge badge-outline">Sistemas de diseño</span>
            <span className="badge badge-outline">
              <span className="italic">Wireframes</span>
            </span>
            <span className="badge badge-outline">Prototipos</span>
            <span className="badge badge-outline hidden md:block">
              Diseño web multidispositivo
            </span>
            <span className="badge badge-outline block md:hidden">
              <span className="italic">Responsive</span>
            </span>
            <span className="badge badge-outline">
              <span className="italic">Desk research</span>
            </span>
            <span className="badge badge-outline">
              <span className="italic">user research</span>
            </span>
            <span className="badge badge-outline hidden md:block">
              Evaluaciones de producto
            </span>
            <span className="badge badge-outline block md:hidden">
              Test de usuario
            </span>
            <span className="badge badge-outline hidden md:block">
              Arquitectura de la información
            </span>
            <span className="badge badge-outline block md:hidden">AI</span>
            <span className="badge badge-outline">
              Desarrollo <span className="italic"> front-end</span>
            </span>
          </div>
        </div>
        <div className="hero-bottom-left-bottom-content col-span-1 row-span-1">
          <div className="steps flex items-center gap-2 h-fit">
            <p className="font-bold uppercase text-lg mt-8 lg:mt-0">
              ¿Con qué herramientas?
            </p>
          </div>
        </div>
        <div className="hero-bottom-right-bottom-content flex flex-col gap-14 col-span-2 row-span-1">
          <div className="flex flex-wrap gap-2">
            <span className="badge badge-outline">Figma</span>
            <span className="badge badge-outline">pack adobe</span>
            <span className="badge badge-outline">notion</span>
            <span className="badge badge-outline">trello</span>
            <span className="badge badge-outline">HTML5</span>
            <span className="badge badge-outline">CSS3</span>
            <span className="badge badge-outline">Preprocesadores CSS</span>
            <span className="badge badge-outline">Frameworks CSS</span>
            <span className="badge badge-outline">JavaScript</span>
            <span className="badge badge-outline">React</span>
          </div>
        </div>
        <div className="hero-mobile lg:hidden">
          <div className="steps flex items-center gap-2 h-fit lg:hidden">
            <p className="font-bold uppercase text-lg lg:hidden mt-8 lg:mt-0">
              ¿Quieres saber más?
            </p>
          </div>
        </div>
        <div className="hero-mobile flex flex-col gap-14 lg:hidden">
          <div className="flex flex-wrap gap-2 lg:hidden">
            <a
              className="btn btn-primary text-lg w-full"
              href="AndreaCascallana_CV.pdf"
              download="AndreaCascallanaCV"
            >
              Descarga mi CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
