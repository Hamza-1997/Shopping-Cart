import './Header.css';
import React, { useState } from 'react';
function Header() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <header className="headerContainer">
        <div className="headerLogoContainer">
          <a href="#top" className="headerLogo">
            Cat Store
          </a>
        </div>
        <nav className="headerNav">
          <a href="#top">Shop</a>
          <a href="#top">Search</a>
          <a href="#top" onClick={() => setIsOpened(!isOpened)}>
            Cart
          </a>
        </nav>
        {/* Component for cart */}
      </header>
      <div className="parent">
        <div
          className={
            isOpened ? 'cartParentContainer active' : 'cartParentContainer'
          }
        ></div>
        <div className={isOpened ? 'cart-container' : 'cart-container close'}>
          <h3 className="closeBtn" onClick={() => setIsOpened(!isOpened)}>
            Close
          </h3>
          <div className="cartContent">
            <h1>Your Shopping Bag</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
