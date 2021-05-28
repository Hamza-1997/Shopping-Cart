import './Content.css';
// import cardImage from '../../assets/cat_foods/hello.jpg';
import Sidebar from '../Sidebar/sidebar';
import Products from './Products';
function Content() {
  return (
    <div className="contentContainer">
      <Sidebar />
      <main className="main_ShopPage">
        {/* <div className="cardContainer">
        <div className="cardImage"> 
          <img className="shopImage" src={cardImage} alt="" />
        </div>
        <div className="cardInfo"></div>
      </div> */}
        <ul className="ProductsListUL">
          {Products.map((product, index) => {
            return (
              <li key={index} className="Products_ListItems">
                <a href="#top">
                  <div className="productImage">
                    <img src={product.img} alt="" className="frontImage" />
                  </div>
                  <div className="productName">{product.title}</div>
                  <div className="productPrice"> {product.price}</div>
                </a>
              </li>
            );
          })}

          {/* <li className="Products_ListItems">
            <a>
              <div className="productImage">
                <img src={cardImage} alt="" className="frontImage" />
              </div>
              <div className="productName">Cat Food Special</div>
              <div className="productPrice"> 1000 Rs</div>
            </a>
          </li>
          <li className="Products_ListItems">
            <a>
              <div className="productImage">
                <img src={cardImage} alt="" className="frontImage" />
              </div>
              <div className="productName">Cat Food Special</div>
              <div className="productPrice"> 1000 Rs</div>
            </a>
          </li>
          <li className="Products_ListItems">
            <a>
              <div className="productImage">
                <img src={cardImage} alt="" className="frontImage" />
              </div>
              <div className="productName">Cat Food Special</div>
              <div className="productPrice"> 1000 Rs</div>
            </a>
          </li> */}
        </ul>
      </main>

      {/* BreadCrumb */}
      {/* Cards */}
    </div>
  );
}

export default Content;
