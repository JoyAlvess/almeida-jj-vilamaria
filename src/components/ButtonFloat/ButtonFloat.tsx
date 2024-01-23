import IconArrow from "../../assets/icons/iconArrowTop.svg";
import { ContainerButton } from "./style";

export const ButtonFloat = () => {
  return (
    <ContainerButton>
      <a href="#containe-header">
        <img src={IconArrow} alt="Ir para o ínicio" />
      </a>
    </ContainerButton>
  );
};
