import "./styles/general/general.css"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import useSWR from "swr";
import useFetch from "./hooks/useFetch";
import { useEffect } from "react";

import Header from './components/Header';
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductsOverview from "./components/ProductsOverview";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import ViewProducts from "./components/ViewProducts";
import ViewCart from "./components/ViewCart";
import Loading from "./components/Loading";
import Checkout from "./components/Checkout";
import useCartStore from "./hooks/cartStore";
import Error from "./components/Error";

function App() {
  const setCart = useCartStore((state) => state.setCart);
  const { data: products, error } = useSWR("/products", useFetch);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, [])

  if(error)
    return (<Error />);

  if (!products) 
    return (<Loading />);
  
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
          <Route path="/view-products/:key?">
            <ViewProducts products={products} />
          </Route>
          <Route path="/product-details/:id">
            <ProductDetails products={products} />
          </Route>
          <Route path="/view-cart">
            <ViewCart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;