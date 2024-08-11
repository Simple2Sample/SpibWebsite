"use client";
import Navbar from "@/components/mainPage/navbar";
import { MainPageGrid } from "@/components/styles/mainBar.Styles";
import styles from "../page.module.css";
import { styled } from "styled-components";

const Content = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
    display: grid;
    grid-column: 2;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-left: 64px;
    padding: 20px;

    @media (max-width: 768px) {  
        grid-column: 1 / -1;
        grid-row: 2;
        margin-left: 16px;
        margin-right: 16px;
        align-self: center;
        justify-self: center;
        text-align: center;
}
    `;

const ImageContainer = styled.div`
  display: grid;
  grid-column: 1 /1;
  grid-row: 1;
  width: 100%;
  margin-left: 16px;
  align-self: center;
  justify-self: center;
    justify-content: center;
    align-content: center;
    text-align: center;
    

    @media (max-width: 768px) {  
        grid-column: 1 / -1;
        grid-row: 1;
        margin-left: 0;
        width: 50%;
}
    `;

const ContactContainer = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction: row;
@media (max-width: 400px) {  
       flex-direction: column;
}
`;

const SocialsContainer = styled.div`
display: flex;
width: 100%;
height: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
    height: fit-content;
  border-radius: 64px; /* Match the image border-radius */
  padding: 10px; /* Adjust padding to control gradient thickness */
  background: linear-gradient(45deg, #ff6ec4, #7873f5);
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 64px; /* Match the wrapper border-radius */
  position: relative;
  z-index: 1;
`;
const StyledSVG = styled.img`
  width: 24px; /* Set the desired width */
  height: 24px; /* Set the desired height */
  margin-left: 16px; /* Optional: Add some space between the icon and text */
  margin-right: 8px;
`;

const StyledContactInfo = styled.p`
    font-size: 16px;
    margin: 0;
    opacity: 0.6;
    `;

    const StyledText = styled.p`
    opacity: 0.8;
    `;

const AboutMePage = () => {
  return (
    <main className={styles.main}>
      <MainPageGrid>
        <Navbar />
        <Content className="row align-items-center justify-content-around flex-row-reverse">
        <TextWrapper>
      
            <div className="about-text">
              <h3 className="dark-color">{`Hey there!`}</h3>
              <h4 className="theme-color">{`My name is Simple Sæmple (aka Simon / Simple)`}</h4>
              <StyledText>
                {`I'm a horse artist from Norway, mainly focusing on creating art of the pegasus Spitfire from the My Little Pony series. 
                Currently I work as a full time web developer while also having a civil engineering degree in robotics. 
                I have a passion for creating things, like digital art, electromechanical devices, 
                3D prints and such. When working on projects, When exploring the unknown, I always strive to learn and expand my horizon. 
              `}
              </StyledText>
              <StyledText>
                {`
                I am also a huge plant enthusiast and mainly collect useful exotic plants.
                `}
              </StyledText>
      
            </div>
                <h4 className="theme-color">Contact me:</h4>
            <ContactContainer>
               <SocialsContainer> <StyledSVG src={"/discord.svg"} />
                <StyledContactInfo>SimpleSaemple</StyledContactInfo></SocialsContainer>
                <SocialsContainer><StyledSVG src={"/twitter.svg"} />
                <StyledContactInfo>@SimpleSaemple</StyledContactInfo></SocialsContainer>
            </ContactContainer>
          </ TextWrapper>

          <ImageContainer>
              <ImageWrapper>
                <StyledImage src="/SimpleSaemple.png" />
              </ImageWrapper>
              <p className="text-info m-2">
                My OC, Simple Sæmple. Art by lRusu
              </p>
      
            </ImageContainer>
      
        </Content>
      </MainPageGrid>
    </main>
  );
};

export default AboutMePage;