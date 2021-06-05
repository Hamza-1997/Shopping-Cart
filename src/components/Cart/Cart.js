import React, { useState } from 'react';
import '../Cart/Cart.css';
import ProductList from '../Content/ProductsList';
function Cart(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="cartWrapper">
      <div
        className={
          props.data ? 'cartParentContainer active' : 'cartParentContainer'
        }
      ></div>

      <div className={props.data ? 'cart-container' : 'cart-container close'}>
        <div className="cartContainerWrapper">
          {/* Child  */}
          <button className="closeBtn" onClick={() => props.openCart()}>
            Close
          </button>
          <div className="cartContent">
            <h1>Your Shopping Bag</h1>
          </div>
          <div className="cartListContainer">
            <img src={ProductList[1].img} alt="" className="cartListImage" />
            <div className="cartListInfo">
              <div className="nameAndPrice">
                <h2>Processor</h2>
                <span>$48</span>
              </div>
              <span className="productName">
                <h3>AMD ryzen 7 5800X</h3>
              </span>
              <div className="quantityController">
                <button onClick={() => setCount(count - 1)}>-</button>
                <div className="quantityDisplay">
                  <input
                    // data-value
                    type="text"
                    className="cartItemQuantityDisplay"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                  />
                </div>
                <button onClick={() => setCount(count + 1)}>+</button>
              </div>
            </div>
          </div>
          <div className="cartListSubtotal">Price of Subtotal</div>
          <button className="checkoutBtn">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
