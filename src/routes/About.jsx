import React from "react";
import Retrato from "/Foto.jpeg";
import Ilustracion from "/ilustracion.jpg";
import Pequeña from "../../public/pequeña.png";
import Skipper from "/Skipper.png";
import Dormir from "/dormir.jpg";
import { retrato } from "./about.module.sass";

const About = () => {
  return (
    <div className="about-container py-10 mb-10 lg:py-20 flex flex-col gap-14">
      <div className="about-top-content">
        <div className={retrato}></div>
      </div>
      <div className="about-bottom-content flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:gap-4">
        <div className="about-bottom-left-content lg:col-span-1 flex flex-col gap-4">
          <p className="badge badge-outline">02</p>
          <p className="font-bold uppercase text-lg">
            Para conocernos <br></br>un poco mejor...
          </p>
        </div>
        <div className="about-bottom-right-content lg:col-span-2">
          <div className="about-bottom-right-content flex flex-col gap-16 text-2xl">
            <div className="about-bottom-right-top-content flex flex-col gap-4">
              <p className="max-w-prose text-xl lg:text-2xl">
                He evolucionado de un aprendizaje más introspectivo en mis
                estudios de Ilustración, a obtener una perspectiva más social
                donde disfruto diseñando para mejorar la experiencia de las
                personas en su relación con productos digitales.
              </p>
              <p className="max-w-prose text-xl lg:text-2xl">
                Desde el 2021 he estado involucrada en equipos
                multidisciplinares dentro del grupo de investigación de la
                Universidad Politécnica de Madrid llamado{" "}
                <a
                  className="underline hover:text-slate-600 transition-colors duration-150 ease-in-out"
                  href="https://ging.github.io/"
                  target="_blank"
                >
                  Grupo Internet Nueva Generación
                </a>{" "}
                (GING).
              </p>
              <p className="max-w-prose text-xl lg:text-2xl">
                Aquí he tenido la oportunidad de colaborar en una amplia
                variedad de proyectos como{" "}
                <a
                  className="underline hover:text-slate-600 transition-colors duration-150 ease-in-out"
                  href="https://smarterp.me/"
                  target="_blank"
                >
                  plataformas de interpretación simultánea
                </a>
                , o{" "}
                <a
                  className="underline hover:text-slate-600 transition-colors duration-150 ease-in-out"
                  href="https://yoda.dit.upm.es/"
                  target="_blank"
                >
                  aplicaciones europeas de datos abiertos
                </a>
                .
              </p>
              <p className="max-w-prose text-xl lg:text-2xl">
                En ellos intervengo como{" "}
                <span className="font-semibold">diseñadora UX/UI</span>{" "}
                desarrollando soluciones digitales sustentadas por{" "}
                <span className="font-semibold">sistemas de diseño</span>{" "}
                personalizados. Posteriormente, todo ello es traducido al{" "}
                <span className="italic">front-end</span> del proyecto mediante
                una <span className="font-semibold">maquetación web{" "}
                <span className="italic">pixel perfect</span></span>.
              </p>
            </div>
            <div className="about-bottom-right-bottom-content flex flex-col gap-4">
              <p className="max-w-prose text-xl lg:text-2xl">
                En el terreno personal puedo decir que todo el peso de mi
                personalidad lo lleva a cuestas mi flequillo.
              </p>
              <p className="max-w-prose text-xl lg:text-2xl">
                Amo a los animales pero me obsesionan los gatos. Sobre todo
                Skipper, mi fiel compañero desde hace 18 añazos.
              </p>
              <p className="max-w-prose text-xl lg:text-2xl">
                Sin duda alguna, mi pasatiempo favorito durante mi tiempo libre
                es dormir.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="galeria hidden lg:flex lg:justify-between lg:gap-4">
        <div
          className="w-full h-[28rem] bg-slate-950 rounded-lg"
          style={{
            backgroundImage: `url(${Ilustracion})`,
            backgroundPositionX: "60%",
            backgroundPositionY: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-full h-[28rem] bg-slate-950 rounded-lg"
          style={{
            backgroundImage: `url(${Pequeña})`,
            backgroundPositionX: "100%",
            backgroundPositionY: "30%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-full h-[28rem] bg-slate-950 rounded-lg"
          style={{
            backgroundImage: `url(${Skipper})`,
            backgroundPositionX: "56%",
            backgroundPositionY: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-full h-[28rem] bg-slate-950 rounded-lg"
          style={{
            backgroundImage: `url(${Dormir})`,
            backgroundPositionX: "46%",
            backgroundPositionY: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

export default About;
