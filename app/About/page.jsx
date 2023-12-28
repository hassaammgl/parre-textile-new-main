"use client";

import { Header } from "@/Components/Header";
import style from "@/styles/about.module.scss";
import React from "react";
import img from "@/public/aboutimg.png";
import img1 from "@/public/t5.jpg";
import img2 from "@/public/t2.jpg";
import img3 from "@/public/t3.jpg";
import Image from "next/image";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className={style.about}>
        <div className={style.left}>
          <h1>About Us</h1>
          <Image src={img} className={style.Image} alt="" />
          <h2>Parre&apos; Textile</h2>
          <div className={style.color}>
            <p className={style.about_p}>
              Parre’ Textile is the culmination of a wonderful 40-year journey
              in the Decorative Textile and Home Furnishings Industry.
            </p>
            <p className={style.about_p}>
              Foundations of design were formed in the early years with the
              likes of Schumacher, Osborne &amp; Little, Jim Thompson and many
              fine boutique companies throughout the years.
            </p>
            <p className={style.about_p}>
              The company represents a love and a desire to bring beautiful,
              printed textiles of color to interior designers to design the
              finest homes worldwide.
            </p>
            <p className={style.about_p}>
              “Franglasiam”, is what describes the company best. A little bit of
              French, A bit of English, a bit of Asia and a bit American.
            </p>
            <p className={style.about_p}>
              Parre’ is a privately held, family run company made up of a Father
              and his 2 children as the management team.
            </p>
          </div>
        </div>
      </div>
      <Team />
      <Footer />
    </>
  );
}

const Team = () => {
  return (
    <>
      <div className={style.team}>
        <div className={style.lef1}>
          <h4>OUR TEAM</h4>
          <p>Meet The Professionals</p>
        </div>
        <div className={style.rigt1}>
          <div className={style.sect}>
            <Image src={img1} alt="" />
            <h1>David</h1>
            <p>Director of Development</p>
          </div>
          <div className={style.sect}>
            <Image src={img2} alt="" />
            <h1>Linna Stones</h1>
            <p>Marketing</p>
          </div>
          <div className={style.sect}>
            <Image src={img3} alt="" />
            <h1>Fanny Lawson</h1>
            <p>HR Staff</p>
          </div>
        </div>
      </div>
    </>
  );
};
