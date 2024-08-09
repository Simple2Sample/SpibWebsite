"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { styled } from "styled-components";
import { MainPageGrid } from "@/components/styles/mainBar.Styles";
import Logo192 from "@/public/logo192.png";

const Test = styled.img`

width:100%;
height:100%;
grid-column: 1 / -1;
grid-row: 2 / -2;


`;


const Logo = styled.img`
margin-bottom: 10px;
margin-right: 16px;
margin-left: 8px;
`;

export default function Home() {


  return (
    <main className={styles.main}>
 
      <MainPageGrid >

   

<nav className="navbar navbar-expand-lg navbar-light bg-light">
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
</nav>
      
        <Test src="/SpibBounce.gif" />
        </MainPageGrid>
   
    </main>
  );
}
