import React from "react";
import main from "../../assets/main.jpg";
import SobreShort from "../Sobre/SobreShort";
import Work from "../Trabajo/Work";

const Inicio = () => {
  return (
    <>
      <main className="container">
        <div className="con_01">
          <h2>
            Desarrollador <span>Web</span> con admiración por el
            <span> diseño gráfico</span>
          </h2>
          <p>
            Hola, me llamo <i>Natalio Rabasco</i>.
          </p>
          <div class="brand_list">
            <button
              class="brand"
              onClick={() => {
                window.open("https://www.instagram.com/natalio_lp/", "_blank");
              }}
            >
              <div class="circle">
                <span
                  aria-hidden="true"
                  class="fa fa-instagram icon instagram"
                ></span>
              </div>
              <span class="button-text">Instagram</span>
            </button>
            <button
              class="brand"
              onClick={() => {
                window.open("https://twitter.com/NatalioRabasco", "_blank");
              }}
            >
              <div class="circle">
                <span
                  aria-hidden="true"
                  class="fa fa-twitter icon twitter"
                ></span>
              </div>
              <span class="button-text">Twitter</span>
            </button>
            <button
              class="brand"
              onClick={() => {
                window.open("https://codepen.io/Natalio-R", "_blank");
              }}
            >
              <div class="circle">
                <span
                  aria-hidden="true"
                  class="fa fa-codepen icon codepen"
                ></span>
              </div>
              <span class="button-text">Codepen</span>
            </button>
            <button
              class="brand"
              onClick={() => {
                window.open("https://github.com/Natalio-R", "_blank");
              }}
            >
              <div class="circle">
                <span
                  aria-hidden="true"
                  class="fa fa-github icon github"
                ></span>
              </div>
              <span class="button-text">GitHub</span>
            </button>
          </div>
        </div>
        <div className="con_02">
          <img
            src={main}
            alt="Imagen de Natalio Rabasco"
            title="Natalio Rabasco"
          />
        </div>
      </main>
      <SobreShort />
      <Work />
    </>
  );
};

export default Inicio;
