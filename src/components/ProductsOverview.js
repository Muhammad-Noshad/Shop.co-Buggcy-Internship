import { Link } from "react-router-dom";

import "../styles/products-overview.css"

import ProductCard from "./ProductCard";

const ProductsOverview = (props) => {
  return (
    <div className={ props.className + " container"}>
      <h1>{ props.heading }</h1>
      <div className="products">
        {
          props.products.map((product) => {
            return (
              <Link key={product.id} to={`/product-details/${product.id}`}>
                <ProductCard product={ product }/>
              </Link>
            )
          })
        }
      </div>
      <Link to={"/view-products/"}>
        <button>View all</button>
      </Link>
    </div>
  );
}
 
export default ProductsOverview;