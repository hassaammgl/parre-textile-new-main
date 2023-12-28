"use client";

import { Header } from "@/Components/Header";
import style from "@/styles/showroom.module.scss";
import React from "react";
import img from "@/public/bga1.jpg";
import img1 from "@/public/bga2.jpg";
import img2 from "@/public/bga3.jpg";
import img3 from "@/public/bga4.jpg";
import Image from "next/image";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <div className={style.showroom}>
      <h2>Showrooms</h2>
      <p>Parre' Textile is seeking Showroom and Road Sales representation across the United States.</p>
      <Image src={img} className={style.img} alt="" />
      <Image src={img1} className={style.img} alt="" />
      <Image src={img2} className={style.img} alt="" />
      <Image src={img3} className={style.img} alt="" />
    </div>
    <Footer />
    </>
  )
}
