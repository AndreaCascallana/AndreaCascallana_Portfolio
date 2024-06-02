import React from "react";

const About = () => {
  return (
    <div className="about flex flex-col lg:flex-row gap-10 h-full">
      <div className="left-wrapper flex flex-col gap-10 h-full lg:w-1/2 pr-6">
        <div className="bio flex flex-col lg:flex-row animate__animated animate__fadeIn overflow-hidden">
          <div className="left-wrapper flex pb-2 lg:pb-0 mr-8 min-w-fit">
            <p className="font-semibold">[01]</p>
            <p className="uppercase font-semibold block lg:hidden pl-4 lg:pl-0">
              bio
            </p>
          </div>
          <div className="right-wrapper">
            <div className="title hidden lg:block uppercase font-semibold pb-4">
              bio
            </div>
            <div className="content flex flex-col gap-1">
              <p className="max-w-prose">
                UX/UI Designer y Front-End Developer, pero sobretodo muy friki de los Sistemas de Diseño.
              </p>
              <p className="max-w-prose">
                Tengo experiencia trabajando junto a equipos multidisciplinares
                dentro de{" "}
                <a
                  className="border-custom"
                  href="https://ging.github.io/"
                  target="_blank"
                >
                  grupos de investigación
                </a>{" "}
                o{" "}
                <a
                  className="border-custom"
                  href="https://www.redbility.com/"
                  target="_blank"
                >
                  consultoras{" "}
                </a>
                donde he colaborado en proyectos para pequeñas empresas y
                reconocidas multinacionales.
              </p>
            </div>
          </div>
        </div>
        <div className="contact flex flex-col lg:flex-row">
          <div className="left-wrapper flex pb-2 lg:pb-0 mr-8 min-w-fit animate__animated animate__fadeIn overflow-hidden">
            <p className="font-semibold">[02]</p>
            <p className="uppercase font-semibold block lg:hidden pl-4 lg:pl-0">
              contacto
            </p>
          </div>
          <div className="right-wrapper">
            <div className="title hidden lg:block uppercase font-semibold pb-4 animate__animated animate__fadeIn overflow-hidden">
              contacto
            </div>
            <div className="content flex flex-col gap-2">
              <a
                className="hidden lg:flex xl:flex 2xl:flex gap-2 items-center animate__animated animate__fadeIn overflow-hidden"
                href="mailto:andreacascallanarodriguez@gmail.com?subject=¡Hola%20Andrea!"
                target="_blank"
              >
                <img src="/about/mail.svg" alt="mail icon" />
                <span className="border-custom">andreacascallanarodriguez@gmail.com</span>
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
                href="https://github.com/AndreaCascallana"
                target="_blank"
              >
                <img src="/about/github.svg" alt="github icon" />
                <span className="border-custom">Github</span>
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
      </div>
      <div className="right-wrapper lg:w-1/2 animate__animated animate__fadeIn overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-md"
          src="/about/Foto.jpeg"
          alt="Retrato Andrea Cascallana"
        />
      </div>
    </div>
  );
};

export default About;
