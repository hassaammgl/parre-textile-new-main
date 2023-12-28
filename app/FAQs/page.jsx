import React from "react";
import style from "@/styles/faqs/faqs.module.scss";
import { Collapse } from "antd";
import { Header } from "@/Components/Header";
import Footer from "@/Components/Footer";

const customArrowStyle = {
  color: "white",
  backgroundColor: "white",
};

const items = [
  {
    key: "1",
    label:
      <h3>Does Parre Textile hold inventory of their printed fabric collections?</h3>,
    children: <p>No, Parre’ prints to order and holds no inventory.</p>,
  },
  {
    key: "2",
    label: <h3>How long does it take to receive fabric?</h3>,
    children: <p>From Purchase Order and Payment, fabric is printed and shipped
    in 20 business days.
    </p>,
  },
  {
    key: "3",
    label: <h3>What base clothes does Parre’ print on?</h3>,
    children: <p>Our collections are printed on the following base clothes, Linen,
    Linen/Cotton, and Cotton.
    </p>,
  },
  {
    key: "4",
    label: <h3>Are designs interchangeable from one base cloth to another?</h3>,
    children: <p>Each base cloth is carefully selected for each design. Sorry the
    answer is no.
    </p>,
  },
  {
    key: "5",
    label: <h3>Do dyelots vary?</h3>,
    children: <p>A dyelot can vary up to 5% from the original sample. We strive to
    be as color accurate as possible.
    </p>,
  },
  {
    key: "6",
    label: <h3>Does the company offer Cuttings for Approval?</h3>,
    children: <p>No, however we guarantee color match within 5%. If the variation
    is greater than 5% we will provide new fabric at no charge.
    </p>,
  },
  {
    key: "7",
    label: <h3>Will Parre’ custom color a design?</h3>,
    children: <p>The company does not offer custom coloring.</p>,
  },
  {
    key: "8",
    label: <h3>What is the minimum order when ordering from Parre’?</h3>,
    children: <p>The minimum order is 5 yds. Sorry, no exceptions.</p>,
  },
  {
    key: "9",
    label: <h3>Are Parres printed fabrics suitable both for Curtains and Upholstery</h3>,
    children: <p>Yes, all base clothes are suitable for residential drapery and
    upholstery. Rub tests range from 17, 000 to 25,000 rubs.
    </p>,
  },
  {
    key: "10",
    label: <h3> Is the fabric printed domestically or out of the country?</h3>,
    children: <p>Our designs are printed overseas and shipped via DHL from the
    printer to you or your workroom.
    </p>,
  },
  {
    key: "11",
    label: <h3>Does Parre’ accept checks as well as credit cards for Payment</h3>,
    children: <p>Parre’ only accepts credit cards for payment. When an order is
    received, the order is invoiced and emailed with a link for
    Payment.
    </p>,
  },
  {
    key: "12",
    label: <h3>How often does Parre’ Textile introduce new collections?</h3>,
    children: <p>Parre’ introduces new collections 2x a year, January, and August.</p>,
  },
  {
    key: "13",
    label: <h3>Does Parre’ contribute to Designer Showhouses?</h3>, 
    children: <p>Absolutely, Parre’ is happy to support designers on a case-by-case
    basis in their showhouse endeavors. We do require usage rights of
    photography for our marketing and promotion.
    </p>,
  },
];
const App = () => {
    return (
        <>
        <Header />
        <div className={style.faqs}>
            <h2>Frequently Asked Questions</h2>
            <p className={style.parre}>Here at Parre&apos; Textile we believe in &quot;Keeping it Simple&quot;</p>
        <Collapse accordion items={items} expandIconStyle={customArrowStyle}  style={{backgroundColor:"#8f0d0a",color:"white"}} />
        </div>
        <Footer />
        </>
    )
}
export default App;