import { Link } from "react-router-dom";
import "../styles/view-products.css";
import ProductCard from "./ProductCard";
import { useEffect, useRef, useState } from "react";

const ViewProducts = (props) => {
  const categoriesElem = useRef();
  const [filterBy, setFilterBy] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const buttons = categoriesElem.current.children;

    const handleButtonClick = (index) => {
      return () => {
        if (buttons[index].classList.contains('selected')) {
          buttons[index].classList.remove('selected');
          setFilterBy(null);
        } else {
          Array.from(buttons).forEach((button, idx) => {
            if (idx === index) {
              button.classList.add('selected');
            } else {
              button.classList.remove('selected');
            }
          });
          setFilterBy(buttons[index].textContent);
        }
      };
    };

    Array.from(buttons).forEach((button, index) => {
      button.addEventListener('click', handleButtonClick(index));
    });

    return () => {
      Array.from(buttons).forEach((button, index) => {
        button.removeEventListener('click', handleButtonClick(index));
      });
    };
  }, []);

  useEffect(() => {
    if (filterBy) {
      setFilteredProducts(
        props.products.filter((product) => product.category === filterBy)
      );
    } else {
      setFilteredProducts(props.products);
    }
  }, [filterBy, props.products]);

  return (
    <div className="view-products container">
      <h1>All Products</h1>

      <div ref={categoriesElem} className="categories">
        <button>men's clothing</button>
        <button>jewelery</button>
        <button>electronics</button>
        <button>women's clothing</button>
      </div>

      <div className="products-grid">
        {filteredProducts &&
          filteredProducts.map((product) => (
            <Link key={product.id} to={`/product-details/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ViewProducts;
