import React from "react";
import main from "../images/main.png";

function Objective(){
    return(
        <div class="objective">
            <div class="obj-img">
                <img src={main} alt=""/>
            </div>
            <div class="obj-content">
                <h2>Hello..! I'm  </h2>
                <h1>Raamji A</h1>
                <h3>Student at <span style={{ color: 'orange', textShadow: '2px 2px 2px rgb(239, 161, 97)' }}>PSG College of Technology</span></h3>
                <p><span class="tab"></span> As a IT student, my career objective is to further refine my skills and knowledge in the field of information
                    technology while gaining practical experience through internships and projects. I aim to specialize in a specific
                    area of IT, such as full-stack development, machine learning, cybersecurity , data analysis.</p>
            </div>
        </div>
    );
}

export default Objective;