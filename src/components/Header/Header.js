import React, { useState } from 'react';
import './Header.css';
import Cart from '../Cart/Cart';

export function Header(props) {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div>
      <header className="headerContainer">
        <div className="headerLogoContainer">
          <a href="#top" className="headerLogo">
            Cat Store
          </a>
        </div>
        <nav className="headerNav">
          <a href="#top">Shop</a>
          <a href="#top">Search</a>
          {/* onClick={() => setIsOpened(!isOpened)} */}
          <a href="#top" onClick={() => handleClick()}>
            Cart
          </a>
        </nav>
      </header>
      {/* Passing a reference to handleClick method as a prop 
        called greetHandler */}
      {/*Header is Acting as  Parent */}
      {/* We send function and state defined in Header component to 
      Cart like this, Because cart is rendering inside Header, 
      We can exhancge data */}
      <Cart data={isOpened} openCart={handleClick} />
    </div>
  );
}

export default Header;
