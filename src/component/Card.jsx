import React from "react";

const Card = () => {
    return (
        <div className="cardoutter">


            <div className="card">
                <div className="cardtop">
                    SED ||
                    <p>Software Development Engineer II</p>
                    <hr />
                </div>
                <div className="cardbottom">
                    <ul>
                        <li>Python, API, MongoDB.</li>
                        <li>Dockers, Flutter.</li>
                        <li>Mobile/Web App Development</li>
                            <p> Development</p> 
                    </ul>
                </div>
            </div>
            <div className="card">
                <div className="cardtop">
                RE - I (PERCEPTION)
                    <p>Robotics Engineer I</p>
                    <hr />
                </div>
                <div className="cardbottom">
                    <ul>
                        <li>C++, ROS1/ROS2,</li>
                        <li>SLAM, OpenCV.</li>
                        <li>CUDA, Pytorch.</li>
                        <li>TensorFlow, Navigation </li>
                    </ul>
                </div>
            </div>
            <div className="card">
                <div className="cardtop">
                SCE I
                    <p>Supply Chain Engineer</p>
                    <hr />
                </div>
                <div className="cardbottom">
                    <ul>
                        <li>Lean Six Sigma</li>
                        <li>Supply chain management</li>
                        <li>Inventory</li>
                        <li>JIT</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Card;