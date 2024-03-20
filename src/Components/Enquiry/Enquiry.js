import React, { useEffect } from 'react';
import "./Enquiry.css"
import ScrollReveal from 'scrollreveal'
import { FaLocationDot, FaPhone, FaEnvelope ,FaClock } from "react-icons/fa6";


const Enquiry = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'left',
            distance: '100px',
            duration: 2000,
            reset: true,
        });

        sr.reveal('.enquiry-left', {})

        return () => sr.destroy();
    }, []);

    return (
        <div className='Enquiry'>
            <div className='Enquiry-main'>
                <div className="enquiry-left">
                    <div className="enquiry-left-icon">
                        <FaLocationDot />
                        <p> Address: Gym Address, City, Country</p>
                    </div>
                    <div className="enquiry-left-icon">
                        <FaPhone />
                        <p> Phone: +91 7053054005</p>
                    </div>
                    <div className="enquiry-left-icon">
                        <FaEnvelope />
                        <p> Email: gym@example.com</p>
                    </div>
                    <div className="enquiry-left-icon">
                        <FaClock  />
                        <p> Time: 8:00 - 22:00 Mon-Sat</p>
                    </div>
                </div>
                <div className="enquiry-right">

                </div>
            </div>
        </div>
    );
};

export default Enquiry;
