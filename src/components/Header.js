import "../styles/header.css"

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="left-section">
          <h1>shop.co</h1>
        </div>
        
        <div class="middle-section">
          <input type="text" />
          <img src={require("../images/search.png")} alt="search.png" />
        </div>
        
        <div className="right-section">
          <img src={require("../images/cart.png")} alt="cart.png" />
        </div>
      </div>
    </header>
  );
}
 
export default Header;