import React from 'react'
import {Link , Router , Route} from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./style.css"
import slider1 from "../../Images/slider1.jpg"
import slider2 from "../../Images/slider2.jpg"
import slider3 from "../../Images/slider3.jpg"
import showcase1 from "../../Images/showcase1.jpg"
import deal1 from "../../Images/deal1.jpg"
import deal2 from "../../Images/deal2.jpg"
import deal3 from "../../Images/deal3.jpg"
import deal4 from "../../Images/deal4.jpg"
import deal5 from "../../Images/deal5.jpg"
import deal6 from "../../Images/deal6.jpg"
import product1 from "../../Images/product1.jpeg"
import product2 from "../../Images/product2.jpeg"
import product3 from "../../Images/product3.jpeg"
import product4 from "../../Images/product4.jpeg"
import product5 from "../../Images/product5.jpeg"
import product6 from "../../Images/product6.jpeg"





export default function Home() {
    return (
	// <Router>
		<div>
			{/* SLIDER ITEMS */}
<div class="container-fluid">
		<div class="carousel slide" id="main-carousel" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#main-carousel" data-slide-to="0" class="active"></li>
				<li data-target="#main-carousel" data-slide-to="1"></li>
				<li data-target="#main-carousel" data-slide-to="2"></li>
				<li data-target="#main-carousel" data-slide-to="3"></li>
			</ol>
            {/* <!-- /.carousel-indicators --> */}
			
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img class="d-block img-fluid" src={slider1} alt="" />
					    <div class="carousel-caption d-none d-md-block">
                           <button type="button" class="btn btn-warning">Shop Now(70%)</button>
                        <h3>Shop Now For Extra 70% Off</h3>
                    <h4 class="text-light">Deal Of the Day For Grocry</h4>
				</div>
				</div>

				<div class="carousel-item">
					<img class="d-block img-fluid" src={slider2} alt="" />
					   <div class="carousel-caption d-none d-md-block">
                          <button type="button" class="btn btn-warning">Pay Now</button>
                            <h3 class="text-dark">Pay Now For Extra Cashback And Unlock Reward</h3>
						<h4 class="text-danger">Pay Diretly With One Click</h4>
					</div>
				</div>
				<div class="carousel-item">
					<img class="d-block img-fluid" src={slider3} alt="" />
					   <div class="carousel-caption d-none d-md-block">
						   <h3>Mountain</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci esse vitae exercitationem fugit, numquam minus!</p>
					</div>
				</div>
				<div class="carousel-item">
					<img src={slider2} alt="" class="d-block img-fluid" />
					<div class="carousel-caption d-none d-md-block">
						<h3>Mountain</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci esse vitae exercitationem fugit, numquam minus!</p>
					</div>
				</div>
			</div>
            {/* <!-- /.carousel-inner --> */}
			
			<a href="#main-carousel" class="carousel-control-prev" data-slide="prev">
				<span class="carousel-control-prev-icon"></span>
				  <span class="sr-only" aria-hidden="true">Prev</span>
			</a>
			<a href="#main-carousel" class="carousel-control-next" data-slide="next">
				<span class="carousel-control-next-icon"></span>
				   <span class="sr-only" aria-hidden="true">Next</span>
			</a>
		</div>
        
	</div>
           {/* DEALS */}
	   <div className="container-fluid">
		   <h4 id="deal">Deals Of the Day: <span className="text-primary" id="deal">19 : 21 : 55 left
		   </span><span className="float-right"><button type="button" class="btn btn-primary text-light">View All</button></span></h4>
	   </div>
	   <hr></hr>

	  <div className="container-fluid" id="product-showcase">
	    <div class="row">
           <div class="col-lg-2">
		       {/* <img src={product1} alt="deal1" id="img12" /> */}
			   <Link  to={"/ProductList"}><img src={product1} alt="deal1" id="img12" /></Link>
			   <h6 id="deals"><span className="reupee">₹</span>399.99-<span className="rupee">₹</span>7999.99</h6>
			   <h6 className="cat" id="deals">Electronics</h6>
			   <h7 className="text-success" id="deals">Upto 40% to 70% Off</h7>

		   </div>
       
	    <div class="col-lg-2">
		    {/* <img src={product2} alt="deal2" /> */}
			<Link  to={"/ProductList"}><img src={product2} alt="deal1" id="img12" /></Link>

			<h6 id="deals"><span className="reupee">₹</span>399.99-<span className="rupee">₹</span>7999.99</h6>
			<h6 className="cat" id="deals">Music Items</h6>
			<h7 className="text-success" id="deals">Upto 30% to 50% Off</h7>
		    </div>
       
	    <div class="col-lg-2">
		    {/* <img src={product3} alt="deal3" /> */}
			<Link  to={"/ProductList"}><img src={product3} alt="deal1" id="img12" /></Link>

			<h6 id="deals"><span className="reupee">₹</span>399.99-<span className="rupee">₹</span>7999.99</h6>
			<h6 className="cat" id="deals">Headphones</h6>
			<h7 className="text-success" id="deals">Upto 40% to 60% Off</h7>
			</div>
		
		<div class="col-lg-2">
		    {/* <img src={product4} alt="deal4" /> */}
			<Link  to={"/ProductList"}><img src={product4} alt="deal1" id="img12" /></Link>

			<h6 id="deals"><span className="reupee">₹</span>399.99-<span className="rupee">₹</span>7999.99</h6>
			<h6 className="cat" id="deals">Home & Grocery</h6>
			<h7 className="text-success" id="deals">Upto 20% to 40% Off</h7>

			</div>

		<div class="col-lg-2">
		     {/* <img src={product5} alt="deal5" /> */}
			 <Link  to={"/ProductList"}><img src={product5} alt="deal1" id="img12" /></Link>

			 <h6 id="deals"><span className="reupee">₹</span>399.99-<span className="rupee">₹</span>7999.99</h6>
			 <h6 className="cat" id="deals">Home & Electronics</h6>
			 <h7 className="text-success" id="deals">Upto 40% to 50% Off</h7>

	 		</div>
		
		<div class="col-lg-2">
		     {/* <img src={product6} alt="deal6" /> */}
			 <Link  to={"/ProductList"}><img src={product6} alt="deal1" id="img12" /></Link>

			 <h6 id="deals"><span className="reupee">₹</span>399.99-<span className="rupee">₹</span>7999.99</h6>
			 <h6 className="cat" id="deals">Bike & Accessories</h6>
			 <h7 className="text-success" id="deals">Upto 30% to 70% Off</h7>

			</div>
		
         </div>
	   </div>
	{/* DEALS */}
       <hr></hr>
	   <div className="container-fluid">
		   <h4 id="deals">Top Deals on Accessories: <span className="text-primary" id="deals">
		     </span><span className="float-right"><button type="button" class="btn btn-primary text-light">View All</button></span></h4>
	   </div>
	   <hr></hr>

	   {/* ITEMS GRID */}
       
	   {/* PRODUCT SHOWCASE */}
	   
	   <div className="container-fluid" id="product-showcase">
	    <div class="row">
           <div class="col-lg-2">
		       {/* <img src={deal1} alt="deal1" /> */}
			   <Link  to={"/ProductList"}><img src={deal1} alt="deal1" id="img12" /></Link>
			   <h6 id="deals"><span className="reupee">₹</span>399.99-<span className="rupee">₹</span>7999.99</h6>
			   <h6 className="cat" id="deals">Electronics</h6>
			   <h7 className="text-success" id="deals">Upto 30% to 70% Off</h7>
		   </div>
       
	    <div class="col-lg-2">
		    {/* <img src={deal2} alt="deal2" /> */}
			<Link  to={"/ProductList"}><img src={deal2} alt="deal1" id="img12" /></Link>
			<h6 id="deals"><span className="reupee">₹</span>399.99-<span className="rupee">₹</span>7999.99</h6>
			<h6 className="cat" id="deals">Music Items</h6>
			<h7 className="text-success" id="deals">Upto 40% to 70% Off</h7>

		    </div>
       
	    <div class="col-lg-2">
		    {/* <img src={deal3} alt="deal3" /> */}
			<Link  to={"/ProductList"}><img src={deal3} alt="deal1" id="img12" /></Link>
			<h6 id="deals"><span className="reupee">₹</span>399.99-<span className="rupee">₹</span>7999.99</h6>
			<h6 className="cat" id="deals">Headphones</h6>
			<h7 className="text-success" id="deals">Upto 20% to 30% Off</h7>

			</div>
		
		<div class="col-lg-2">
		    {/* <img src={deal4} alt="deal4" /> */}
			<Link  to={"/ProductList"}><img src={deal4} alt="deal1" id="img12" /></Link>
			<h6 id="deals"><span className="reupee">₹</span>399.99-<span className="rupee">₹</span>7999.99</h6>
			<h6 className="cat" id="deals">Home & Grocery</h6>
			<h7 className="text-success" id="deals">Upto 50% to 70% Off</h7>
			</div>

		<div class="col-lg-2">
		     {/* <img src={deal5} alt="deal5" /> */}
			 <Link  to={"/ProductList"}><img src={deal5} alt="deal1" id="img12" /></Link>
			 <h6 id="deals"><span className="reupee">₹</span>399.99-<span className="rupee">₹</span>7999.99</h6>
			 <h6 className="cat" id="deals">Home & Electronics</h6>
			 <h7 className="text-success" id="deals">Upto 50% to 60% Off</h7>
	 		</div>
		
		<div class="col-lg-2">
		     {/* <img src={deal6} alt="deal6" /> */}
			 <Link  to={"/ProductList"}><img src={deal6} alt="deal1" id="img12" /></Link>

			 <h6 id="deals"><span className="reupee">₹</span>399.99-<span className="rupee">₹</span>7999.99</h6>
			 <h6 className="cat" id="deals">Bike & Accessories</h6>
			 <h7 className="text-success" id="deals">Upto 10% to 30% Off</h7>
			</div>
		
         </div>
	   </div>
      <hr></hr>

	  

       {/* Security and Payments Methods */}

	   <div class="container-fluid">
    <div class="row">
        <div class="col-lg-3 text-center">
			<i class="fa fa-money-check-alt" id="awesome"></i>
			   <h5>100% SECURE PAYMENT</h5>
			   <p className="text-success"><small>Moving your card details to a much more secured place</small></p>
		</div>
        
		<div class="col-lg-3 text-center">
			<i class="fa fa-user-lock" id="awesome"></i>
		    	<h5>TRUSTPAY</h5>
			       <p className="text-success"><small>100% Payment Protection. Easy Return Policy</small></p>
		</div>
       
	    <div class="col-lg-3 text-center ">
		   <i class="fas fa-phone-volume" id="awesome"></i>
		      <h5>HELP CENTER</h5>
			    <p className="text-success"><small>Got a Question? Look no further Browse our FAQs or Submit Your quory here</small></p>
		</div>
		
		<div class="col-lg-3 text-center">
		<i class="fas fa-mobile-alt" id="awesome"></i>
		   <h5>SHOP ON THE GO</h5>
		      <p className="text-success"><small>Download the App And Get exciting App Only Offers At Your Fingertips</small></p>
		</div>

    </div>
</div>
   
</div>

  )
}
