import React from "react";

const About = () => {
  return (
    <div className="about flex flex-col lg:flex-row gap-10 h-full">
      <div className="left-wrapper flex flex-col gap-10 h-full lg:w-1/2 pr-6">
        <div className="bio flex flex-col lg:flex-row">
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
                UX/UI Designer y Front-End Developer, pero sobretodo muy{" "}
                <span className="italic">friki</span> de los Sistemas de Diseño.
              </p>
              <p className="max-w-prose">
                Tengo experiencia trabajando junto a equipos multidisciplinares
                dentro de{" "}
                <a
                  className="underline hover:text-slate-600 transition-colors duration-150 ease-in-out"
                  href="https://ging.github.io/"
                  target="_blank"
                >
                  grupos de investigación
                </a>{" "}
                o{" "}
                <a
                  className="underline hover:text-slate-600 transition-colors duration-150 ease-in-out"
                  href="https://www.redbility.com/"
                  target="_blank"
                >
                  consultoras{" "}
                </a>
                donde he colaborado en proyectos para pequeñas empresas y
                reconocidas multinacionales.
              </p>
              <p className="max-w-prose pt-4">
                En el terreno personal, todo el peso de mi personalidad lo
                llevan a cuestas mi flequillo y aros.
              </p>
            </div>
          </div>
        </div>
        <div className="contact flex flex-col lg:flex-row">
          <div className="left-wrapper flex pb-2 lg:pb-0 mr-8 min-w-fit">
            <p className="font-semibold">[02]</p>
            <p className="uppercase font-semibold block lg:hidden pl-4 lg:pl-0">
              contacto
            </p>
          </div>
          <div className="right-wrapper">
            <div className="title hidden lg:block uppercase font-semibold pb-4">
              contacto
            </div>
            <div className="content flex flex-col gap-1">
              <a
                className="hidden lg:block xl:block 2xl:block border-b-[1px] border-b-slate-950 w-fit hover:text-slate-600 transition-colors duration-150 ease-in-out"
                href="mailto:andreacascallanarodriguez@gmail.com?subject=¡Hola%20Andrea!"
                target="_blank"
              >
                andreacascallanarodriguez@gmail.com
              </a>
              <a
                className="lg:hidden border-b-[1px] border-b-slate-950 w-fit hover:text-slate-600 transition-colors duration-150 ease-in-out"
                href="mailto:andreacascallanarodriguez@gmail.com?subject=¡Hola%20Andrea!"
                target="_blank"
              >
                Email
              </a>
              <a
                className="border-b-[1px] border-b-slate-950 w-fit hover:text-slate-600 transition-colors duration-150 ease-in-out"
                href="https://www.linkedin.com/in/andrea-cascallana-rodr%C3%ADguez-b35803249/"
                target="_blank"
              >
                Linkedin
              </a>
              <a
                className="border-b-[1px] border-b-slate-950 w-fit hover:text-slate-600 transition-colors duration-150 ease-in-out"
                href="https://github.com/AndreaCascallana"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="right-wrapper lg:w-1/2">
        <img
          className="w-full h-full object-cover rounded-md"
          src="/Foto.jpeg"
          alt="Retrato Andrea Cascallana"
        />
      </div>
    </div>
  );
};

export default About;
