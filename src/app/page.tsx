"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { styled } from "styled-components";

const Test = styled.img`

width:50%;
height:10%;

`
export default function Home() {


  return (
    <main className={styles.main}>
      <div className={styles.description}>
      
      
        <Test src="/SpibBounce.gif" />
      </div>
    </main>
  );
}
