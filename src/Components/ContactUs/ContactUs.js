import React, { useEffect, useState } from 'react'
import "./ContactUs.css"
import ScrollReveal from 'scrollreveal'

const ContactUs = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'right',
            distance: '80px',
            duration: 1000,
            reset: true,
        });

        sr.reveal('.contactUs-box', {})

        return () => sr.destroy();
    }, []);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to backend or display a message)
        console.log({ name, number, email, message });
        // Reset form fields
        setName('');
        setEmail('');
        setNumber('');
        setMessage('');
    };
    return (
        <div className='contactUs'>
            {/* <div className="overlay"></div> */}
            <div className="contactUs-main">
                <div className="contact-title">
                    <span>Contact Us</span>
                    <h2>Get in touch with us!</h2>
                </div>
                <div className="contactUs-box">
                    {/* <div className='contactUs-left'>
                        <div className="contact-title">
                            <span>Welcome to Muscle Heaven </span>
                            <h2>Contact <span>Muscle Heaven</span> </h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut perferendis facere ipsum repudiandae sunt rerum veritatis nesciunt eius, incidunt unde excepturi, id dolore dolorum molestias maxime distinctio, eum eligendi rem!</p> */}
                    {/* <h2>Contact Us</h2> */}
                    {/* <p><FaLocationDot/> Address: Gym Address, City, Country</p>
                        <p><FaPhone/> Phone: +1234567890</p>
                        <p><FaEnvelope/> Email: gym@example.com</p> */}
                    {/* </div> */}
                    {/* <div className="contactUs-right"> */}
                    <form onSubmit={handleSubmit}>
                        <div className="contact-form-box">
                            <div className='input-box'>
                                <label>Your Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className='input-box'>
                                <label>Mobile Number</label>
                                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
                            </div>
                            <div className='input-box'>
                                <label>Your Email Address</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className='input-box'>
                                <label>Your Message</label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                            </div>
                        </div>
                        <div className="contact-form-box-button">
                            <p>We do not sell, share, trade your information with anyone for any reason. We won’t give spam mails.</p>
                            <button type="submit">
                                <p>Send Message</p>
                            </button>
                        </div>
                    </form>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default ContactUs
