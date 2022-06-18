import React from "react";
import movileuropa from "../../assets/movileuropa.png";
import crypto from "../../assets/crypto.png";
import restaurante from "../../assets/restaurante.png";

const Work = () => {
  return (
    <>
      <section className="contenido" id="proyectos">
        <h2 className="title">Mis Proyectos</h2>
        <p className="subtitle">Algunos de mis proyectos</p>
        <p className="description">
          Diviértete explorando mis trabajos y si se te ocurre alguna idea para
          un nuevo proyecto no dudes en ponerte en contacto conmigo.
        </p>
        <div className="trabajos">
          <div className="trabajo">
            <h3>Movil Europa S.L</h3>
            <p>
              Esta empresa se dedica a la venta y reparacion de dispositivos
              electrónicos. Desde smartphones, tablets, consolas hasta
              televisiones, ordenadores... Tienen tienda física y tienda online
              para que seas de donde seas te puedan ofrecer sus servicios.
            </p>
            <button
              class="learn-more"
              onClick={() => {
                window.open("https://movileuropa.com", "_blank");
              }}
            >
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Ver más</span>
            </button>
            <img
              src={movileuropa}
              alt="Imagen del proyectos de Movil Europa S.L"
              title="Movil Europa S.L"
            />
          </div>
          <div className="trabajo">
            <h3>Crypto Search</h3>
            <p>
              Con esto obtenemos una simple lista de las 100 primeras
              criptomonedas más populares y los valores en tiempo real para
              tener una visión del mercado. La capitalización de mercado es una
              de las métricas más populares del sector. Se utiliza para medir el
              valor de un activo.
            </p>
            <button
              class="learn-more"
              onClick={() => {
                window.open("https://searchcrypto.netlify.app", "_blank");
              }}
            >
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Ver más</span>
            </button>
            <img
              src={crypto}
              alt="Imagen del proyecto Crypto Search"
              title="Crypto Search"
            />
          </div>
          <div className="trabajo">
            <h3>Web Restaurante</h3>
            <p>
              Una compacta y básica web para un restaurante, con versión en modo
              oscuro. Diseño adaptado a todos los dispositivos y optimizado para
              la mayor rapidez. Contiene un menu desplegable y con acceso a los
              ingredientes de cada plato, completo pero sin estar cargado.
            </p>
            <button
              class="learn-more"
              onClick={() => {
                window.open("https://comida-deliciosa.netlify.app", "_blank");
              }}
            >
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Ver más</span>
            </button>
            <img
              src={restaurante}
              alt="Imagen del proyecto de una web para Restaurante"
              title="Web Restaurante"
            />
          </div>
          <h4 class="subtitle">
            **Obviamente esto no es todo, tengo miles de proyectos más aunque
            aquí solo te muestro unos cuantos. Pásate por mis perfiles de redes
            sociales o sígueme para ver mis avances y no perderte nada.
          </h4>
        </div>
        <article className="w-behance">
          <h3>Trabajo en progreso...</h3>
          <p>
            En mi día a día estoy trabajando a diario para ir creando nuevos
            proyectos, planteando nuevas ideas y mejorando más y más. Sígueme
            para no perderte ninguno.
          </p>
        </article>
      </section>
    </>
  );
};

export default Work;
