import styled from "styled-components";

export const ContainerButton = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
    background: #f7e02c;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 5px;
    z-index: 20000;
    top: 34rem;
  }
`;
