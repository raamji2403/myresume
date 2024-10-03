import React from "react";
import divimg from "../images/div-img.png";

function CourseWorks(){
    return (
        <div className="courseworks" id="courseworks">
            <h1>Course Works</h1>
            <div className="div-img">
                <img src={divimg} alt=""/>
            </div>
            <div className="c-container">
                <div className="c-box">
                    <div className="course">
                        <h4>DSA</h4>
                        <p><span className="tab"></span> Data Structures and Algorithms (DSA) is a fundamental part of Computer Science that
                             teaches you how to think and solve complex problems systematically. Using the 
                              data structure and algorithm makes your program run faster, especially when
                               working with lots of data.</p>
                    </div>
                    <div className="course">
                       <h4>Data Mining</h4>
                       <p><span className="tab"></span>Data mining is the process of sorting through large data sets to identify patterns and 
                        relationships that can help solve business problems through data analysis. Data mining techniques
                         and tools help enterprises to predict future trends and make more informed business decisions.</p>
                    </div>
                    <div className="course">
                        <h4>Software Engineering</h4>
                        <p><span className="tab"></span>Software Engineering
                            Software engineering is the branch of computer science that deals with the design, 
                            development, testing, and maintenance of software applications. Software engineers 
                            apply engineering principles and knowledge of programming languages to build software
                             solutions for end users.</p>
                    </div>
                </div>
                <div className="c-box">
                    <div className="course">
                        <h4>DBMS</h4>
                        <p><span className="tab"></span>Database Management Systems (DBMS) are software systems used to store, retrieve,
                             and run queries on data. A DBMS serves as an interface between an end-user and a
                        database, allowing users to create, read, update, and delete data in the database.</p>
                    </div>
                    <div className="course">
                        <h4>Machine Learning</h4>
                        <p><span className="tab"></span>Machine learning (ML) is a branch of artificial intelligence (AI) and computer science that focuses 
                            on the using data and algorithms to enable AI to imitate the way that humans
                             learn, gradually improving its accuracy.</p>
                    </div>
                    <div className="course">
                        <h4>Operating Systems</h4>
                        <p><span className="tab"></span>
                        An Operating System (OS) is system software that manages computer hardware
                         and software resources. It provides a user interface, handles tasks like memory 
                         management, process control, and file management, and enables communication between 
                         hardware components and applications for efficient operation and functionality.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseWorks;