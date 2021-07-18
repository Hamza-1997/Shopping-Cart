import React, { useRef } from 'react';
import './Cart.css';
// When increment is done here, read about useRef ,
// then pass the current value of useRef + 1
// to parent(Cart) , then call update quantity in parent,
// as the current product in cart then inc by 1,
// else, update state of cart, it will create another cartItem.
function CartItems(props) {
  let items = props.items;
  const inputEl = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    props.updateQuantity(items.id, value);
    console.log('en value', e.target.value);
    // setCount(Number(e.target.value));
  };

  const handleIncrement = () => {
    inputEl.current.value = Number(items.quantity) + 1;
    props.updateQuantity(items.id, +inputEl.current.value);
  };
  const handleDecrement = (e) => {
    inputEl.current.value = Number(inputEl.current.value) - 1;
    props.updateQuantity(items.id, inputEl.current.value);
  };

  return (
    <>
      <div className="cartListContainer">
        <img src={items.img} alt="" className="cartListImage" />
        <div className="cartListInfo">
          <div className="nameAndPrice">
            <h2>{items.category}</h2>
            <span>Rs{items.price}</span>
          </div>
          <span className="productName">
            <h3>{items.title}</h3>
          </span>
          <div className="quantityController">
            <button onClick={handleDecrement}>-</button>
            <div className="quantityDisplay">
              <input
                ref={inputEl}
                type="text"
                className="cartItemQuantityDisplay"
                value={items.quantity}
                onChange={handleChange}
              />
            </div>
            <button onClick={handleIncrement}>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItems;
