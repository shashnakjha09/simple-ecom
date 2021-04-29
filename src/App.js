// import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from "./Images/logo.jpeg"
import Home from "./components/home"
import Footer from "./utils/Footer"
import Login from "./utils/Login"
import "./utils/Navbar/style.css"
import Extraheader from "./utils/Navbar"
import Cart from "./components/Cart"
import ProductList from "./components/Product-list"



function App() {
  return (
      <Router>
    <div className="App">
      
          <header>
          <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand text-light" href="#"><img src={logo} style={{height:20}} /></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
          {/* <a class="nav-link text-light" href="#">HOME <span class="sr-only">(current)</span></a> */}
          <Link className="nav-link text-light" to={"/"}>HOME <span className="sr-only">(current)</span></Link>

          </li>
          <li class="nav-item">
          <a class="nav-link text-light" href="#">More</a>
          </li>
          <li class="nav-item dropdown text-light">
          <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            PROFILE
          </a>
          <div className="dropdown-menu text-light" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to={"/Login"}><i class="fas fa-sign-in-alt text-primary"></i>Login</Link>
            <a className="dropdown-item " href="#"><i class="fas fa-clipboard-check text-primary"></i>Sign-In</a>
            <a class="dropdown-item " href="#"><i class="fas fa-clipboard-list text-primary"></i>Orders</a>
            <a class="dropdown-item " href="#"><i class="fas fa-heart text-primary"></i>YOUR Wishlist</a>
            <a class="dropdown-item " href="#"><i class="far fa-credit-card text-primary" ></i>Gift-Cart</a>
            <a class="dropdown-item " href="#"><i class="fas fa-clipboard-list text-primary"></i> Coopens</a>
            <a class="dropdown-item " href="#"><i class="fas fa-bell text-primary"></i>Notification</a>
            <a class="dropdown-item " href="#"><i class="fas fa-sign-out-alt text-primary"></i>Logout</a>

          </div>
          </li>
        
          <li class="nav-item">
          <a class="nav-link disabled" href="#">Add Your ProDuct Here</a>
          </li>
        
          <li class="nav-item">
          {/* <a class="nav-link text-light" href="#"><i class="fa fa-shopping-cart"></i></a> */}
          <Link className="nav-link text-light" to={"/Cart"}><i class="fa fa-shopping-cart"></i></Link>

          </li>
          </ul>

         <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0 text-light" type="submit">Search</button>
      </form>
    </div>
  </nav>
</header>
         
        <Extraheader />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/Cart">
              <Cart />
            </Route>

            <Route exact path="/ProductList">
              <ProductList />
            </Route>
          </Switch>
        <Footer />  
    </div>
  </Router>
  )
}

export default App;
