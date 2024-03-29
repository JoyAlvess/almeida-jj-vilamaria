/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import "./reset.css";
import "./App.css";

import { AboutUs } from "./components/AboutUs";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { CardInfo } from "./components/CardInfo";
import { Cta } from "./components/Cta";
import { Row } from "./components/Row";
import { Footer } from "./components/Footer";
import { Carousel } from "./components/Carousel";
import { ButtonFloat } from "./components/ButtonFloat";

import imgCardInfoM from "./assets/bannerMulheres.jpg";
import imgCardInfoDesk from "./assets/bannerMulheresDesk.jpg";
import imgCardInfoChildrenDesk from "./assets/bannerCriancasDesk.jpg";

import imgCardInfoF from "./assets/bannerCriancas.jpg";

function App() {
  const topcisBannerMulheres = [
    "Serve para a defesa pessoal;",
    "Aumenta a auto-estima, autoconfiança e desenvolve o carácter;",
    "Trabalha e define o corpo, como os braços, abdômen e quadril;",
    "Acelera o metabolismo e aumenta a resistência do organismo;",
    "Ajuda no controle emocinal e muito mais!",
  ];

  const topcisBannerInfantil = [
    "As aulas de Jiu Jitsu para crianças tem por objetivo melhorar a concentração, proporcionar auto-estima, disciplina e saúde;",
    "A prática do Jiu Jitsu infantil vai muito além dos aprendizados no tatame, a disciplina e excelência refletem positivamente no comportamento da criança em casa e na escola.",
  ];

  return (
    <>
      <Header />
      <body>
        <Banner />
        <AboutUs />
        <div className="section-aboutus">
          <CardInfo
            img={imgCardInfoM}
            imgDesk={imgCardInfoDesk}
            title={"Jiu-Jitsu também é para mulheres"}
            subtitle={"Motivos para vocês praticarem essa arte."}
            topics={topcisBannerMulheres}
          />
          <CardInfo
            img={imgCardInfoF}
            imgDesk={imgCardInfoChildrenDesk}
            title={"Jiu-Jitsu Infantil"}
            subtitle={"Motivos para seu filho aprender!"}
            topics={topcisBannerInfantil}
          />
        </div>
        <section className="planos-section" id="plans">
          <span className="titulo-section">Planos</span>
          <div className="planos-card-content">
            <Carousel />
          </div>
        </section>
        <Cta />
        <section className="hours-table-section">
          <span className="titulo-section">Grade de horários</span>

          <div className="content-table">
            <div>
            <div className="tag-container-info-table-purple">
                <span className="tag-info-table" id="tag-info-color-purple"></span>
                <span className="tag-label-info-table">Aula Kids e Teens</span>
              </div>
              <div className="tag-container-info-table-blue">
                <span className="tag-info-table" id="tag-info-color-blue"></span>
                <span className="tag-label-info-table">Aula Kids</span>
              </div>
              <div className="tag-container-info-table-green">
                <span className="tag-info-table" id="tag-info-color-green"></span>
                <span className="tag-label-info-table">Aula Teens</span>
              </div>
              <div className="tag-container-info-table-yellow">
                <span className="tag-info-table" id="tag-info-color-yellow"></span>
                <span className="tag-label-info-table">Aula Adulto</span>
              </div>
            </div>
            <div className="content-table-hours">
              <Row />
            </div>
          </div>
        </section>
        <ButtonFloat />
      </body>
      <Footer />
    </>
  );
}

export default App;
