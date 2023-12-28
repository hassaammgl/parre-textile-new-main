import { Header } from "@/Components/Header";
import ProductsPage from "@/Components/ProductsHome";
import { Gallery } from "@/Components/Gallery";
import Footer from "@/Components/Footer";
import Banner from "@/Components/Banner";
import QuoteHome from "@/Components/QuoteHome";


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <ProductsPage />
      <Gallery />
      <QuoteHome />
      <Footer />
    </>
  );
}
