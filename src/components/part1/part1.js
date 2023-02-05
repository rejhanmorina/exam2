import React from "react";
import './part1.css';
import img1 from "../../images/Untitled.png";
import img2 from "../../images/Untitled2.png";
import img3 from "../../images/Untitled3.png";

const Part1 = () => {
    return(
        <div>
            <div className="firstpart row">
             
             <div className="col-6 text1">
                 <h1>Order Products<br />Faster Easier</h1>
 
                 <p>Order your favorite foods at any time and we will deliver them right to where you are.</p>
                 <button className="btn1">Get Started</button>
             </div>
             <div className="col-6 order1">
                 <img src={img1} alt="" className="image1"></img>
             </div>
         </div>

         <div className="firstpart row">
                <div className="col-6 image2">
                    <img src={img2} alt=""></img>
                </div>
                <div className="col-6 text2">
                    <h2>Find Out a Little More <br></br>About Us</h2>
                    <p>We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery.</p>
                </div>
        </div>

        <div className="firstpart row">
            <div className="col-6 text3">
                <h2> Your Safety Is <br/> Important</h2>
                <p>When your order reaches you, we have the health safety protocols, so that you are protected from any disease. Watch the video of how the delivery is made.</p>
            </div>
            <div className="col-6 text3">
                <img src={img3} alt="" className="image3"></img>
            </div>
        </div>
        </div>
    )
}

export default Part1;