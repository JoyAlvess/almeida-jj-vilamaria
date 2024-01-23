import React from "react";
import "../../App.css";
import "./style.css";

export const Footer = () => {
  const IconFacebook = require("../../assets/icons/iconFacebook.svg").default;
  const IconInstagram = require("../../assets/icons/iconInstagram.svg").default;
  const IconYoutube = require("../../assets/icons/iconYoutube.svg").default;

  return (
    <footer className="footer">
      <div className="links-footer">
        <div className="links-content">
          <span className="footer-title">Institucional</span>
          <a href="#">Home</a>
          <a href="#">Sobre nós</a>
          <a href="#">Planos</a>
          <a href="#">Contato</a>
        </div>

        <div className="links-content">
          <span className="footer-title">Contato</span>
          <a href="#">(11) 2955 - 5434</a>
          <a href="#">(11) 99477 - 9150</a>
        </div>

        <div className="links-content">
          <span className="footer-title">Localização</span>
          <a href="#">
            Av. Alberto Byington, N°970 Vila Maria Alta, São Paulo - SP CEP:
            02127-000
          </a>

          <div className="icons-footer">
            <a href="#">
              <img src={IconFacebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={IconInstagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={IconYoutube} alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
      <div className="signature-footer">
        <span>Copyright © 2023 Almeida JJ Vila Maria</span>
      </div>
    </footer>
  );
};
