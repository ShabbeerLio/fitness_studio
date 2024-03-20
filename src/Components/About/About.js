import React, { useEffect } from 'react'
import "./About.css"
import ScrollReveal from 'scrollreveal'
import AboutKey1 from "../../Assets/Gallery/gallery3.jpg"
// import AboutKey2 from "../../Assets/about2.jpg"

const About = () => {

    //   useEffect(() => {
    //     const sr = ScrollReveal({
    //       origin: 'left',
    //       distance: '80px',
    //       duration: 2000,
    //       reset: true,
    //     });

    //     sr.reveal('.about-left', {})

    //     return () => sr.destroy();
    //   }, []);
    //   useEffect(() => {
    //     const sr = ScrollReveal({
    //       origin: 'right',
    //       distance: '80px',
    //       duration: 2000,
    //       reset: true,
    //     });

    //     sr.reveal('.about_image', {})

    //     return () => sr.destroy();
    //   }, []);



    return (
        <>
            <div className="aboutUs">
                <div className="about-gym">GYM</div>
                <div className="about-main">
                    <div className="about-left">
                        <div className="about-title">
                            <span>About </span>
                            <h2>Welcome to Muscle Heaven </h2>
                        </div>
                        <div className="about-detail">
                            <p>Welcome to Muscle Heaven GYM, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dignissimos minus, dolorem voluptates sit deserunt.</p>
                            <p>Morbi sed varius risus, vitae molestie lectus. Donec id hendrerit velit, eu fringilla neque. Etiam id finibus sapien. Donec sollicitudin luctus ex non pharetra. Aenean lobortis ut leo vel porta. Maecenas ac vestibulum lectus. Cras nulla urna, lacinia ut tempor facilisis, congue dignissim tellus.</p>
                        </div>
                        <div className="about-button">
                            <p>Join Now</p>
                        </div>
                    </div>
                    <div className="about-right">
                        <img src={AboutKey1} alt="" />
                    </div>
                </div>
                <div className="about_background">
                    {/* <div className="container fill_height">
                        <div className="row fill_height">
                            <div className="col-lg-6 offset-lg-6 fill_height">
                                <div className="about_image">
                                    <img src={AboutKey1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default About
