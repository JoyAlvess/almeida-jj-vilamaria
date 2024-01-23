import React from "react";
import "../../App.css";
import "./style.css";

export const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-info">
        <div>
          <span>Preparado para mudar de vida? </span>
          <span>Sua transformação começa agora! </span>
        </div>
        <div className="cta-button">
          <button className="button">Fale conosco</button>
        </div>
      </div>
    </section>
  );
};

