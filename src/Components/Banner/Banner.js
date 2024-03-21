import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import bannerimg from "../../Assets/Banner/Banner1.jpg"
import "./Banner.css"

const Banner = () => {

    // useEffect(() => {
    //     const sections = document.querySelectorAll('section[id]');

    //     function scrollActive() {
    //         const scrollY = window.scrollY;

    //         sections.forEach(current => {
    //             const sectionHeight = current.offsetHeight;
    //             const sectionTop = current.offsetTop - 50 + 80;
    //             const sectionId = current.getAttribute('id');

    //             if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    //                 document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.add('active-link');
    //             } else {
    //                 document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.remove('active-link');
    //             }
    //         });
    //     }

    //     window.addEventListener('scroll', scrollActive);

    //     return () => {
    //         window.removeEventListener('scroll', scrollActive);
    //     };
    // }, []);

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 1500,
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
                        <a href="#contactUs"><p > Join Now</p></a>
                    </div>
                </div>
                <img src={bannerimg} alt="" />
            </div>
        </>
    )
}

export default Banner
