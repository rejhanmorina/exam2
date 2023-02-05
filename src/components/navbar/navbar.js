import React from "react";
import './navbar.css';

const Navbar = () => {
    return(
        <div className="header row">
            <div className="col-4">
                <h1>Delivery</h1>
            </div>
            <div className="col-6 nav">
                <ul className="nav-list showblock">
                    <li className="showblock"><a href="#">Home</a></li>
                    <li className="showblock"><a href="#">About us</a></li>
                    <li className="showblock"><a href="#">Services</a></li>
                    <li className="showblock"><a href="#">Contact us</a></li>
                    <li className="showblock"><button>Order Now!</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;