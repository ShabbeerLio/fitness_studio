import React, { useEffect, useState } from 'react'
import "./ContactUs.css"
import ScrollReveal from 'scrollreveal'

const ContactUs = () => {

    // useEffect(() => {
    //     const sr = ScrollReveal({
    //         origin: 'bottom',
    //         distance: '80px',
    //         duration: 1500,
    //         reset: true,
    //     });

    //     sr.reveal('.overlay', {})

    //     return () => sr.destroy();
    // }, []);

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'right',
            distance: '80px',
            duration: 1500,
            reset: true,
        });

        sr.reveal('.contactUs-left', {})

        return () => sr.destroy();
    }, []);

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 1500,
            reset: true,
        });

        sr.reveal('.contactUs-right', {})

        return () => sr.destroy();
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to backend or display a message)
        console.log({ name, email, message });
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };
    return (
        <div className='contactUs'>
            <div className="overlay"></div>
            <div className="contactUs-main">
                <div className="contactUs-box">
                    <div className='contactUs-left'>
                        <div className="contact-title">
                            <span>Welcome to Muscle Heaven </span>
                            <h2>Contact <span>Muscle Heaven</span> </h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut perferendis facere ipsum repudiandae sunt rerum veritatis nesciunt eius, incidunt unde excepturi, id dolore dolorum molestias maxime distinctio, eum eligendi rem!</p>
                        {/* <h2>Contact Us</h2> */}
                        {/* <p><FaLocationDot/> Address: Gym Address, City, Country</p>
                        <p><FaPhone/> Phone: +1234567890</p>
                        <p><FaEnvelope/> Email: gym@example.com</p> */}
                    </div>
                    <div className="contactUs-right">
                        <form onSubmit={handleSubmit}>
                            <div className='input-box'>
                                {/* <label>Name:</label> */}
                                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                            </div>
                            <div className='input-box'>
                                {/* <label>Email:</label> */}
                                <input type="number" placeholder="Ph. No." value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                            <div className='input-box'>
                                {/* <label>Message:</label> */}
                                <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
                            </div>
                            <button type="submit">
                                <p>Send Message</p>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
