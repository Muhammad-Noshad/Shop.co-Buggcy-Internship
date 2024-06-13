import "../styles/header.css"

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="left-section">
            <Link to="/">
              <h1>shop.co</h1>
            </Link>
        </div>
        
        <div className="middle-section">
          <input type="text" placeholder="Search for products..."/>
          <img src={require("../images/search.png")} alt="search.png" />
        </div>
        
        <div className="right-section">
          <Link to="/view-cart">
           <img src={require("../images/cart.png")} alt="cart.png" />
          </Link>
        </div>
      </div>
    </header>
  );
}
 
export default Header;