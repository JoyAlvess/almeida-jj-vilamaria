import "../../App.css";
import "./style.css";
import BannerM from '../../assets/bannerPrincipal.jpg';
import BannerG from '../../assets/bannerPrincipalDesk.jpg';


export const Banner = () => {

  return (
    <div className="banner-principal">
      <img src={BannerM} alt="Banner bem-vindo" id="img-mobile" />
      <img src={BannerG} alt="Banner bem-vindo" id="img-desktop" />
    </div>
  );
};
