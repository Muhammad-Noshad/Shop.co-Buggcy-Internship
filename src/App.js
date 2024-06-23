import "./styles/general/general.css"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useEffect } from "react";
import useSWR from "swr";
import useFetch from "./hooks/useFetch";
import useCartStore from "./hooks/cartStore";

import Header from './components/general/Header';
import Hero from "./components/home/Hero";
import Banner from "./components/home/Banner";
import Stats from "./components/home/Stats";
import ProductsOverview from "./components/home/ProductsOverview";
import CustomerReviews from "./components/home/CustomerReviews";
import Footer from "./components/general/Footer";
import ProductDetails from "./components/products/ProductDetails";
import ViewProducts from "./components/products/ViewProducts";
import ViewCart from "./components/cart/ViewCart";
import Loading from "./components/general/Loading";
import Checkout from "./components/checkout/Checkout";
import Error from "./components/general/Error";

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