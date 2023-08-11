import React from "react";


const Footer = () => {
    return (
        <div className=" footer">
            <div className="footeritem">
                <div className="logo">
                    <img className="logot" src="https://getpeppermint.co/wp-content/uploads/2023/07/Final-logo-Peppermint-13.png" alt="no image" />
                    <p>Aubotz Labs Pvt Ltd</p>
                    <p> CIN: U29100MH2019PTC324975</p>

                    <div className="iconparent">
                    
                        <img className="icon" src=" https://cdn2.iconfinder.com/data/icons/buno-ui-interface/32/__map_pin_location-64.png" alt="image not found " />
                    
                    <div className="para">
                        <p>Survey No 116, 3/1, opp. ShubhTej Mangal</p>
                        <p> Karyalay, near Balaji Chowk, Jai Bhavani Nagar,</p>
                        <p> Pashan, Pune, Maharashtra 411021</p>
                    </div>
                    </div>


                    <div className="gmail">
                        <img className="icon" src=" https://cdn-icons-png.flaticon.com/128/4926/4926635.png" alt="image not found " />
                    
                    <p> info@getpeppermint.co</p>
                    </div>
                    
                        <div className="mobile">
                       
                            <img className="icon" src=" https://cdn3.iconfinder.com/data/icons/aami-web-internet/64/aami8-18-64.png" alt="image not fount " />
                            <p>+91 89567 10044  </p>
                    
                    </div>
                </div>
                <div className="quecklink ">
                    <div className="heading">
                    <h2 >Quick Links</h2>
                    </div> 
                    <ul style={{padding: "0px",}}>
                        <li><a href=" #" >Home </a></li>
                        <li><a href=" #" >FAQs </a></li>
                        <li><a href=" #" >Case Studies</a> </li>
                        <li><a href=" #" >Products </a></li>
                        <li><a href=" #" > Blog </a></li>
                        <li><a href=" #" > Privacy Policy </a></li>
                        <li><a href=" #" > Careers </a></li>
                    </ul>
                </div>
                <div className="recentpost">
                    <h2> Recent Posts</h2>
                    <ul style={{padding: "0px",}}>
                        <li><a href="#" > Elevating Efficiency: Evolution of Material Handling with AMRs</a></li>
                        <li><a href="#" > Autonomous Mobile Robots: The Future of Efficient Material Handling</a></li>
                        <li><a href="#" >Robotic Floor Scrubbers – The Future of Autonomous Cleaning at Airports </a></li>
                    </ul>
                </div>


            </div>
            <hr />
            getpeppermint © 2023. All rights reserved.
        </div>

    )
}
export default Footer;