import React from "react";

import logo from "../images/logo-psg.png";


function Header(){
    return (
        <div class="head" >
            <div class="logo-size">
                <img src={logo} alt="" />
            </div>
            <ul class="navbar">
                <input type="checkbox" id="nav-check"/> 
                <span class="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#aboutme">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li> <a href="#skills">Skills</a></li>
                    <li><a href="#courseworks">Course Works</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <label for="nav-check" class="nav-close"><i class="fa-solid fa-times"></i></label>
                </span>
                <label for="nav-check" class="nav-open"><i class="fa-solid fa-bars"></i></label>
            </ul>
        </div>
    );
}

export default Header;