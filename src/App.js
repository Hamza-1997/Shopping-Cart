import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductPage from './components/Products/ProductPage';
import Cart from '../src/components/Cart/Cart';
function App() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    subtotal();
  }, [cart]);

  const openCart = () => {
    setShowCart(!showCart);
  };

  const subtotal = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      const iterativePrice = item.price * item.quantity;
      totalPrice += iterativePrice;
    });
    setSubTotal(totalPrice);
  };

  const updateQuantity = (id, quantity) => {
    // check if qty is < 0, if true call removeItem. will do this later
    if (quantity == 0) removeItem(id);
    const product = cart.find((item) => item.id === id);
    product.quantity = quantity;
    cart.map((item) => (item.id === id ? product : null));
    subtotal();
    // else add item to cart
  };

  const removeItem = (id) => {
    //map over cart, get all items then filter id to remove
    let filterCart = cart.map((prev) => prev).filter((item) => item.id !== id);
    setCart(filterCart);
  };
  const addToCart = async (totalItems) => {
    // 1. check if item is already in the cart, if yes call updateQuantity
    //with the id of that item
    let sameProduct = cart.filter((item) => item.id === totalItems.id);

    // sameProduct.quantity = quantity;
    if (sameProduct.length === 1) {
      cart.map((productInCurrentCart) =>
        productInCurrentCart.id === sameProduct[0].id
          ? (productInCurrentCart.quantity =
              Number(productInCurrentCart.quantity) + 1)
          : null
      );
    } else {
      const productObject = totalItems;
      productObject.quantity = 1;
      await setCart((prev) => [...prev, productObject]);
    }
    //this will work when component renders, in first run, component doesnt
    // render
    // checkUnique(totalItems);
    subtotal();
    setShowCart(!showCart);
  };
  //When we get a callback from child component, we use that as
  // an argument
  return (
    <div className="App">
      <Router>
        <div>
          <Header data={showCart} openCart={openCart} cartData={cart} />
          <Switch>
            <Route exact path="/">
              <Content />
            </Route>
            <Route
              exact
              path="/:id"
              render={(props) => <Content {...props} />}
            />
            <Route
              exact
              path="/products/:id"
              render={(props) => (
                <ProductPage data={showCart} addToCart={addToCart} {...props} />
              )}
            />
            <Route exact path="/products">
              <ProductPage />
            </Route>
          </Switch>
          <Cart
            data={showCart}
            openCart={openCart}
            addToCart={addToCart}
            cartData={cart}
            removeItem={removeItem}
            updateQuantity={updateQuantity}
            subTotal={subTotal}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
