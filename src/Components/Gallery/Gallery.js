import React, { useEffect } from 'react'
import "./Gallery.css"
import GalleryData from './GalleryData'
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { TiTick } from "react-icons/ti";
import ScrollReveal from 'scrollreveal'
import { BiSolidOffer } from "react-icons/bi";

const Gallery = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '80px',
            duration: 2000,
            reset: true,
        });

        sr.reveal('.Gallery-main1-items', {})

        return () => sr.destroy();
    }, []);
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 2000,
            reset: true,
        });

        sr.reveal('.gallery-box-slide-track', {})

        return () => sr.destroy();
    }, []);

    const responsiveOptions = {
        0: {
            items: 1,
        },
        768: {
            items: 3,
        },
        1024: {
            items: 5,
        },
    };

    return (
        <div className='Gallery'>
            <div className="gallery-background"></div>
            <div className="Gallery-main1">
                <div className="gallery-title">
                    <span>Pricing Plans </span>
                    <h2>Discover Our Membership Plans Today</h2>
                </div>
                <div className="Gallery-main1-box">
                    <div className="Gallery-main1-items">
                        <h5>Single</h5>
                        <h3>1,500 /- <span>Month</span></h3>
                        <ul>
                            <li><TiTick />3,600 Quarterly</li>
                            <li><TiTick />6,500 Half Yearly</li>
                            <li><TiTick />10,000 Yearly</li>
                        </ul>
                        <div className="gallery-items-button">
                            <p>Get Now</p>
                        </div>
                    </div>
                    <div className="Gallery-main1-items">
                        <h5>Couple</h5>
                        <h3>2,500 /- <span>Month</span></h3>
                        <ul>
                            <li><TiTick />7,000 Quarterly</li>
                            <li><TiTick />12,000 Half Yearly</li>
                            <li><TiTick />20,000 Yearly</li>
                        </ul>
                        <div className="gallery-items-button">
                            <p>Get Now</p>
                        </div>
                    </div>
                    <div className="Gallery-main1-items">
                        <h5>Group</h5>
                        {/* <p>Depends on number of persons</p> */}
                        <h3>Depends on number of persons</h3>
                        {/* <ul>
                            <li><TiTick />18,000 Quarterly</li>
                            <li><TiTick />36,000 Half Yearly</li>
                            <li><TiTick />72,000 Yearly</li>
                        </ul> */}
                        <div className="gallery-items-button">
                            <p>Get Now</p>
                        </div>
                    </div>
                </div>
                    <div className="gallery-discount">
                        <h3> <BiSolidOffer/> Special discounts for Students.</h3>
                    </div>
            </div>
            <div className='Gallery-main'>
                <div className="gallery-title">
                    <span>Gallery </span>
                    <h2>Explore Our Workout Space </h2>
                </div>
                <div className="gallery-box-slide-track">
                    <ReactOwlCarousel
                        loop={Infinity}
                        items={4}
                        autoplay={true}
                        autoplayTimeout={3000}
                        autoplaySpeed={1000}
                        smartSpeed={1000}
                        dots={false}
                        responsive={responsiveOptions}
                    >
                        {GalleryData.map((item) => (
                            <div className="gallery-box-image " key={item.id}>
                                <img src={item.cover} alt="" />
                            </div>
                        ))}

                    </ReactOwlCarousel>
                </div>

            </div>
        </div>
    )
}

export default Gallery
