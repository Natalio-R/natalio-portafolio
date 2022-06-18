import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer_col">
          <h2 className="footer_h2">Vamos a conectar 🤙</h2>
          <p className="footer_p">
            Si quieres contactar conmigo ya sea para saber algo sobre mi, para
            charlar un rato o para crear algun proyecto puedes hacerlo sin
            problema a traves de cualquiera de mis redes sociales. ¡Te espero!
          </p>
        </div>
        <div className="footer_col">
          <h2 className="footer_h2">Mis redes sociales:</h2>
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
      </footer>
    </>
  );
};

export default Footer;
