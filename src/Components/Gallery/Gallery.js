import React from 'react'
import "./Gallery.css"
import GalleryData from './GalleryData'
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Gallery = () => {

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
            <div className='Gallery-main'>
                <div className="gallery-title">
                    {/* <span>Gallery </span> */}
                    <h2>Gallery </h2>
                </div>
                <div className="gallery-box-slide-track">
                    <ReactOwlCarousel
                        loop={Infinity}
                        items={5}
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
