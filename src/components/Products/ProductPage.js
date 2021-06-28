import React, { useEffect, useState } from 'react';
import allCategories from '../../data/allProducts';
import '../Products/Product.css';
import Backdrop from '../BackDrop/Backdrop';
function ProductPage(props) {
  let foundedProduct;
  let { getProduct } = props;
  const [imagePopUp, setImagePopUp] = useState(false);
  // returning the id of item which is matched
  const getName = () => {
    foundedProduct = allCategories.find(
      (item) => item.id === props.match.params.id
    );
  };

  getName();

  //passing id of product in url to app.js,
  const addToCart = () => {
    props.addToCart(foundedProduct);
  };

  return (
    <div className="wrapper">
      {imagePopUp && <Backdrop />}
      <div className="imageContainer">
        <img src={foundedProduct.img} alt="" className="Image" />
        <button
          onClick={() => setImagePopUp(!imagePopUp)}
          className="viewImgBtn"
        >
          View
        </button>
        {imagePopUp && (
          // <div className="zoomImg">
          <div className="childImgContainer">
            <button
              className="closeBigImgBtn"
              onClick={() => setImagePopUp(!imagePopUp)}
            >
              close
            </button>
            <img src={foundedProduct.img} alt="" className="bigImage" />
          </div>
          // </div>
        )}
      </div>
      <div className="ProdInfoContainer">
        <div className="productName">
          <span>{foundedProduct.title}</span>
          {/* {ProductsList.find((item) => item.id == match.params.id)} */}
        </div>
        <div className="productPrice">
          {' '}
          <span>Rs</span>
          {foundedProduct.price}{' '}
        </div>
        <button className="cartBtn" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
