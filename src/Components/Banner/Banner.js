import React, { useEffect } from 'react'
// import ScrollReveal from 'scrollreveal'
import bannerimg from "../../Assets/Banner/Banner1.jpg"
import "./Banner.css"

const Banner = () => {

    //   useEffect(() => {
    //     const sr = ScrollReveal({
    //         origin: 'top',
    //         distance: '80px',
    //         duration: 2000,
    //         reset: true,
    //     });

    //     sr.reveal('.banner-heading', {})

    //     return () => sr.destroy();
    // }, []);

    return (
        <>
            <div className="banner">
                <div className="banner-heading">
                    <h1 >Get fit with us</h1>
                    <p>Pilates, Yoga, Fitness, Spinning & many more</p>
                    <div className="banner-button">
                        <p>Join Now</p>
                    </div>
                </div>
                <img src={bannerimg} alt="" />
            </div>
        </>
    )
}

export default Banner
