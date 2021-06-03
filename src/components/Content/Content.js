import './Content.css';
// import cardImage from '../../assets/cat_foods/hello.jpg';
import Sidebar from '../Sidebar/sidebar';
import ProductsList from './ProductsList';
import { Link } from 'react-router-dom';

function Content() {
  return (
    <div className="contentContainer">
      <Sidebar />
      <main className="main_ShopPage">
        <ul className="ProductsListUL">
          {ProductsList.map((product, index) => {
            return (
              <Link
                key={index}
                to={`/products/${product.id}`}
                className="link_Router"
              >
                <li className="Products_ListItems">
                  <div className="productImage">
                    <img src={product.img} alt="" className="frontImage" />
                  </div>
                  <div className="productName">{product.title}</div>
                  <div className="productPrice"> {product.price}</div>
                </li>
              </Link>
            );
          })}
        </ul>
      </main>

      {/* BreadCrumb */}
      {/* Cards */}
    </div>
  );
}

export default Content;
