import React from 'react';
import Backdrop from '../BackDrop/Backdrop';
import CartItems from './CartItems';
import { useHistory } from 'react-router-dom';

function Cart(props) {
  let history = useHistory();
  const removeItem = (id) => {
    props.removeItem(id);
  };
  function handleClick() {
    props.openCart();
    history.push('/');
  }

  return (
    //   props.updateQuantity(id);
    <div className="cartWrapper">
      {props.data && <Backdrop show={props.data} />}
      <div className={props.data ? 'cart-container' : 'cart-container close'}>
        <div className="cartContainerWrapper">
          {/* Child  */}
          <button className="closeBtn" onClick={() => props.openCart()}>
            Close
          </button>
          <div className="cartContent">
            {props.cartData.length === 0 ? (
              <h1>Cart is Empty</h1>
            ) : (
              <h1>Your Shopping Bag</h1>
            )}
          </div>

          {props.cartData.map(
            (item) => (
              // itemToRemove !== item.id ? (
              <CartItems
                key={item.id}
                items={item}
                removeItem={removeItem}
                updateQuantity={props.updateQuantity}
              />
            )
            // ) : null
            // console.log('this is props title', item)
          )}

          <div className="cartListSubtotal">
            Price of Subtotal: {props.subTotal}
          </div>
          <button className="checkoutBtn" onClick={() => handleClick()}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
