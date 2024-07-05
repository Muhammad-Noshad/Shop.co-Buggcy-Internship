import "../../styles/general/header.css"

import { useState, useEffect, useCallback } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState('');
  const history = useHistory();
  const key = useLocation().pathname.split('/');

  useEffect(() => {
    if(key[1] === 'view-products')
      setSearch(key[key.length - 1]);
  }, [])

  const handleClick = useCallback(() => {
    history.push(`/view-products/${search}`);
  }, [search]);

  return (
    <header>
      <div className="container">
        <div className="left-section">
            <Link to="/">
              <h1>shop.co</h1>
            </Link>
        </div>
        
        <div className="middle-section">
          <input type="text" id="search" value={ search } placeholder="Search for products..." onChange={ (e) => { setSearch(e.target.value) } } onKeyUp={(e) => { 
            if(e.key === 'Enter')
              handleClick();
           }} />
          <Link to={`/view-products/${search}`}>
            <img src={require("../../images/search.png")} alt="search.png" />
          </Link>
        </div>
        
        <div className="right-section">
          <Link to="/view-cart">
           <img src={require("../../images/cart.png")} alt="cart.png" />
          </Link>
          <Link to="/profile">
           <img src={require("../../images/profile.png")} alt="profile.png" />
          </Link>
        </div>
      </div>
    </header>
  );
}
 
export default Header;