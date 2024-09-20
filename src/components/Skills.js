import React from "react";
import divimg from "../images/div-img.png";

function Skills(){
    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <div className="div-img">
                <img src={divimg} alt=""/>
            </div>
            <div className="skill-container">
                <div className="skill-box">
                    <div className="skill"> 
                        <p>C/C++</p>
                        <div className="s-bar"> </div>
                    </div>
                    <div className="skill"> 
                        <p>Python</p>
                        <div className="s-bar"></div>
                    </div>
                    <div className="skill">
                        <p>JavaScript</p>
                        <div className="s-bar"> </div>
                    </div>
                    <div className="skill">
                        <p>SQL</p>
                        <div className="s-bar"></div>
                    </div>
                    <div className="skill">
                        <p>Git/Github</p>
                        <div className="s-bar"> </div>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="skill"> 
                        <p>HTML/CSS</p>
                        <div className="s-bar"> </div>
                    </div>
                    <div className="skill">
                        <p>ReactJS</p>
                        <div className="s-bar"> </div>
                        </div>
                    <div className="skill"> 
                        <p>PHP</p>
                        <div className="s-bar"> </div>
                    </div>
                    <div className="skill">
                        <p>Mongo DB</p>
                        <div className="s-bar"> </div>
                    </div>
                    <div className="skill">
                        <p>Docker</p>
                        <div className="s-bar"> </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;