import "../styles/products-overview.css"

import ProductCard from "./ProductCard";

const ProductsOverview = (props) => {
  return (
    <div className={ props.className + " container"}>
      <h1>{ props.heading }</h1>
      <div className="products">
        <ProductCard product={ props.products[0] }/>
        <ProductCard product={ props.products[1] }/>
        <ProductCard product={ props.products[2] }/>
        <ProductCard product={ props.products[3] }/>
      </div>
      <button>View all</button>
    </div>
  );
}
 
export default ProductsOverview;