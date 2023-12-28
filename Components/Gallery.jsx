"use client";

import style from "@/styles/gallery.module.scss";
import React from "react";
import img from "@/public/g1.jpg";
import img1 from "@/public/g2.jpg";
import img2 from "@/public/g3.jpg";
import img3 from "@/public/g4.jpg";
import img4 from "@/public/g5.jpg";
import Image from "next/image";
import { PT_Serif, Arapey } from "next/font/google";

const pt_serif = PT_Serif({
  weight: "400",
  subsets: ["latin"],
});

const arapey = Arapey({
  weight: "400",
  subsets: ["latin"],
});

export const Gallery = () => {
  return (
    <div>
      <div className={style.galleryimg}>
        <h1 className={`${style.header} ${arapey.className}`}>Gallery</h1>
        <div className={style.box}>
          <span style={{ "--i": 1 }}>
            <Image
              src={img}
              alt=""
            />
          </span>
          <span style={{ "--i": 2 }}>
        <Image 
        src={img1}
        alt=""
         />
          </span>
          <span style={{ "--i": 3 }}>
          <Image 
        src={img2}
        alt=""
         />
          </span>
          <span style={{ "--i": 4 }}>
          <Image 
        src={img3}
        alt=""
         />
          </span>
          <span style={{ "--i": 5 }}>
          <Image 
        src={img4}
        alt=""
         />
          </span>
        </div>
      </div>
    </div>
  );
};
