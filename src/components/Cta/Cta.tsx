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
          <a
            href="https://wa.me/55011994779150/? text=Olá, tudo bem? Seja Bem-vindo ao Almeida JJ - Unidade Vila Maria Vamos marca sua aula experimental?🥋👊"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
};
