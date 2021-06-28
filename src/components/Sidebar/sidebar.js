import '../Sidebar/sidebar.css';
import { Switch, Route, Link } from 'react-router-dom';
// import cardImage from './img.jpg';
import categories from '../../data/allCategories';
function Sidebar({ category }) {
  return (
    <aside className="ShopPage_SideBar">
      <div className="sidebarContainer">
        <h3>Shop /</h3>
        <Switch>
          <Route exact path="/">
            <span className="linkHeading">All Products</span>
          </Route>
          <Route exact path="/:id">
            <span className="linkHeading">{category && category.name}</span>
          </Route>
        </Switch>
        {/* <span className="linkHeading">All Products</span> */}
        <div className="linksContainer">
          <ul className="UL_links">
            {categories.map((category, index) => {
              return (
                <Link
                  key={index}
                  to={`/${category.id}`}
                  className="link_Router"
                >
                  <li>{category.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
