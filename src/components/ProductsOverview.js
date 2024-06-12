import { Link } from "react-router-dom";

import "../styles/products-overview.css"

import ProductCard from "./ProductCard";

const ProductsOverview = (props) => {
  return (
    <div className={ props.className + " container"}>
      <h1>{ props.heading }</h1>
      <div className="products">
        <Link to={`/product-details/${props.products[0].id}`}>
          <ProductCard product={ props.products[0] }/>
        </Link>
        <Link to={`/product-details/${props.products[1].id}`}>
          <ProductCard product={ props.products[1] }/>
        </Link>
        <Link to={`/product-details/${props.products[2].id}`}>
          <ProductCard product={ props.products[2] }/>
        </Link>
        <Link to={`/product-details/${props.products[3].id}`}>
          <ProductCard product={ props.products[3] }/>
        </Link>
      </div>
      <Link to={"/view-products"}>
        <button>View all</button>
      </Link>
    </div>
  );
}
 
export default ProductsOverview;