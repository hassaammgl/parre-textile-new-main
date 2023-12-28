import React from "react";
import style from "@/styles/footer.module.scss";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import {
  Arapey,
  Antic_Didone,
  Eagle_Lake,
  Playfair_Display,
  Cormorant,
  Roboto,
  Libre_Bodoni,
} from "next/font/google";

const arapey = Arapey({
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

const eagle_lake = Eagle_Lake({
  weight: "400",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const libre_bodoni = Libre_Bodoni({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <>
      <div className={style.bgfooter}>
        <div className={style.newsletter}>
          <h2>
            <span
              className={libre_bodoni.className}
            >
              Subscribe to our Newsletter
            </span>
          </h2>
          <div className={style.textnewsletter}>
            <input
              type="email"
              placeholder="Enter your email"
              className={libre_bodoni.className}
            />
            <button className={libre_bodoni.className}>Subscribe</button>
          </div>
        </div>
      </div>

      <footer className={style.footer}>
        <div className={style.main_footer}>
          <section className={`${style.footer_header} ${eagle_lake.className}`}>
            We Innovate & develop <br /> modern textiles{" "}
          </section>
          <section className={style.address}>
            <h2 className={playfair_display.className}>Address</h2>
            <p>
              Germany — <br /> 785 15h Street, Office 478 <br /> Berlin, De
              81566
            </p>
            <div className={style.social}>
              <Link className={style.social_link} href={""}>
                <GrFacebookOption />
              </Link>
              <Link className={style.social_link} href={""}>
                <FaInstagram />
              </Link>
              <Link className={style.social_link} href={""}>
                <FaXTwitter />
              </Link>
              <Link className={style.social_link} href={""}>
                <FaYoutube />
              </Link>
            </div>
          </section>
          <section className={style.hello}>
            <h2 className={playfair_display.className}>Say Hello</h2>
            <p className={style.mail}>info@email.com</p>
            <p className={`${style.num} ${playfair_display.className}`}>
              +1 840 841 25 69
            </p>
          </section>
        </div>
        <div className={style.foot}>
          <div className={style.links}>
            <Link href={"/"} className={antic_didone.className}>
              Home
            </Link>
            <Link href={"/About"} className={antic_didone.className}>
              About
            </Link>
            <Link href={"/Textiles"} className={antic_didone.className}>
              Textiles
            </Link>
            <Link href={"/Showrooms"} className={antic_didone.className}>
              Showroom
            </Link>
            <Link href={"/FAQs"} className={antic_didone.className}>
              FAQ&apos;s
            </Link>
          </div>
          <div className={`${style.copys} ${antic_didone.className}`}>
            PARRE&apos; &copy; 2023. All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
