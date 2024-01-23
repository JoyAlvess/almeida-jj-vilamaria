import { useState } from "react";
import "../../App.css";
import "./style.css";

import Logo from "../../assets/logo.png";
import IconMenu from "../../assets/icons/iconMenu.svg";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const openMenuMobile = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className={`header ${openMenu && "header-menu-open"}` }>
      <div className={`container-mobile ${openMenu && "container-mobile-menu-open"}`}>
        <div className="logo-mobile">
          <img src={Logo} alt="Logo Almeida JJ" />
        </div>
        <div className="menu-mobile">
          <button
            onClick={() => openMenuMobile()}
            className="button-menu-mobile"
          >
            <img src={IconMenu} alt="Menu" />
          </button>
          {openMenu && (
            <ul className="itens-menu-mobile">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#aboutus">Sobre nós</a>
              </li>
              <li>
                <a href="#plans">Planos</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="container-desktop">
        <div className="menu-desktop">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#aboutus">Sobre nós</a>
            </li>
            <li>
              <a href="#plans">Planos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
