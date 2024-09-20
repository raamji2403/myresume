import React from "react";
import divimg from "../images/div-img.png";
import badminton from "../images/badminton.png";
import coding from "../images/coding.png";

function ExtraCurricular() {
    return (
        <>
            {/* ------------------------------------Club Activity Section ----------------------------*/}
            <div className="club-act">
                <h1>Club Activities</h1>
                <div className="div-img">
                    <img src={divimg} alt=""/>
                </div>
                <div className="club-box">
                    <div className="club">
                        <h4>Event Management Team</h4>
                        <p>
                            <i className="fa-solid fa-people-group fa-xl">
                                <span style={{ marginLeft: '15px' }}></span>
                            </i>
                            Rotaract Club
                        </p>
                    </div>
                    <div className="club">
                        <h4>Literary & Content Team</h4>
                        <p>
                            <i className="fa-regular fa-circle-question fa-rotate-by fa-xl"></i>
                            <span style={{ marginLeft: '15px' }}></span>
                            ASQ Quiz Club
                        </p>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------Hobby Section -------------------------------*/}
            <div className="hobbies">
                <h1>Hobbies</h1>
                <div className="div-img">
                    <img src={divimg} alt=""/>
                </div>
                <div className="hob-box">
                    <div className="hobby">
                        <span className="h-img">
                            <img src={badminton} alt=""/>
                        </span>
                        <h4>Playing Badminton</h4>
                    </div>
                    <div className="hobby">
                        <span className="h-img">
                            <img src={coding} alt=""/>
                        </span>
                        <h4>Coding DSA</h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExtraCurricular;
