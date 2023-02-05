import React from "react";
import './part4.css';
import '../../columns.css';


const Part4 = () => {
    return(
        <div className="contact row">
            <div class="col-4">
            <h2>Contact Us From<br/>Here</h2>
            <p>You can contact us from here, you can write to us, call us or visit our service center, we will gladly assist you.</p>
        </div>
        <div className="col-4 middlepart">
            <h3><span>Telephone: </span>999 - 888 - 777</h3>
            <h3><span>Email: </span>Delivery@email.com</h3>
            <h3><span>Location: </span>Lima - Peru</h3>
        </div>
        <div className="col-4">
            <button className="btn5">Contact Us</button>
        </div>
        </div>
    )
}

export default Part4;