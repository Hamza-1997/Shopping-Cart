import React from 'react';
import { useHistory } from 'react-router-dom';

import './Header.css';

export function Header(props) {
  let history = useHistory();

  function handleClick() {
    history.push('/');
  }
  return (
    <div>
      <header className="headerContainer">
        <div className="headerLogoContainer">
          <h3 className="headerLogo" onClick={() => handleClick()}>
            Cat Store
          </h3>
        </div>
        <nav className="headerNav">
          <ul>
            <li onClick={() => props.openCart()}>
              <i className="fas fa-shopping-cart"></i>
              {props.cartData.length > 0 && (
                <div className="badge">
                  <h3>{props.cartData.length}</h3>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
