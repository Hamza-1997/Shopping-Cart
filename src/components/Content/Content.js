import './Content.css';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../Sidebar/sidebar';
import categories from '../../data/allCategories';
import ProductLists from './ProductLists';
import allProducts from '../../data/allProducts';

function Content(props) {
  const [productCategory, setProductCategory] = useState('');

  const categoryId = props.match?.params.id;
  const category = categories.find((category) => category.id === categoryId);
  //set product category whenever clicked on new one from sidebar
  //check id from params and filter/find it from allCategories
  // when found, render only that specific id from allProducts(use find()).
  useEffect(() => {
    if (category) {
      const productFound = allProducts.filter(
        (product) => product.categoryId === category.id
      );

      setProductCategory(productFound);
    }
  }, [categoryId, category]);

  return (
    <div className="contentContainer">
      {/* Rendering content in such a way that when user click on 
      a category from aside bar, it gets into URL, then use that 
      as params to get all products of that relevant id, for that,
      use a state to store it. */}
      <Sidebar category={category} />
      <main className="main_ShopPage">
        <ul className="ProductsListUL">
          <Switch>
            <Route exact path="/">
              {allProducts &&
                allProducts.map((product) => (
                  <ProductLists product={product} />
                ))}
            </Route>
            <Route exact path="/:id">
              {productCategory &&
                productCategory.map((product) => (
                  <ProductLists product={product} />
                ))}
            </Route>
          </Switch>
        </ul>
      </main>
    </div>
  );
}

export default Content;
