import React from "react";

const Plicoga = () => {
  return (
    <div className="plicoga flex flex-col gap-28 pb-28">
      {/* Hero */}
      <section className="hero flex flex-col justify-start gap-4 animate__animated animate__fadeInUp">
        <div className="title flex flex-col gap-1 w-full">
          <h1 className="proyect-name">PLICOGA</h1>
          <h2 className="subtitle font-semibold text-4xl w-3/5">
            La plataforma para un perfecto manejo del alumbrado urbano
          </h2>
        </div>
        <img
          className="w-full"
          src="/plicoga/plicoga_hero.png"
          alt="plicoga hero image"
        />
        <div className="team flex flex-col gap-2 w-full">
          <p className="title font-semibold text-lg">Equipo involucrado</p>
          <div className="subtitle flex gap-2 items-center">
            <img className="h-12" src="/plicoga/ging.png" alt="ging logo" />
            <a
              className="border-custom"
              href="https://ging.github.io/"
              target="_blank"
            >
              Next Generation Internet Group
            </a>
          </div>
        </div>
      </section>

      {/* Resumen */}
      <section className="resumen flex justify-between gap-4 animate__animated animate__fadeInUp">
        <h3 className="title font-semibold text-2xl w-1/2">[01] Resumen</h3>
        <div className="text flex flex-col gap-4 w-1/2 mt-3">
          <p className="max-w-prose">
            PLICOGA es una plataforma integral de inspección, conservación, y
            control del alumbrado urbano.
          </p>
          <p className="max-w-prose">
            Hasta ahora las plataformas autonómicas de control y gestión del
            alumbrado urbano presentan grandes problemas de usabilidad: Las
            diferentes tareas del usuario están descentralizadas, la interfaz de
            usuario es muy compleja e ineficiente...
          </p>
          <p className="max-w-prose">
            Por ello, con PLICOGA se buscará favorecer la interacción Usuario -
            Dato gracias una mejora de la interfaz de usuario.{" "}
          </p>
        </div>
      </section>

      <img src="/plicoga/plicoga_summary.png" alt="plicoga summary image" />

      {/* Research */}
      <section className="research flex flex-col gap-6 animate__animated animate__fadeInUp">
        <h3 className="title font-semibold text-2xl">[02] Research</h3>
        <div className="subsection-group flex flex-col gap-28">
          {/* Subsection */}
          <div className="subsection flex justify-between gap-6">
            <div className="left-wrapper w-1/2 flex flex-col gap-4">
              <h4 className="title font-semibold text-lg">
                Target heterogéneo
              </h4>
              <div className="text max-w-prose">
                <p>
                  Técnicos de oficina, conductores de flotas de vehículos,
                  personal de mantenimiento... Además, cada cargo cuenta con
                  diferentes niveles de profesionalización, es decir, perfiles
                  junior y perfiles senior.
                </p>
              </div>
            </div>
            <div className="right-wrapper w-1/2">
              <img src="/plicoga/plicoga_target.png" alt="target" />
            </div>
          </div>
          {/* Subsection */}
          <div className="subsection">
            <div className="flex justify-between gap-6">
              <div className="left-wrapper w-1/2">
                {/* <img src="/plicoga/plicoga_research.png" alt="target" /> */}
              </div>
              <div className="right-wrapper w-1/2 flex flex-col gap-4">
                <h4 className="title font-semibold text-lg">
                  ¿Qué opina nuestro target?
                </h4>
                <div className="text max-w-prose">
                  <p className="mb-4">
                    Se emplean diferentes{" "}
                    <span className="font-medium">
                      herramientas de investigación cualitativa
                    </span>{" "}
                    para conocer mejor a nuestro público objetivo:{" "}
                    <span className="font-medium">
                      Entrevistas semiestructuradas y observación participante
                    </span>
                    .
                  </p>
                  <p>
                    De los resultados se detectan los aspectos que se deben
                    mejorar mejorar y aquellos que pueden ser reforzados.
                  </p>
                </div>
              </div>
            </div>
            <img
              className="pt-12"
              src="/plicoga/plicoga_research.png"
              alt="plicoga research image"
            />
          </div>
        </div>
      </section>

      {/* Construcción del producto */}
      <section className="construcción-producto flex flex-col gap-6 animate__animated animate__fadeInUp">
        <h3 className="title font-semibold text-2xl">
          [03] Contrucción del producto
        </h3>
        <div className="subsection-group flex flex-col gap-28">
          {/* Subsection */}
          <div className="subsection">
            <div className="flex justify-between gap-6">
              <div className="left-wrapper w-1/2 flex flex-col gap-4">
                <h4 className="title font-semibold text-lg">
                  El valor de PLICOGA
                </h4>
                <div className="text max-w-prose">
                  <p>
                    Después de conocer las ganancias y los dolores que
                    experimentan los usuarios con respecto a las plataformas
                    actuales, PLICOGA ofrece una serie de{" "}
                    <span className="font-medium">
                      generadores de ganancias y analgésicos
                    </span>{" "}
                    definidos gracias a un{" "}
                    <span className="font-medium">
                      lienzo de propuesta de valor
                    </span>
                    .
                  </p>
                </div>
              </div>
              <div className="right-wrapper w-1/2 flex flex-col gap-6">
                <img
                  src="/plicoga/plicoga_propuesta-valor01.png"
                  alt="target"
                />
                <img
                  src="/plicoga/plicoga_propuesta-valor02.png"
                  alt="target"
                />
                <img
                  src="/plicoga/plicoga_propuesta-valor03.png"
                  alt="target"
                />
              </div>
            </div>
          </div>

          {/* Subsection */}
          <div className="subsection flex justify-between gap-6">
            <div className="left-wrapper w-1/2">
              <img src="/plicoga/plicoga_ai.png" alt="target" />
            </div>
            <div className="right-wrapper w-1/2 flex flex-col gap-4">
              <h4 className="title font-semibold text-lg">
                Navegación más intuitiva
              </h4>
              <div className="text max-w-prose">
                <p>
                  Uno de los principales aliviadores de dolor era mejorar la
                  navegación de la plataforma, por ello se incide en la{" "}
                  <span className="font-medium">
                    arquitectura de la información
                  </span>
                  . Por ello PLICOGA organiza, estructura y etiqueta los
                  elementos de manera clara y lógica.
                </p>
              </div>
            </div>
          </div>
          {/* Subsection */}
          <div className="subsection">
            <div className="flex justify-between gap-6">
              <div className="left-wrapper w-1/2 flex flex-col gap-4">
                <div></div>
                <h4 className="title font-semibold text-lg">
                  Sistema de diseño personalizado
                </h4>
                <div className="text max-w-prose">
                  <p className="mb-4">
                    Para la plataforma se desarrolla un{" "}
                    <span className="font-medium">
                      sistema de diseño personalizado que vaya acorde al manual
                      de identidad
                    </span>{" "}
                    establecido por la institución pública que actúa como
                    cliente.
                  </p>
                  <p>
                    Para su elaboración, se persigue la filosofía{" "}
                    <a
                      className="border-custom font-medium"
                      href="https://bradfrost.com/blog/post/atomic-web-design/"
                    >
                      Atomic Design System
                    </a>{" "}
                    ideado por{" "}
                    <a className="border-custom" href="https://bradfrost.com/">
                      Brad Frost
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="right-wrapper w-1/2">
                {/* <img src="/plicoga/plicoga_design-system.png" alt="target" /> */}
              </div>
            </div>
            <img src="/plicoga/plicoga_design-system.png" alt="plicoga design system" />
          </div>
        </div>
      </section>
      

      {/* Producto final */}
      <section className="producto-final flex flex-col gap-6 animate__animated animate__fadeInUp">
        <h3 className="title font-semibold text-2xl">[04] Producto final</h3>
        <div className="subsection-group flex flex-col gap-28">
          {/* Subsection */}
          <div className="subsection flex justify-between gap-6">
            <div className="left-wrapper w-1/2 flex flex-col gap-4">
              <h4 className="title font-semibold text-lg">
                Gestión de alarmas
              </h4>
              <div className="text max-w-prose">
                <p className="pb-4">
                  Cualquier incidencia se notificará al usuario tanto en el mapa
                  como en la tabla enriquecida bajo éste, mediante un indicador
                  rojo personalizado para cada contexto.
                </p>
                <p className="pb-4">
                  En un solo vistazo el usuario podrá ver qué componente está
                  afectado y porqué en el apartado "Estado" de la tabla
                  enriquecida.
                </p>
                <p>
                  Para no perder la comunicación constante con el resto de
                  compañeros y sobretodo, no superponer procesos, el usuario
                  podrá asignarse como responsable para la resolución de dicha
                  incidencia.
                </p>
                <p className="pb-4">
                  Por último, la tabla enriquecida ofrece la posibilidad de
                  realizar acciones inmediatas para la resolución de
                  incidencias. Además, el usuario podrá hacer un seguimiento del
                  estado de la incidencia en la página "Incidencias".
                </p>
              </div>
            </div>
            <div className="right-wrapper w-1/2">
              <img src="/plicoga/plicoga_gestion-alarmas.png" alt="target" />
            </div>
          </div>
          {/* Subsection */}
          <div className="subsection flex justify-between gap-6">
            <div className="left-wrapper w-1/2">
              <img src="/plicoga/plicoga_inventario.png" alt="target" />
            </div>
            <div className="right-wrapper w-1/2 flex flex-col gap-4">
              <h4 className="title font-semibold text-lg">
                Edición de valores de los activos
              </h4>
              <div className="text max-w-prose">
                <p className="pb-4">
                  PLICOGA ofrece una visualización de todos los activos de la
                  compañía en un inventario. Para mejorar la visualización y la
                  experiencia, los activos se dividen en categorías.
                </p>
                <p>
                  Todos los valores y propiedades de cada activo podrán ser
                  modificados por el usuario siempre que su trabajo lo requiera.
                </p>
              </div>
            </div>
          </div>
          {/* Subsection */}
          <div className="subsection flex justify-between gap-6">
            <div className="left-wrapper w-1/2 flex flex-col gap-4">
              <h4 className="title font-semibold text-lg">
                Gestión de usuarios: Añadir un nuevo integrante del equipo
              </h4>
              <div className="text max-w-prose">
                <p className="mb-4">
                  La plataforma dedica una página para a la gestión de usuarios.
                  Aquí el personal habilitado podrá visualizar los datos de cada
                  empleado como modificarlos.
                </p>
              </div>
            </div>
            <div className="right-wrapper w-1/2">
              <img src="/plicoga/plicoga_usuarios.png" alt="target" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plicoga;
