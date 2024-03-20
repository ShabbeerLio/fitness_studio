import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import bannerimg from "../../Assets/Banner/Banner1.jpg"
import bannerimg2 from "../../Assets/Banner/Banner3.jpg"
import "./Banner.css"

const Banner = () => {

      useEffect(() => {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 2000,
            reset: true,
        });

        sr.reveal('.banner-heading', {})

        return () => sr.destroy();
    }, []);

    return (
        <>
            <div className="banner">
                <div className="banner-heading">
                    <span>Get fit with us</span>
                    <h1 >Muscle Heaven Gym</h1>
                    <p>Start Strong . Start Bold . Prowess .</p>
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
