import React from "react";

const About = () => {
  return (
    <div className="about flex flex-col-reverse lg:flex-row gap-14 lg:gap-20 h-full mt-[435px] pb-56 lg:mt-0 lg:pb-0">
      <div className="left-wrapper flex flex-col gap-14 h-full lg:w-1/2 lg:pr-6 mb-48">
        <div className="bio flex flex-col gap-4 animate__animated animate__fadeIn lg:overflow-hidden">
          <div className="title uppercase font-semibold text-normal lg:text-lg">bio</div>
          <div className="content flex flex-col gap-1">
            <p className="max-w-prose">
              UX/UI Designer y Front-End Developer, pero sobretodo muy friki de
              los Sistemas de Diseño.
            </p>
            <p className="max-w-prose">
              Tengo experiencia trabajando junto a equipos multidisciplinares
              dentro de grupos de investigación y en consultoras donde he
              colaborado en proyectos para diversoss clientes: Startups,
              reconocidas multinacionales y empresas del IBEX-35.
            </p>
          </div>
        </div>
        <div className="contact flex flex-col gap-4">
          <div className="title uppercase font-semibold text-normal lg:text-lg animate__animated animate__fadeIn overflow-hidden">
            contacto
          </div>
          <div className="content flex flex-col gap-2">
            <a
              className="hidden lg:flex xl:flex 2xl:flex gap-2 items-center animate__animated animate__fadeIn overflow-hidden"
              href="mailto:andreacascallanarodriguez@gmail.com?subject=¡Hola%20Andrea!"
              target="_blank"
            >
              <img src="/about/mail.svg" alt="mail icon" />
              <span className="border-custom">
                andreacascallanarodriguez@gmail.com
              </span>
            </a>
            <a
              className="lg:hidden flex gap-2 items-center animate__animated animate__fadeIn overflow-hidden"
              href="mailto:andreacascallanarodriguez@gmail.com?subject=¡Hola%20Andrea!"
              target="_blank"
            >
              <img src="/about/mail.svg" alt="mail icon" />
              <span className="border-custom">Email</span>
            </a>
            <a
              className="flex gap-2 items-center animate__animated animate__fadeIn overflow-hidden"
              href="https://www.linkedin.com/in/andrea-cascallana-rodr%C3%ADguez-b35803249/"
              target="_blank"
            >
              <img src="/about/linkedin.svg" alt="linkedin icon" />
              <span className="border-custom">Linkedin</span>
            </a>
            <a
              className="flex gap-2 items-center animate__animated animate__fadeIn overflow-hidden"
              href="https://www.behance.net/andreacascallana"
              target="_blank"
            >
              <img src="/about/behance.svg" alt="behance icon" />
              <span className="border-custom">Behance</span>
            </a>
          </div>
        </div>
      </div>
      <div className="right-wrapper lg:w-1/2 lg:h-[77%] animate__animated animate__fadeIn">
        <img
          className="w-full h-full object-cover rounded-md"
          src="/about/Retrato.png"
          alt="Retrato Andrea Cascallana"
        />
      </div>
    </div>
  );
};

export default About;
