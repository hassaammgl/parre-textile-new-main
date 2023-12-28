import { quotes } from "@/Components/quotes/quotesArray";
import { FaQuoteLeft } from "react-icons/fa";
import style from "@/styles/quotehome.module.scss";

export default function Home() {
  return (
    <>
      <div className={style.number}>
        <h2>Designer Quotes</h2>
        <div className={style.allquotes}>
          <Quote />
        </div>
      </div>
    </>
  );
}

const Quote = () => {
  return (
    <>
      {quotes.map((quote, index) => (
        <div key={index}>
          <div className={style.para}>
            <div className={style.logo}>
              <FaQuoteLeft className={style.logo} />
            </div>
            <div className={style.quote}>{quote.quote}</div>
            <div className={style.author}>
              <div className={style.name}>
                <span className={style.author}>{quote.author}</span>
                <span className={style.expertise}>{quote.expertise}</span>
              </div>
            </div>
            <hr className={style.line} />
          </div>
        </div>
      ))}
    </>
  );
};
