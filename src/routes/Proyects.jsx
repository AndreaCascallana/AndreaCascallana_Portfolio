import React from "react";
import ProyectSingle from "../components/ProyectSingle/ProyectSingle";

const Proyects = () => {
  return (
    <div className="proyects-container flex flex-col gap-8 py-10 mb-10 lg:py-20 lg:grid lg:grid-cols-3 lg:gap-4">
      <div className="proyects-top-content-container lg:col-span-1">
        <div className="proyects-top-content flex flex-col gap-4">
          <p className="badge badge-outline">01</p>
          <p className="font-bold uppercase text-lg">Proyectos seleccionados</p>
        </div>
      </div>
      <div className="proyects-bottom-content lg:col-span-2">
        <div className="selected-work flex flex-col gap-8 lg:gap-16">
          <ProyectSingle
            name="PLICOGA"
            picture="/plicoga.png"
            alt="plicoga proyect"
            description="Plataforma integral de inspección, conservación, y control del alumbrado urbano y galerías subterráneas."
            url="https://www.figma.com/proto/flIm7U52v8NEzvN0bf4aWr/PLICOGA_Portfolio-AndreaCascallana?page-id=601%3A12980&type=design&node-id=604-14990&viewport=-471%2C2712%2C0.38&t=XBWrYhzk3iAbeZmN-1&scaling=scale-down&mode=design"
          />
          <ProyectSingle
            name="CONNECTO"
            picture="/connecto.png"
            alt="connecto proyect"
            description="App que busca generar una red de apoyo para las familias que acuden a Centros de Atención Temprana."
            url="https://www.figma.com/proto/F7ZL5ND8PuON9L3haOfDZj/CONNECTO_Portfolio-AndreaCascallana?page-id=1202%3A61599&type=design&node-id=1202-61867&viewport=730%2C721%2C0.32&t=br4psTkMYfS4IVmD-1&scaling=scale-down&mode=design"
          />
          <ProyectSingle
            name="KEY"
            picture="/key.png"
            alt="key proyect"
            description="Key es una plataforma digital de oferta y demanda de espacios de trabajo específicos para perfiles profesionales creativos."
            url="https://www.figma.com/proto/vBGOQlWlTbW4zwxav7R333/KEY_Portfolio-AndreaCascallana?page-id=1701%3A43853&type=design&node-id=1702-44740&viewport=515%2C342%2C0.24&t=cnNtDriHN5WKzenS-1&scaling=scale-down&mode=design"
          />
          <ProyectSingle
            name="MiraMuseo"
            picture="/mira-museo.png"
            alt="MiraMuseo proyect"
            description="MiraMuseo es una aplicación que transforma los museos en espacios interactivos, gamificados, cercanos y casuales con el objetivo de atraer a un público más joven."
            url="https://www.behance.net/gallery/174064291/MiraMuseo-App"
          />
        </div>
      </div>
    </div>
  );
};

export default Proyects;
