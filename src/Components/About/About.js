import React, { useEffect } from 'react'
import "./About.css"
import ScrollReveal from 'scrollreveal'
import AboutKey1 from "../../Assets/Gallery/gallery3.jpg"
// import AboutKey2 from "../../Assets/about2.jpg"

const About = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 1500,
            reset: true,
        });

        sr.reveal('.about-left', {})

        return () => sr.destroy();
    }, []);
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'right',
            distance: '80px',
            duration: 1500,
            reset: true,
        });

        sr.reveal('.about-right', {})

        return () => sr.destroy();
    }, []);



    return (
        <>
            <div className="aboutUs">
                <div className="about-gym">GYM</div>
                <div className="about-main">
                    <div className="about-left">
                        <div className="about-title">
                            <span>Welcome to </span>
                            <h2> Muscle Heaven Gym</h2>
                        </div>
                        <div className="about-detail">
                            <p>Welcome to Muscle Heaven Gym, where strength meets serenity. We're dedicated to sculpting not just bodies, but lifestyles.</p>
                            <p>With state-of-the-art equipment and expert trainers, we empower you to push your limits and achieve your fitness goals. Join our vibrant community and embark on a journey to a healthier, stronger you.</p>
                        </div>
                        <div className="about-button">
                            <a href="#contactUs"><p > Join Now</p></a>
                        </div>
                    </div>
                    <div className="about-right">
                        <img src={AboutKey1} alt="" />
                    </div>
                </div>
                {/* <div className="about_background">
                    <div className="container fill_height">
                        <div className="row fill_height">
                            <div className="col-lg-6 offset-lg-6 fill_height">
                                <div className="about_image">
                                    <img src={AboutKey1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default About
