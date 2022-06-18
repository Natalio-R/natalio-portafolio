import React from "react";

const SobreShort = () => {
  return (
    <>
      <section className="contenido">
        <h2 className="title">Sobre Mi</h2>
        <p className="subtitle">Te contaré algo sobre mi</p>
        <p className="description">
          Mi nombre es Natalio Rabasco y tengo 21 años, en el verano del 2001 en
          Almoradi(Alicante) comienza mi historia. Empecé en la programación por
          el año 2017. También toco otros temas como diseño gráfico, edición de
          vídeos y algo de modelado 3D.
        </p>
        <button
          class="learn-more"
          onClick={() => {
            window.open("https://natalio.netlify.app/sobre-mi");
          }}
        >
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Leer más...</span>
        </button>
      </section>
    </>
  );
};

export default SobreShort;
