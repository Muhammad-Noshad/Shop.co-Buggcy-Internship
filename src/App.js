import "./styles/general.css"

import useSWR from "swr";
import useFetch from "./hooks/useFetch";

import Header from './components/Header';
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import useProductStore from "./hooks/productStore";
import ProductsOverview from "./components/ProductsOverview";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";

function App() {
  const { data: products } = useSWR("/products", useFetch);

  const setProducts = useProductStore((state) => state.setProducts);
  setProducts(products);

  console.log(products);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Banner />
      { products && <ProductsOverview className="new-arrivals" heading="New Arrivals" products={[products[0], products[1], products[2], products[3]]} /> }
      { products && <ProductsOverview className="top-selling" heading="Top Selling" products={[products[4], products[5], products[6], products[7]]} /> }
      <CustomerReviews />
      <Footer />
    </div>
  );
}

export default App;
