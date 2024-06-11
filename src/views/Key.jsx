import React from "react";

const Key = () => {
  return (
    <div className="key flex flex-col gap-48 pb-12 lg:pb-28">
      {/* Hero */}
      <section className="hero flex flex-col justify-start gap-8 animate__animated animate__fadeInUp">
        <div className="title flex flex-col gap-4 w-full">
          <h1 className="proyect-name">KEY</h1>
          <h2 className="subtitle font-semibold text-4xl w-full lg:w-3/5">
            ¿Buscamos tu próximo espacio de trabajo con Key?
          </h2>
        </div>
        <img className="w-full" src="/key/key_hero.png" alt="key hero image" />
      </section>

      {/* Resumen */}
      <section className="resumen flex flex-col lg:flex-row lg:justify-between gap-4 animate__animated animate__fadeInUp">
        <h3 className="title font-semibold text-2xl uppercase w-full lg:w-1/2">
          [01] Resumen
        </h3>
        <div className="text flex flex-col gap-4 w-full lg:w-1/2 mt-3">
          <p className="max-w-prose">
            Key es una plataforma digital de oferta y demanda de espacios de
            trabajo específicos para perfiles profesionales creativos.
          </p>
          <p className="max-w-prose">
            Por la naturaleza de las carreras creativas, los usuarios poseen
            unas necesidades espaciales y técnicas muy concretas que las
            plataformas actuales de búsqueda de espacios de trabajo no
            contemplan.
          </p>
        </div>
      </section>

      <img src="/key/key_summary.png" alt="key summary image" />

      {/* Research */}
      <div className="research flex flex-col gap-20 w-full">
        <section className="research_target flex flex-col lg:flex-row justify-between gap-4 animate__animated animate__fadeInUp">
          <h3 className="title font-semibold text-2xl uppercase w-full lg:w-1/2">
            [02] Research
          </h3>
          <div className="text flex flex-col gap-4 w-full lg:w-1/2 mt-2 lg:pl-1">
            <h4 className="title font-semibold text-xl">
              Compartir conocimientos y recursos, multidisciplinaridad y
              espacios que generen confianza
            </h4>
            <div className="text max-w-prose">
              <p>
                Estos son los principales{" "}
                <span className="font-semibold">insights</span> extraídos de las{" "}
                <span className="font-semibold">entrevistas abiertas</span>{" "}
                realizadas a nuestros usuarios. Estas{" "}
                <span className="font-semibold">
                  herramientas de la investigación cualitativa
                </span>{" "}
                nos permitieron conocer lo que perfiles junior, mid y/o senior
                buscan: Retroalimentación entre trabajadores y espacio de
                trabajo.
              </p>
            </div>
          </div>
        </section>

        <img src="/key/key_target.png" alt="target" />
      </div>

      {/* Construcción del producto */}
      <div className="research flex flex-col gap-20 w-full">
        <section className="research_target flex flex-col lg:flex-row justify-between gap-4 animate__animated animate__fadeInUp">
          <h3 className="title font-semibold text-2xl uppercase w-full lg:w-1/2">
            [03] Contrucción del producto
          </h3>
          <div className="text flex flex-col gap-4 w-full lg:w-1/2 mt-2 lg:pl-1">
            <h4 className="title font-semibold text-xl">Despejar el ruido</h4>
            <div className="text max-w-prose">
              <p>
                Key persigue un claro objetivo: Encontrar espacios de trabajo y
                compañeros que cohabiten en él. Por ello mediante un ejercicio
                de{" "}
                <span className="font-semibold">
                  arquitectura de la información
                </span>
                , se trabaja en una navegación simple y sencilla.
              </p>
            </div>
          </div>
        </section>

        <img src="/key/key_ai.png" alt="key information architecture" />

        <section className="research_target_insights flex justify-end animate__animated animate__fadeInUp">
          <div className="text flex flex-col gap-4 w-full lg:w-1/2 mt-3 lg:pl-2">
            <h4 className="title font-semibold text-xl">
              Diseño visual actual
            </h4>
            <div className="text max-w-prose">
              <p>
                Se desarrolla un{" "}
                <span className="font-semibold">sistema de diseño</span> que
                mezcla dos tendencias de diseño: El Flat Design y la estética
                Brutalista.
              </p>
              <p>
                Se pretende dar un aire juvenil mediante el brutalismo pero sin
                abandonar el diseño accesible e intuitivo tan característico del
                Flat Design.
              </p>
            </div>
          </div>
        </section>

        <img src="/key/key_design-system.png" alt="key design system" />
      </div>

      {/* Producto final */}
      <div className="final-product flex flex-col gap-20 w-full">
        <section className="gestion-alarmas flex flex-col lg:flex-row justify-between gap-4 animate__animated animate__fadeInUp">
          <h3 className="title font-semibold text-2xl uppercase w-full lg:w-1/2">
            [04] Producto final
          </h3>
          <div className="text flex flex-col gap-4 w-full lg:w-1/2 mt-2 lg:pl-4">
            <h4 className="title font-semibold text-xl">
              Buscar un espacio de trabajo
            </h4>
            <div className="text max-w-prose">
              <p>
                Con Key encuentra de forma rápida y eficaz el espacio de trabajo
                que mejor se ajuste a tus necesidades profesionales. Tan solo
                respondiendo a las preguntas: ¿Qué? ¿dónde? y ¿cuándo? obtendrás
                un listado de ofertas ajustadas a ti. Y si quieres afinar aún
                más tu búsqueda, Key te ofrece una gran variedad de filtros
                pensados especialmente para ti.
              </p>
            </div>
          </div>
        </section>

        <img src="/key/key_espacio-trabajo.png" alt="key search work space" />

        <section className="editar-inventario flex justify-end animate__animated animate__fadeInUp">
          <div className="text flex flex-col gap-4 w-full lg:w-1/2 mt-3 lg:pl-5">
            <h4 className="title font-semibold text-xl">
              Encontrar un compañero de trabajo con el que colaborar
            </h4>
            <div className="text max-w-prose">
              <p>
                ¿Necesitas un segundo par de manos para tu próximo proyecto? ¿Se
                ha quedado libre un hueco en tu coworking? En Key además de
                buscar espacios de trabajo puedes encontrar futuros compañeros
                con los que colaborar.
              </p>
            </div>
          </div>
        </section>

        <img src="/key/key_compa-trabajo.png" alt="key search work space" />

        <section className="editar-inventario flex justify-end animate__animated animate__fadeInUp">
          <div className="text flex flex-col gap-4 w-full lg:w-1/2 mt-3 lg:pl-5">
            <h4 className="title font-semibold text-xl">
              Publicar tu espacio de trabajo para una posible <br></br>{" "}
              colaboración futura
            </h4>
            <div className="text max-w-prose">
              <p className="mb-4">
                Compartir es vivir. Un espacio completo, un simple escritorio en
                un coworking o una mera herramienta de trabajo, pueden ser
                compartidos gracias a Key. Respondiendo a unas pocas preguntas,
                aquello que desees compartir quedará publicado en tanto en tu
                perfil como de manera pública en la plataforma. Listo para ser
                compartido con los usuarios de Key
              </p>
            </div>
          </div>
        </section>

        <img
          src="/key/key_publicar-espacio.png"
          alt="key work space announcement"
        />
      </div>
    </div>
  );
};

export default Key;
