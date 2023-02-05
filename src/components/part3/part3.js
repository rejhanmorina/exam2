import React from "react";
import './part3.css';
import img7 from "../../images/Untitled7.png";
import btn3 from "../../images/btn3.png";
import btn4 from "../../images/btn4.png";

const Part3 = () => {
    return(
        <div className="thirdpart row">
            <div className="col-6">
            <img src={img7} alt="" className="image7"></img>
        </div>
        <div className="col-6 text2">
            <h2>Watch Your Delivery<br/> At Any Time</h2>
            <p>With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!</p>
            <button className="btn3"><img src={btn3}></img>App Store</button>
            <button className="btn4"><img src={btn4}></img>Google Play</button>
        </div>
        </div>
    )
}

export default Part3;