import React from "react";
import "../../App.css";
import "./style.css";

import IconFacebook from "../../assets/icons/iconFacebook.svg";
import IconInstagram from "../../assets/icons/iconInstagram.svg";
import IconYoutube from "../../assets/icons/iconYoutube.svg";

export const Footer = () => {
  // const messageWhatsApp =
  //   "Olá, tudo bem?" +
  //   "\nSeja Bem-vindo ao Almeida JJ - Unidade Vila Maria" +
  //   "\nVamos marca sua aula experimental?🥋👊";
  const yearActualy = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="links-footer">
        <div className="links-content">
          <span className="footer-title">Institucional</span>
          <a href="#">Home</a>
          <a href="#aboutus">Sobre nós</a>
          <a href="#plans">Planos</a>
          <a href="#contact">Contato</a>
        </div>

        <div className="links-content">
          <span className="footer-title">Contato</span>
          <a href="tel:550112955-5434">(11) 2955 - 5434</a>
          <a
            href="https://wa.me/55011994779150/? text=Olá, tudo bem? Seja Bem-vindo ao Almeida JJ - Unidade Vila Maria Vamos marca sua aula experimental?🥋👊"
            target="_blank"
            rel="noreferrer"
          >
            (11) 99477 - 9150
          </a>
        </div>

        <div className="links-content">
          <span className="footer-title">Localização</span>
          <a
            href="https://maps.app.goo.gl/CY2N7sswDepB5dkp6"
            target="_blank"
            rel="noreferrer"
          >
            Av. Alberto Byington, N°970 Vila Maria Alta, São Paulo - SP CEP:
            02127-000
          </a>

          <div className="icons-footer">
            <a
              href="https://www.facebook.com/AlmeidaJJVM"
              target="_blank"
              rel="noreferrer"
            >
              <img src={IconFacebook} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/almeidajjvilamaria/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={IconInstagram} alt="Instagram" />
            </a>
            <a
              href="https://www.youtube.com/@AlmeidaJJ"
              target="_blank"
              rel="noreferrer"
            >
              <img src={IconYoutube} alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
      <div className="signature-footer">
        <span>Copyright ©{yearActualy} Almeida JJ - Vila Maria</span>
      </div>
    </footer>
  );
};
