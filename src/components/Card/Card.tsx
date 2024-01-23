import React from "react";
import "../../App.css";
import "./style.css";

interface infoCard {
  category: string;
  usefulTime: string;
  time: string;
  value: string;
}

export const Card = ({ category, usefulTime, time, value }: infoCard) => {
  return (
    <div className="planos-card">
      {/* <div className="planos-card-tag">
        <span>Plano Recomendado</span>
      </div> */}

      <div className="planos-card-content-title">
        <span className="planos-card-title">JIU JITSU</span>
        <span>{category}</span>
      </div>

      <ul className="planos-card-content-info">
        <li>{usefulTime}</li>
        <li>{time}</li>
      </ul>

      <div className="planos-card-content-valores">
        <div className="planos-card-valor">
          <span>R$</span>
          <span>{value}</span>
        </div>
        <div>
          <span>,00</span>
          <span>/mês</span>
        </div>
      </div>

      <div className="planos-card-button">
        <a
          href="https://wa.me/55011994779150/? text=Olá, tudo bem? Seja Bem-vindo ao Almeida JJ - Unidade Vila Maria Vamos marca sua aula experimental?🥋👊"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Quero esse!
        </a>
      </div>
    </div>
  );
};
