import React, { useEffect } from 'react';
import "./Enquiry.css"
import ScrollReveal from 'scrollreveal'
import { FaLocationDot, FaPhone, FaEnvelope, FaClock, FaInstagram } from "react-icons/fa6";


const Enquiry = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'left',
            distance: '100px',
            duration: 1500,
            reset: true,
        });

        sr.reveal('.enquiry-left', {})

        return () => sr.destroy();
    }, []);

    return (
        <div className='Enquiry'>
            <div className="enquiry-background"></div>
            <div className='Enquiry-main'>
                <div className="enquiry-left">
                    <div className="enquiry-left-icon">
                        <FaLocationDot />
                        <p> Address: Jeevan Vihar, Mahindra Enclave, Shastri Nagar, Ghaziabad, Uttar Pradesh 201002</p>
                    </div>
                    <div className="enquiry-left-icon">
                        <a href="tel:07053054005">
                            <FaPhone />
                            <p> Phone:7053054005</p>
                        </a>
                    </div>
                    <div className="enquiry-left-icon">
                        <a href="mailto:.com">
                            <FaEnvelope />
                            <p> Email: muscleheavengym@gmail.com</p>
                        </a>
                    </div>
                    <div className="enquiry-left-icon">
                        <FaClock />
                        <p> 5:00 A.M - 11:00 A.M (Mon - Sat)</p>
                        <p> 5:00 P.M - 11:00 P.M (Mon - Sat)</p>
                    </div>
                    <div className="enquiry-left-icon">
                        <a href="https://instagram.com/_muscleheavengym_/?igsh=MTB2cWp5ODdtNnhwbA%3D%3D">
                            < FaInstagram />
                            <p>_muscleheavengym_</p>
                        </a>
                    </div>
                </div>
                <div className="enquiry-right">
                    
                </div>
            </div>
        </div>
    );
};

export default Enquiry;
