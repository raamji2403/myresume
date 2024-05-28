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
                    <h3>Language Skills</h3>
                    <div className="skill"> 
                        <p>C++</p>
                        <div className="s-bar"> <div className="s-per" style={{width: '80%'}}>80%</div></div>
                    </div>
                    <div className="skill"> 
                        <p>Python</p>
                        <div className="s-bar"> <div className="s-per" style={{width: '70%'}}>70%</div></div>
                    </div>
                    <div className="skill">
                        <p>Java Script</p>
                        <div className="s-bar"> <div className="s-per" style={{width: '75%'}}>75%</div></div>
                    </div>
                    <div className="skill">
                        <p>SQL</p>
                        <div className="s-bar"> <div className="s-per" style={{width: '70%'}}>70%</div></div>
                    </div>
                </div>
                <div className="skill-box">
                    <h3>Professional Skills</h3>
                    <div className="skill"> 
                        <p>HTML</p>
                        <div className="s-bar"> <div className="s-per" style={{width: '80%'}}>80%</div></div>
                    </div>
                    <div className="skill">
                        <p>CSS</p>
                        <div className="s-bar"> <div className="s-per" style={{width: '75%'}}>75%</div></div>
                        </div>
                    <div className="skill"> 
                        <p>PHP</p>
                        <div className="s-bar"> <div className="s-per" style={{width: '65%'}}>65%</div></div>
                    </div>
                    <div className="skill">
                        <p>Mongo DB</p>
                        <div className="s-bar"> <div className="s-per" style={{width: '60%'}}>60%</div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;