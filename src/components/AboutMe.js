import React from "react";
import divimg from "../images/div-img.png";
import profile from "../images/profile.png";
import cv from "../images/Raamji_resume.pdf";


function AboutMe() {
    return (
        <div className="aboutme" id="aboutme">
            <h1 style={{ opacity: 0.8 }}>About Me</h1>
            <div className="div-img">
                <img src={divimg} alt=""/>
            </div>
            <div className="profile-img">
                <img src={profile} alt=""/>
                <a href={cv} className="down-cv" download>Download CV</a>
            </div>
            <div className="content">
                <h3>Raamji A</h3>
                <p>
                    <span className="tab"></span> Hello, I am Raamji from Krishnagiri, currently in my final year of B.Tech in Information Technology at PSG College of Technology, Coimbatore. I completed my schooling at Ashok Missions Matric Higher Secondary School in Krishnagiri.
                </p>
            </div>
            <div className="info-container">
                <div className="info">
                    <p><span className="info-t">Date.of.Birth :</span><span className="info-d">24-10-2003</span></p><hr/>
                    <p><span className="info-t">Degree :</span><span className="info-d">Bachelor</span></p><hr/>
                    <p><span className="info-t">Study :</span><span className="info-d">PSG College of Technology</span></p><hr/>
                    <p><span className="info-t">City :</span><span className="info-d">Coimbatore</span></p><hr/>
                    <p><span className="info-t">Phone :</span><span className="info-d">+91-9384253386</span></p>
                </div>
                <div className="info">
                    <p><span className="info-t">Age :</span><span className="info-d">20 Years</span></p><hr/>
                    <p><span className="info-t">Dept. :</span><span className="info-d">Information Technology</span></p><hr/>
                    <p><span className="info-t">CGPA :</span><span className="info-d">8.07</span></p><hr/>
                    <p><span className="info-t">State :</span><span className="info-d">Tamil Nadu</span></p><hr/>
                    <p><span className="info-t">Email :</span><span className="info-d">araamji2403@gmail.com</span></p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
