import React, { useRef } from 'react';
import './Cart.css';
// When increment is done here, read about useRef online,
// then pass the current value of useRef + 1 like line number 17
// to parent(Cart) , then call update quantity in parent,
// it will check by using id if it's the same product
// as the current product in cart then inc by 1,
// else, update state of cart, it will create another cartItem.
function CartItems(props) {
  // const inputEl = useRef(null);
  let items = props.items;
  // let quantity = props.quantity;
  const inputEl = useRef(null);
  // let updateQuantity = props.updateQuantity();

  const handleChange = (e) => {
    const value = e.target.value;
    props.updateQuantity(items.id, value);
    console.log('en value', e.target.value);
    // setCount(Number(e.target.value));
  };

  const handleIncrement = () => {
    // setCount(count + 1);
    inputEl.current.value = Number(items.quantity) + 1;
    // console.log(inputEl.current.value);
    props.updateQuantity(items.id, +inputEl.current.value);
  };
  const handleDecrement = (e) => {
    inputEl.current.value = Number(inputEl.current.value) - 1;
    // console.log(inputEl.current);
    props.updateQuantity(items.id, inputEl.current.value);
  };

  return (
    <>
      {/* increment counter by when when a product is added */}
      <div className="cartListContainer">
        {/* {console.log('asadasd', items)} */}
        {/* {console.log('hellllo')} */}
        <img src={items.img} alt="" className="cartListImage" />
        <div className="cartListInfo">
          <div className="nameAndPrice">
            <h2>{items.category}</h2>
            <span>{items.price}</span>
          </div>
          <span className="productName">
            <h3>{items.title}</h3>
          </span>
          <div className="quantityController">
            <button onClick={handleDecrement}>-</button>
            <div className="quantityDisplay">
              <input
                // data-value
                ref={inputEl}
                type="text"
                className="cartItemQuantityDisplay"
                // defaultValue={items.quantity}
                value={items.quantity}
                onChange={handleChange}
                // onChange={(e) => setCount(Number(e.target.value))}
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

// WHen clicked on + , send the e.target to function and console what we get
//
