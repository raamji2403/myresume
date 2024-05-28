import React from "react";
import divimg from "../images/div-img.png";
import dm from "../images/dm.png";
import ml from "../images/ml.png";
import iot from "../images/iot.png";

function Projects(){
    return (
            <div className="project-area" id="projects">
            <h1 >Projects</h1>
            <div className="div-img">
                <img src={divimg} alt=""/>
            </div>
            <div className="project-container">
                <div className="project">
                    <div className="proj-img"><img src={dm} alt=""/></div>
                    <h3>A Study on Drebin Dataset</h3>
                    <h4>Data Mining</h4>
                    <p><span className="tab"></span>The study used various machine learning methods, such as
                        decision trees and deep learning models, to create accurate
                        classifiers for identifying Android malware with the Drebin
                        dataset.</p>
                    <p><span className="tab"></span>Evaluating performance with metrics like accuracy and F1-score
                        highlighted the importance of feature selection and
                        preprocessing, providing valuable insights into Android malware
                        and improving mobile security measures.</p>
                </div>
                <div className="project">
                    <div className="proj-img"><img src={ml} alt=""/></div>
                    <h3>Tweet Emotion Detection using Tensorflow</h3>
                    <h4>Machine Learning</h4>
                    <p><span className="tab"></span> Tweet emotion recognition using TensorFlow, incorporating a deep
                        learning model that utilized Recurrent Neural Networks (RNN). This
                        model was designed to analyze the sequential nature of tweets,
                        capturing contextual dependencies between words to identify emotions
                        accurately.</p>
                    <p><span className="tab"></span>The goal was to create a dependable system that could automatically
                        recognize emotions in tweets using advanced deep learning methods.</p>
                </div>
                <div className="project">
                    <div className="proj-img"><img src={iot} alt=""/></div>
                    <h3>Gas Monitoring System</h3>
                    <h4>Internet of Things</h4>
                    <p><span className="tab"></span>The project involved gas detection using an MQ2 sensor which senses gases like LPG , Methane , Carbon Monoxide used with a
                        NodeMCU ESP8266 board, integrated with the Blynk app for
                        monitoring and control.</p>
                    <p><span className="tab"></span>Sensor data was transmitted to Arduino ports, and if
                        consecutive readings were outside normal bounds, email alerts
                        were sent to the user using Python's SMTP.</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;