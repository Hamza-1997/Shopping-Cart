import React from 'react';

function Cart(props) {
  return (
    <div className="parent">
      <div
        className={
          props.data ? 'cartParentContainer active' : 'cartParentContainer'
        }
      ></div>
      <div className={props.data ? 'cart-container' : 'cart-container close'}>
        {/* Child  */}
        <h3 className="closeBtn" onClick={() => props.openCart()}>
          Close
        </h3>
        <div className="cartContent">
          <h1>Your Shopping Bag</h1>
        </div>
      </div>
    </div>
  );
}

export default Cart;
