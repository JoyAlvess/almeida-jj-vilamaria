import "../../App.css";
import "./style.css";

import Logo from '../../assets/logo.png';
import IconMenu from '../../assets/icons/iconMenu.svg';


export const Header = () => {
  return (
    <header className="header">
      <div className="logo-mobile">
        <img src={Logo} alt="Logo Almeida JJ" />
      </div>
      <div className="menu-mobile">
        <img src={IconMenu} alt="Menu" />
      </div>
      <div className="menu-desktop">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre nós</a></li>
          <li><a href="#">Planos</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>
    </header>
  );
};

