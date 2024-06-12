import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
import ProductDetails from "./components/ProductDetails";
import ViewProducts from "./components/ViewProducts";

function App() {
  const { data: products, error } = useSWR("/products", useFetch);

  if (error) return <div>Error loading products</div>; if (!products) return <div>Loading...</div>;
  // const setProducts = useProductStore((state) => state.setProducts);
  // setProducts(products);

  console.log(products);

  return (
    <div className="App">
     <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Banner />
            <ProductsOverview className="new-arrivals" heading="New Arrivals" products={products.slice(0, 4)} />
            <ProductsOverview className="top-selling" heading="Top Selling" products={products.slice(4, 8)} />
            <CustomerReviews />
          </Route>
          <Route path="/product-details/:id">
            <ProductDetails products={products} />
          </Route>
          <Route path="/view-products">
            <ViewProducts products={products} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;