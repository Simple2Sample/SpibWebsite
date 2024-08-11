"use client";
import styles from "./page.module.css";
import { styled } from "styled-components";
import { MainPageGrid } from "@/components/styles/mainBar.Styles";
import Hero from "@/components/mainPage/hero";
import Divider from "@/components/mainPage/divider";
import Card from "@/components/mainPage/card";
import Navbar from "@/components/mainPage/navbar";


const Spib = styled.img`
display: flex;
// allow overflow to the right

max-width: 30%;
min-width: 200px;
z-index: 1;
margin-bottom: -8px;
margin-left: "minmax(auto,10%)";
justify-self: flex-start;
align-self: flex-end;
grid-column: 2;
grid-row: 2 / 3;

@media (max-width: 768px) {
  grid-column: 1 / -1;
  min-width: 10%;
  justify-self: flex-end;
}

`;



const MainContentGrid = styled.div`
display: flex;
justify-self: center ;
justify-content: center;
max-width:  1028px;
width: auto;
flex-wrap: wrap;
column-gap: 16px;
grid-column: 1 /-1;
margin-left: 32px;
margin-right: 32px;
margin-top: 32px;
`;

export default function Home() {


  return (
    <main className={styles.main}>
 

   

      <MainPageGrid >
        <Navbar />
        <Hero />
        <Spib src="/SpibBounce.gif" />
        <Divider />
        <MainContentGrid>
        <Card linkToPage="infiniteSpitfire" text="Looking for the old page?" image="/SpitfireSmile.png"/>
        <Card linkToPage="aboutMe" text="Who am I?" image="/Muffin.png"  />
        <Card linkToPage="https://ko-fi.com/simplesample" text="Buy me a coffee!" image="/Coffee.png" />
        </MainContentGrid>
        </MainPageGrid>
   
    </main>
  );
}
