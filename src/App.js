import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Products from './components/Products/Products';
function App() {
  return (
    // remaining tasks
    // Manage the components here,
    // 1. add categories list, map over them in sidebar component
    // 2. When clicked on them, show the relevant categories in Content
    // 3. When clicked on add to cart button, call the openCart function
    // and add the relevent product in cart, with price.
    // 4. Inc and Dec cart .
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <Header />
              <Content />
            </Route>
            <Route path="/products/:id" exact component={Products} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
