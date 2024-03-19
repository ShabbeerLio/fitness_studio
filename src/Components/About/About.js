import React, { useEffect } from 'react'
import "./About.css"
// import ScrollReveal from 'scrollreveal'
import AboutKey1 from "../../Assets/About/a1.png"
// import AboutKey2 from "../../Assets/about2.jpg"

const About = () => {

    //   useEffect(() => {
    //     const sr = ScrollReveal({
    //       origin: 'left',
    //       distance: '80px',
    //       duration: 2000,
    //       reset: true,
    //     });

    //     sr.reveal('.about-main', {})

    //     return () => sr.destroy();
    //   }, []);



    return (
        <>
            <div className="aboutUs">
                <div className="about-main">
                    <div className="about-left">
                        <div className="about-title">
                            <span>Welcome to Muscle Heaven GYM</span>
                            <h2>About <span>Muscle Heaven</span> </h2>
                        </div>
                        <div className="about-detail">
                            <p>Welcome to Muscle Heaven GYM,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dignissimos minus, dolorem voluptates sit deserunt.</p>
                            <p>Morbi sed varius risus, vitae molestie lectus. Donec id hendrerit velit, eu fringilla neque. Etiam id finibus sapien. Donec sollicitudin luctus ex non pharetra. Aenean lobortis ut leo vel porta. Maecenas ac vestibulum lectus. Cras nulla urna, lacinia ut tempor facilisis, congue dignissim tellus. Maecenas ac vestibulum lectus. Cras nulla urna, lacinia ut tempor facilisis, congue dignissim tellus. Phasellus sit amet justo ullamcorper, elementum ipsum nec.</p>
                        </div>
                        <div className="about-button">
                            <p>Join Now</p>
                        </div>
                    </div>
                </div>
                <div class="about_background">
                    <div class="container fill_height">
                        <div class="row fill_height">
                            <div class="col-lg-6 offset-lg-6 fill_height">
                                <div class="about_image">
                                    <img src={AboutKey1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
