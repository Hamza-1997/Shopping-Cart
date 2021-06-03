import React from 'react';
import Header from '../Header/Header';
import ProductsList from '../Content/ProductsList';
function Products({ match }) {
  // useEffect(() => {
  //   console.log(match);
  // }, []);

  const getName = () => {
    return ProductsList.find((item) => item.id === match.params.id);
  };

  return (
    <div>
      <Header />
      <h1>Product Page</h1>
      <div className="productImage">
        <img src={getName().img} alt="" className="frontImage" />
      </div>
      <div className="productName">
        {getName().title}
        {/* {ProductsList.find((item) => item.id == match.params.id)} */}
      </div>
      <div className="productPrice"> {getName().price}</div>
      <button
        style={{
          fontSize: '20px',
          background: 'blue',
          color: 'white',
          marginTop: '10px',
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Products;
