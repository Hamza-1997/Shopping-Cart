import '../Sidebar/sidebar.css';
// import cardImage from './img.jpg';
function Sidebar() {
  return (
    <aside className="ShopPage_SideBar">
      <div className="sidebarContainer">
        <h3>Shop /</h3>
        <a href="#top" className="linkHeading">
          All Products
        </a>
        <div className="linksContainer">
          <ul className="UL_links">
            <a href="#top">Cats</a>
            <a href="#top">Cat Food</a>
            <a href="#top">Cat Toys</a>
            {/* <a></a> */}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
