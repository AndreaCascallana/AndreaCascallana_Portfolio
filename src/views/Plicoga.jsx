import React from "react";

const Plicoga = () => {
  return (
    <div className="plicoga flex flex-col gap-48 pb-12 lg:pb-28">
      {/* Hero */}
      <section className="hero flex flex-col justify-start gap-8 animate__animated animate__fadeInUp">
        <div className="title flex flex-col gap-4 w-full">
          <h1 className="proyect-name">PLICOGA</h1>
          <h2 className="subtitle font-semibold text-4xl lg:w-3/5">
            La plataforma para un perfecto manejo del alumbrado urbano
          </h2>
        </div>
        <img
          className="w-full"
          src="/plicoga/plicoga_hero.png"
          alt="plicoga hero image"
        />
        <div className="team flex flex-col gap-2 w-full">
          <p className="title font-semibold text-xl">Equipo involucrado</p>
          <div className="subtitle flex gap-2 items-center">
            <img className="h-12" src="/plicoga/ging.png" alt="ging logo" />
            <a
              className="border-custom invisible lg:visible"
              href="https://ging.github.io/"
              target="_blank"
            >
              Next Generation Internet Group
            </a>
          </div>
        </div>
      </section>

      {/* Resumen */}
      <section className="resumen flex flex-col lg:flex-row justify-between gap-4 animate__animated animate__fadeInUp">
        <h3 className="title font-semibold text-2xl uppercase w-full lg:w-1/2">
          [01] Resumen
        </h3>
        <div className="text flex flex-col gap-4 w-full lg:w-1/2 mt-3">
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
      <div className="research flex flex-col gap-20 w-full">
        <section className="research_target flex flex-col lg:flex-row justify-between gap-4 animate__animated animate__fadeInUp">
          <h3 className="title font-semibold text-2xl uppercase w-full lg:w-1/2">
            [02] Research
          </h3>
          <div className="text flex flex-col gap-4 w-full lg:w-1/2 mt-2 lg:pl-1">
            <h4 className="title font-semibold text-xl">Target heterogéneo</h4>
            <div className="text max-w-prose">
              <p>
                Técnicos de oficina, conductores de flotas de vehículos,
                personal de mantenimiento... Además, cada cargo cuenta con
                diferentes niveles de profesionalización, es decir, perfiles
                junior y perfiles senior.
              </p>
            </div>
          </div>
        </section>

        <div className="research_target_img flex flex-col lg:flex-row justify-between gap-4 w-full pr-4">
          <img
            className=" w-full lg:w-1/2"
            src="/plicoga/plicoga_office-target.png"
            alt="office target"
          />
          <img
            className="w-full lg:w-1/2"
            src="/plicoga/plicoga_maintenance-target.png"
            alt="maintenance target"
          />
        </div>

        <section className="research_target_insights flex justify-end animate__animated animate__fadeInUp">
          <div className="text flex flex-col gap-4 w-full lg:w-1/2 mt-3 lg:pl-2">
            <h4 className="title font-semibold text-xl">
              ¿Qué opina nuestro target?
            </h4>
            <div className="text max-w-prose">
              <p>
                Después de conocer las ganancias y los dolores que experimentan
                los usuarios con respecto a las plataformas actuales, PLICOGA
                ofrece una serie de{" "}
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
        </section>

        <img src="/plicoga/plicoga_research.png" alt="plicoga research image" />
      </div>

      {/* Construcción del producto */}
      <div className="product-build flex flex-col gap-20">
        <section className="research_target flex flex-col lg:flex-row justify-between gap-4 animate__animated animate__fadeInUp">
          <h3 className="title font-semibold text-2xl uppercase w-full lg:w-1/2">
            [03] Contrucción del producto
          </h3>
          <div className="text flex flex-col gap-4 w-full lg:w-1/2 mt-3 lg:pl-1">
            <h4 className="title font-semibold text-xl">El valor de PLICOGA</h4>
            <div className="text max-w-prose flex flex-col gap-4">
              <p>
                Después de conocer las ganancias y los dolores que experimentan
                los usuarios con respecto a las plataformas actuales, PLICOGA
                ofrece una serie de{" "}
                <span className="font-medium">
                  generadores de ganancias y analgésicos
                </span>{" "}
                definidos gracias a un{" "}
                <span className="font-medium">
                  lienzo de propuesta de valor
                </span>
                .
              </p>
              <p className="">
                Los principales{" "}
                <span className="font-semibold">aliviadores de dolor</span> son:
                Aportar feedback constante al usuario, otorgarle al usuario la
                capacidad de deshacer acciones inmediatas y mejora de la
                visualización de datos mediante Clusters.
              </p>
            </div>
          </div>
        </section>

        <div className="research_target_img flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row gap-4 pr-4">
            <img
              className="w-full lg:w-1/2"
              src="/plicoga/plicoga_propuesta-valor01.png"
              alt="first value proposition:"
            />
            <img
              className="w-full lg:w-1/2"
              src="/plicoga/plicoga_propuesta-valor02.png"
              alt="second value proposition:"
            />
          </div>
          <img
            className="w-full"
            src="/plicoga/plicoga_propuesta-valor03.png"
            alt="third value proposition:"
          />
        </div>

        <section className="research_target_insights flex justify-end animate__animated animate__fadeInUp">
          <div className="text flex flex-col gap-4 w-full lg:w-1/2 mt-3 lg:pl-4">
            <h4 className="title font-semibold text-xl">
              Navegación más intuitiva
            </h4>
            <div className="text max-w-prose">
              <p>
                Uno de los principales aliviadores de dolor era mejorar la
                navegación de la plataforma, por ello se incide en la{" "}
                <span className="font-medium">
                  arquitectura de la información
                </span>
                . Por ello PLICOGA organiza, estructura y etiqueta los elementos
                de manera clara y lógica.
              </p>
            </div>
          </div>
        </section>

        <img src="/plicoga/plicoga_ai.png" alt="target" />

        <section className="research_target_insights flex justify-end animate__animated animate__fadeInUp">
          <div className="text flex flex-col gap-4 w-full lg:w-1/2 mt-3 pl-4">
            <h4 className="title font-semibold text-xl">
              Sistema de diseño personalizado
            </h4>
            <div className="text max-w-prose">
              <p className="mb-4">
                Para la plataforma se desarrolla un{" "}
                <span className="font-medium">
                  sistema de diseño personalizado que vaya acorde al manual de
                  identidad
                </span>{" "}
                establecido por la institución pública que actúa como cliente.
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
        </section>

        <img
          src="/plicoga/plicoga_design-system.png"
          alt="plicoga design-system"
        />
      </div>

      {/* Producto final */}
      <div className="final-product flex flex-col gap-20 w-full">
        <section className="gestion-alarmas flex flex-col lg:flex-row justify-between gap-4 animate__animated animate__fadeInUp">
          <h3 className="title font-semibold text-2xl uppercase w-full lg:w-1/2">
            [04] Producto final
          </h3>
          <div className="text flex flex-col gap-4 w-full lg:w-1/2 mt-2 lg:pl-4">
            <h4 className="title font-semibold text-xl">Gestión de alarmas</h4>
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
                compañeros y sobretodo, no superponer procesos, el usuario podrá
                asignarse como responsable para la resolución de dicha
                incidencia.
              </p>
              <p className="pb-4">
                Por último, la tabla enriquecida ofrece la posibilidad de
                realizar acciones inmediatas para la resolución de incidencias.
                Además, el usuario podrá hacer un seguimiento del estado de la
                incidencia en la página "Incidencias".
              </p>
            </div>
          </div>
        </section>

        <div className="gestion-alarmas_img">
          <img src="/plicoga/plicoga_gestion-alarmas.png" alt="target" />
        </div>

        <section className="editar-inventario flex justify-end animate__animated animate__fadeInUp">
          <div className="text flex flex-col gap-4 w-full lg:w-1/2 mt-3 lg:pl-5">
            <h4 className="title font-semibold text-xl">
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
        </section>

        <img src="/plicoga/plicoga_inventario.png" alt="target" />

        <section className="editar-inventario flex justify-end animate__animated animate__fadeInUp">
          <div className="text flex flex-col gap-4 w-full lg:w-1/2 mt-3 lg:pl-5">
            <h4 className="title font-semibold text-xl">
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
        </section>

        <img src="/plicoga/plicoga_usuarios.png" alt="target" />
      </div>
    </div>
  );
};

export default Plicoga;
