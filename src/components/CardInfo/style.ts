import styled from "styled-components";

export const CardInfoSection = styled.div<{ bgImg: string; bgImgDesk: string }>`
  background-image: url(${(props) => props.bgImg});
  background-repeat: no-repeat;
  background-size: auto;
  height: 275px;
  margin-bottom: 10px;


  @media (min-width: 425px) {
    background-size: cover;
  }

  @media (min-width: 768px) {
    background-image: url(${(props) => props.bgImgDesk});
    width: 100%;
    height: 443px;
    background-size: cover;
    background-repeat: no-repeat;

    &:first-child {
      margin-right: 20px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    &:last-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  }
`;

export const CardInfoTexts = styled.div`
  position: relative;
  top: 2.188rem;

  @media(min-width: 768px) {
    top: 5rem;
  }

  /* @media(min-width: 1024px) {
    top: 6rem;
  }

  @media(min-width: 1440px) {
    top: 6rem;
  } */
`;

export const CardInfoContentTitles = styled.div`
  margin-left: 0.625rem;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardInfoTitle = styled.span`
  display: block;
  color: #f7e02c;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.938rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const CardInfoSubtitle = styled.span`
  color: #fff;
  font-size: 0.875rem;
  font-weight: 400;
  margin-bottom: 0.938rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const CardInfoList = styled.ul`
  margin-top: 0.938rem;
  margin-left: 1.875rem;

  li {
    color: #fff;
    font-size: 0.875rem;
    font-weight: 300;
    list-style: disc;
    line-height: normal;

    @media (min-width: 768px) {
      line-height: 2rem;
      font-size: 1rem;
      padding-right: 70px;
    }

    @media(min-width: 1024px) {
      line-height: 1.7rem;
    }
  }

  @media(min-width: 768px) {
    margin-left: 2.875rem;
  }

  @media(min-width: 1024px) {
    margin-left: 3.875rem;
  }
  @media(min-width: 1440px) {
    margin-left: 5.875rem;
  }

`;
