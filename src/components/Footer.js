import React from "react";

function Footer() {
    return (
        <div className="footer" id="contact">
            <div className="f-item">
                <i className="fa-solid fa-phone fa-xl"></i><p>+91 - 9384253386</p>
            </div>
            <div className="f-item">
                <i className="fa-solid fa-envelope fa-xl"></i><span style={{ marginLeft: '10px' }} ></span><a href="mailto:araamji2403@gmail.com">araamji2403@gmail.com</a>
            </div>
            <div className="f-item">
                <i className="fa-solid fa-house fa-xl"></i><p>Krishnagiri, Tamil Nadu, India</p>
            </div>
        </div>
    );
}

export default Footer;
