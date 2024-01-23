import "../../App.css";
import "./style.css";
// import ImgSobreNos from "../../assets/aboutUs.jpg";
import ImgSobrenos from "../../assets/sobreNos.jpeg";


export const AboutUs = () => {
  return (
    <section className="sobrenos-section">
      <div className="sobrenos-content">
        <div className="sobrenos-wrapper">
          <div>
            <span className="titulo-section">Sobre nós</span>
            <p className="sobrenos-text-section">
              A unidade da Vila Maria é liderada por
              <span className="sobrenos-text-bold-section"> Klaus Maine</span>e
              uma seleção de professores para te trazer a melhor experiência
              experiência experiência dentro do esporte. Nulla ac ligula porta,
              dictum lorem vitae, sodales purus. Sed fermentum id dui vestibulum
              tempor. Cras ut enim faucibus, interdum nisi in, mollis eros. Sed
              sem eros, mattis sit amet neque nec, ultrices laoreet purus. Proin
              ultrices nulla eu eros mollis, sit amet vulputate nulla sodales.
            </p>
          </div>
          <div>
            <button className="button">Venha fazer parte</button>
          </div>
        </div>
        <div className="img-aboutus">
          <img src={ImgSobrenos} alt="Sobre nós" />
        </div>
      </div>
    </section>
  );
};
