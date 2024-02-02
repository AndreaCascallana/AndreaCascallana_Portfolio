import React from "react";
import Andrea01 from "/Andrea01.png";
import Skipper from "/Skipper.png";
import Andrea02 from "/Andrea02.png";
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
                Soy una{" "}
                <span className="font-semibold">diseñadora junior</span>{" "}
                 enfocada en el diseño de interacción con {" "}
                <span className="font-semibold">nociones de desarrollo front-end</span>.
              </p>
              <p className="max-w-prose text-xl lg:text-2xl">
                He trabajado en proyectos para pequeñas empresas y reconocidas multinacionales.
                Colaborando con equipos multidisciplinares dentro de{" "}
                <a
                  className="underline hover:text-slate-600 transition-colors duration-150 ease-in-out"
                  href="https://ging.github.io/"
                  target="_blank"
                >
                  grupos de investigación
                </a>{" "}
                o {" "}
                <a
                  className="underline hover:text-slate-600 transition-colors duration-150 ease-in-out"
                  href="https://www.redbility.com/"
                  target="_blank"
                >
                  consultoras
                </a>.
              </p>
            </div>
            <div className="about-bottom-right-bottom-content flex flex-col gap-4">
              <p className="max-w-prose text-xl lg:text-2xl">
                En el terreno personal puedo decir que todo el peso de mi
                personalidad lo llevan a cuestas mi flequillo y mis aros.
              </p>
              <p className="max-w-prose text-xl lg:text-2xl">
                Amo a los animales pero me obsesionan los gatos. Sobre todo
                Skipper, quien fue mi fiel compañero durante casi 18 añazos.
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
            backgroundImage: `url(${Andrea01})`,
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
            backgroundPositionX: "100%",
            backgroundPositionY: "50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-full h-[28rem] bg-slate-950 rounded-lg"
          style={{
            backgroundImage: `url(${Andrea02})`,
            backgroundPositionX: "100%",
            backgroundPositionY: "55%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

export default About;
