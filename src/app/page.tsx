"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { styled } from "styled-components";
import { MainPageGrid } from "@/components/styles/mainBar.Styles";
import Logo192 from "@/public/logo192.png";
import Hero from "@/components/mainPage/hero";
import Divider from "@/components/mainPage/divider";
import Card from "@/components/mainPage/card";

const Spib = styled.img`
display: flex;
// allow overflow to the right
overflow: hidden;
min-width:30%;
z-index: 1;
margin-bottom: -8px;
margin-left: "minmax(auto,10%)";
justify-self: flex-start;
align-self: flex-end;
grid-column: 2;
grid-row: 2 / 3;


`;

const StyledNavbar = styled.nav`
grid-row: 1 ;
grid-column: 1 / -1;
`;

const Logo = styled.img`
margin-bottom: 10px;
margin-right: 16px;
margin-left: 8px;
`;

const MainContentGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr;
column-gap: 16px;
grid-column: 1 /-1;
margin-left: 32px;
margin-right: 32px;

`;

export default function Home() {


  return (
    <main className={styles.main}>
 
      <MainPageGrid >

   

<StyledNavbar className="navbar navbar-expand-lg navbar-light bg-light">
<a href="/"><Logo src="/logo192.png" width="40"  height="40" className="d-inline-block align-top " alt="" /></a>
  <a className="navbar-brand" href="#">Spib.no</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link fw-bold" href="#">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Infinite Spitfire</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</StyledNavbar>
<Hero />
        <Spib src="/SpibBounce.gif" />
        <Divider />
        <MainContentGrid>
        <Card gridcolumn={1} />
        <Card gridcolumn={2}/>
        <Card gridcolumn={3}/>
        </MainContentGrid>
        </MainPageGrid>
   
    </main>
  );
}
