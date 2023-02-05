import React from "react";
import './part2.css';
import '../../columns.css';
import img4 from "../../images/Untitled4.png";
import img5 from "../../images/Untitled5.png";
import img6 from "../../images/Untitled6.png";

const Part2 = () => {
    return(
        <div>
            <div>
        <h1 className="services-title">Some Services We <br/>Offer</h1>
            </div>

        <div className="services row">
            <div className="col-2 box">
            <h2>Payment Done</h2>
            <img src={img4} alt=""></img>
            <p>Pay with a Visa or PayPal card and without much ado.</p>
            <h4>Learn More</h4>
        </div>
        <div className="col-2 box">
            <h2>Find Your Product</h2>
            <img src={img5} alt=""></img>
            <p>We offer sale of products through the Internet.</p>
            <h4>Learn More</h4>
        </div>
        <div className="col-2 box">
            <h2>Product Received</h2>
            <img src={img6} alt=""></img>
            <p>In our app you can see the delay time of your order.</p>
            <h4>Learn More</h4>
        </div>
        </div>
        </div>
    )
}

export default Part2;