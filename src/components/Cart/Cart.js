import React from 'react';
// import '../Cart/Cart.css';
import Backdrop from '../BackDrop/Backdrop';
import CartItems from './CartItems';
import { useHistory } from 'react-router-dom';

function Cart(props) {
  let history = useHistory();

  //we have the data, now check logic for same title,

  //now we use this id to filter specific cartItem
  const removeItem = (id) => {
    props.removeItem(id);
    // setItemToRemove((prev) => [...prev, ...id]);
    // we pass id of that item to app.js and filter that item from cart
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
          {/* {props.cartData.map((product) => {})} */}
          {/* {props.cartData} */}
          {/* {props.cartData.map((item) =>
            console.log('jereerer', item.id === item.id)
          )} */}
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
          {/* {props.cartData.title.map((prev) => { */}
          {/* // prev === // })} */}
          {/* map cart items here by passing product to cart
          from parent components and give a key also with the 
          product id which should be unique. */}

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
