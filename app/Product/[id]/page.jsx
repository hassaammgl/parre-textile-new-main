import Footer from "@/Components/Footer";
import { Header } from "@/Components/Header";
import Product_show_component from "@/Components/Products Page/Product_show_component";

export default function Home({ params }) {
  console.log(params);
  return (
    <>
      <Header />
      <Product_show_component params={params.id} />
      <Footer />
    </>
  )
}
