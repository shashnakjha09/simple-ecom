import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css"

export default function Extraheader() {
    return (<Router>
        <div>
     
{/* <!-- extra header content --> */}
  <div class="container-fluid " id="header1">
     <ul>
       <li><a href="#"><strong>Top Offers</strong></a></li>
       {/* <li><a href="#"><strong>Grocery</strong></a></li> */}
       <li class=" dropdown">
          <a class=" dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Grocery
          </a>
          <div class="dropdown-menu text-light " aria-labelledby="navbarDropdown">
            <a class="dropdown-item " href="#">Mens's top wear</a>
            <a class="dropdown-item " href="#">Men's Bottom Wear</a>
            <a class="dropdown-item " href="#">Women Ethnic</a>
            <a class="dropdown-item " href="#">Women Westorn</a>
            <a class="dropdown-item " href="#">Women Footwear</a>
            <a class="dropdown-item " href="#">Man Footwear</a>
            <a class="dropdown-item " href="#">Watch And Accessories</a>
            <a class="dropdown-item " href="#">Mobile</a>
            <a class="dropdown-item " href="#">Kids</a>
            <a class="dropdown-item " href="#">Winter</a>
            <a class="dropdown-item " href="#">Rain</a>
            <a class="dropdown-item " href="#">Summer</a>

          </div>
        </li>
       <li><a href="#"><strong>Mobiles</strong></a></li>
       
       <li class=" dropdown">
          <a class=" dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Fashion
          </a>
          <div class="dropdown-menu text-light " aria-labelledby="navbarDropdown">
            <a class="dropdown-item " href="#">Mens's top wear</a>
            <a class="dropdown-item " href="#">Men's Bottom Wear</a>
            <a class="dropdown-item " href="#">Women Ethnic</a>
            <a class="dropdown-item " href="#">Women Westorn</a>
            <a class="dropdown-item " href="#">Women Footwear</a>
            <a class="dropdown-item " href="#">Man Footwear</a>
            <a class="dropdown-item " href="#">Watch And Accessories</a>
            <a class="dropdown-item " href="#">Mobile</a>
            <a class="dropdown-item " href="#">Kids</a>
            <a class="dropdown-item " href="#">Winter</a>
            <a class="dropdown-item " href="#">Rain</a>
            <a class="dropdown-item " href="#">Summer</a>

          </div>
        </li>
       <li><a href="#"><strong>Books</strong></a></li>
       <li><a href="#"><strong>Electronics</strong></a></li>
       <li><a href="#"><strong>Home</strong></a></li>
       <li><a href="#"><strong>Appliances</strong></a></li>
       {/* <li><a href="#"><strong>Travel</strong></a></li> */}
       <li class=" dropdown">
          <a class=" dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Travel
          </a>
          <div class="dropdown-menu text-light " aria-labelledby="navbarDropdown">
            <a class="dropdown-item " href="#">Mens's top wear</a>
            <a class="dropdown-item " href="#">Men's Bottom Wear</a>
            <a class="dropdown-item " href="#">Women Ethnic</a>
            <a class="dropdown-item " href="#">Women Westorn</a>
            <a class="dropdown-item " href="#">Women Footwear</a>
            <a class="dropdown-item " href="#">Man Footwear</a>
            <a class="dropdown-item " href="#">Watch And Accessories</a>
            <a class="dropdown-item " href="#">Mobile</a>
            <a class="dropdown-item " href="#">Kids</a>
            <a class="dropdown-item " href="#">Winter</a>
            <a class="dropdown-item " href="#">Rain</a>
            <a class="dropdown-item " href="#">Summer</a>

          </div>
        </li>
       <li><a href="#"><strong>Beauty Toys & more</strong></a></li>
       <li><a href="#"><strong>Pantry</strong></a></li>
       <li><a href="#"><strong>Computers</strong></a></li>
       {/* <li><a href="#"><strong>Sell</strong></a></li> */}
       <li class=" dropdown">
          <a class=" dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sell
          </a>
          <div class="dropdown-menu text-light " aria-labelledby="navbarDropdown">
            <a class="dropdown-item " href="#">Mens's top wear</a>
            <a class="dropdown-item " href="#">Men's Bottom Wear</a>
            <a class="dropdown-item " href="#">Women Ethnic</a>
            <a class="dropdown-item " href="#">Women Westorn</a>
            <a class="dropdown-item " href="#">Women Footwear</a>
            <a class="dropdown-item " href="#">Man Footwear</a>
            <a class="dropdown-item " href="#">Watch And Accessories</a>
            <a class="dropdown-item " href="#">Mobile</a>
            <a class="dropdown-item " href="#">Kids</a>
            <a class="dropdown-item " href="#">Winter</a>
            <a class="dropdown-item " href="#">Rain</a>
            <a class="dropdown-item " href="#">Summer</a>

          </div>
        </li>
       <li><a href="#"><strong>Work with Us</strong></a></li>
       <li><a href="#"><strong>Work with Us</strong></a></li>
     </ul>
   </div>
  <hr></hr>
        </div>
     </Router>   
    )
}
