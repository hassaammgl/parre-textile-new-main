"use client";

import style from "@/styles/Product.module.scss";
import React, { useState, useEffect } from "react";
import { products as productData } from "./productsArray";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import {
  Arapey,
  Gentium_Book_Plus,
  Playfair_Display,
  Antic_Didone,
} from "next/font/google";
import Image from "next/image";

const arapey = Arapey({
  weight: "400",
  subsets: ["latin"],
});

const gentium_book_plus = Gentium_Book_Plus({
  weight: "400",
  subsets: ["latin"],
});

const playfair_display = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const antic_didone = Antic_Didone({
  weight: "400",
  subsets: ["latin"],
});

const ProductsPage = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(productData.slice(0, 3));
  }, []);

  return (
    <div className={style.products}>
      <header className={style.links}>
        <Link href="/" className="navlink">
          <span className={gentium_book_plus.className}>HOME</span>
        </Link>
        <Link href="/About" className="navlink">
          <span className={gentium_book_plus.className}>ABOUT</span>
        </Link>
        <Link href="/Textiles" className="navlink">
          <span className={gentium_book_plus.className}>TEXTILES</span>
        </Link>
        <Link href="/Showrooms" className="navlink">
          <span className={gentium_book_plus.className}>SHOWROOMS</span>
        </Link>
        <Link href="/FAQs" className="navlink">
          <span className={gentium_book_plus.className}>FAQ&apos;s</span>
        </Link>
      </header>

      <h2 className={`${style.hometext} ${arapey.className}`}>
        Luxury Printed Textiles Exclusively for Discerning Interior Designers
      </h2>

      <div className={style.product}>
        <div className={style.product_list}>
          {data.map((product) => (
            <Product key={product._id} data={product} />
          ))}
        </div>
      </div>

      <div className={style.showmore}>
        <Link href={"/Textiles"}>
          <button>Browse the Collection</button>
        </Link>
      </div>
    </div>
  );
};

const Product = ({ data }) => {
  const { productName, price, imageLink, _id } = data;
  let id = _id;
  console.log(imageLink.src);
  return (
    <div className={style.card}>
      <div className={style.content}>
        <Image
          src={imageLink}
          width={300}
          className={style.waku}
          height={247}
          alt=""
        />
      </div>
      <div className={style.overlay}>
        <button className={style.sideicons}>
          <FaRegHeart />
        </button>
        <button className={style.sideicons}>
          <BsCart3 />
        </button>
        <button className={style.sideicons}>
          <Link href={`/Product/${id}`}>
            <FaArrowRightLong />
          </Link>
        </button>
      </div>
      <div className={style.title}>
        <h4 className={playfair_display.className}>{productName}</h4>
        <p className={antic_didone.className}>{price}</p>
      </div>
    </div>
  );
};


export default ProductsPage;
