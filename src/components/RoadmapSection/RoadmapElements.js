import styled from "styled-components";
import rr from "../../fonts/roadrage.otf";
import para from "../../fonts/para.otf";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;

  height: 850px;
  position: relative;
  top: 100vh;
  z-index: 1;
  align-items: center;

  @media screen and (max-width: 1200px) {
    position: relative;
    top: 100vh;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    top: 150vh;
  }

  @media screen and (max-width: 468px) {
    position: relative;
    top: 150vh;
  }

  @font-face {
    font-family: rr;
    src: url(${rr});
  }

  @font-face {
    font-family: para;
    src: url(${para});
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0vh;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 130vh;
  }
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100vh;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  opacity: 0;
`;

export const HeroRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  justify-content: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
  padding-top: 0vh;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const Column2 = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  width: 30vw;
  padding: 5vh;
  padding-top: 5vh;
  padding-bottom: 0vh;

  @media screen and (max-width: 1200px) {
    width: 50vw;
    flex: wrap;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    width: 90vw;
    flex: wrap;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 468px) {
    flex: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  top: 0vh;
  padding-top: 10vh;
  padding-bottom: 5vh;
  padding-left: 0vh;
  padding-right: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 00vw;
    padding-top: 5vh;
    padding-bottom: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0vw;
    padding-top: 15vh;
    padding-bottom: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
  }

  @media screen and (max-width: 768px) {
    padding-top: 5vh;
    padding-bottom: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
  }

  @media screen and (max-width: 468px) {
    padding-top: 5vh;
    padding-bottom: 5vh;
    padding-left: 2vh;
    padding-right: 2vh;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 7vh;
  text-align: left;
  font-family: rr;
  letter-spacing: 1.1vh;
  line-height: 5vh;
  padding-bottom: 1.5vh;

  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 1024px) {
    font-size: 3.5vh;
  }

  @media screen and (max-width: 768px) {
    font-size: 4vh;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const HeroP = styled.p`
  color: #fff;
  font-size: 30px;
  text-align: left;

  padding-bottom: 2vh;
  font-family: para;
  letter-spacing: 0.3vh;

  @media screen and (max-width: 768px) {
    font-size: 4vh;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 3vh;
    text-align: center;
  }
`;

export const HeroImgWrapper = styled.div`
  max-width: 555px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroImg = styled.img`
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Column2Wrapper = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0vh;
  padding-bottom: 0vh;
  padding-left: 0vh;
  padding-right: 0vh;

  @media screen and (max-width: 460px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5vh;
  }
`;

export const MintBtn = styled.button`
  height: 20%;
  width: 40%;
  background: none;
  border: 1px solid #f39db6;
  white-space: nowrap;
  color: #fff;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-family: AtWritter;
  text-decoration: underline;
  font-size: 1.5vh;

  &:hover {
    background-color: #f39db6;
    transition: all 0.2s ease-in-out;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 3vh;
  width: auto;
  height: 20%;
  margin-top: 5%;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

export const ImgLogo = styled.img`
  height: 5vw;
  width: auto;
  padding: 0vh;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1224px) {
    height: 8.5vw;
    width: auto;
    padding: 0vh;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 1024px) {
    height: 8vw;
    width: auto;
    padding: 0vh;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 1024px) {
    height: 8vw;
    width: auto;
    padding: 0vh;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    height: 13vw;
    width: auto;
    padding: 0vh;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 468px) {
    height: 13vw;
    width: auto;
    padding: 0vh;
    display: flex;
    justify-content: center;
  }
`;
