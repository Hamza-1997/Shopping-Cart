import React from 'react';
import { Link } from 'react-router-dom';

import '../Content/Content.css';
function ProductLists({ product }) {
  return (
    <li key={product.id} className="Products_ListItems">
      <Link to={`/products/${product.id}`} className="link_Router">
        <div className="productImage">
          <img src={product.img} alt="" className="frontImage" />
        </div>
      </Link>
      <div className="infoContainer">
        <div className="productName">{product.title}</div>
        <div className="productPrice">
          <span>Rs</span>
          <h3>{product.price}</h3>
        </div>
      </div>
      {/* <button>Add</button> */}
    </li>
  );
}

export default ProductLists;
