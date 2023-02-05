import React from "react";
import './part5.css';
import '../../columns.css';

const Part5 = () => {
    return(
        <div className="footer row">
            <div className="col-4">
            <h2>Delivery</h2>
            <ul>
                <li>Order Products Faster</li>
                <li>Easier</li>
            </ul>
        </div>
        <div className="col-4">
            <h2>Our Services</h2>
            <ul>
                <li>Pricing</li>
                <li>Discounts</li>
                <li>Report a bug</li>
                <li>Terms of Service</li>
            </ul>
        </div>
        <div className="col-4">
            <h2>Our Company</h2>
            <ul>
                <li>Blog</li>
                <li>Our mission</li>
                <li>Get in touch</li>
            </ul>
        </div>

        <div className="col-12 rejhan">
            <p>Rejhan Morina. All right reserved</p>
        </div>
        </div>
    )
}

export default Part5;