import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="footer-main">
                <div className="footer-logo">
                    logo
                    <img src="" alt="" />
                </div>
                <div className="footer-menu">
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About Us</a>
                        </li>
                        <li>
                            <a href="#gallery">Gallery</a>
                        </li>
                        <li>
                            <a href="#contactUs">Contact Us</a>
                        </li>
                        {/* <li>
                            <a href="#enquiry">Enquiry </a>
                        </li> */}
                    </ul>
                </div>
                <div className="footer-search">
                    <input type="text" placeholder='Enter your email' />
                    <p>Go</p>
                </div>
                <div className="footer-copyright">
                    <p>© 2024 Muscle Heaven GYM </p>
                    <p>Designed by :<a href="https://globalitsources.com/">&#160; Global IT Sources</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
