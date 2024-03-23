import React, { useEffect, useRef, useState } from 'react'
import "./ContactUs.css"
import ScrollReveal from 'scrollreveal'
import emailjs from '@emailjs/browser';

const ContactUs = () => {

    const form = useRef();

    const [formData, setFormData] = useState({
        user_name: '',
        user_number: '',
        user_email: '',
        message: ''
    });


    // Handle input changes and update the formData state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const [messageSent, setMessageSent] = useState(false); // Track whether the message has been sent


    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        setMessageSent(true);

        setTimeout(() => {
            setMessageSent(false);
        }, 2500);

        emailjs.sendForm(
            'service_itw3fef',
            'template_4b6vwk8',
            form.current,
            'tXjdcsUNLR6f21ITO'
        )
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
            }, (error) => {
                console.log(error.text);
            });

        // Access the user's name, email, and message from the formData state
        const { user_name, user_number, user_email, message } = formData;

        console.log('Name:', user_name);
        console.log('Number:', user_number);
        console.log('Email:', user_email);
        console.log('Message:', message);

        setFormData({
            user_name: '',
            user_number: '',
            user_email: '',
            message: ''
        });
    };

    // scroll

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
                    {messageSent ? (
                        <div className='form-message'>
                            <p>Message sent successfully!</p>
                        </div>
                    ) : (
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="contact-form-box">
                                <div className='input-box'>
                                    <label>Name</label>
                                    <input
                                        name="user_name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleInputChange} required
                                    />
                                </div>
                                <div className='input-box'>
                                    <label>Number</label>
                                    <input
                                        name="user_number"
                                        type="number"
                                        value={formData.number}
                                        onChange={handleInputChange} required
                                    />
                                </div>
                                <div className='input-box'>
                                    <label>Email </label>
                                    <input
                                        name="user_email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange} required
                                    />
                                </div>
                                <div className='input-box'>
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange} required
                                    />
                                </div>
                            </div>
                            <div className="contact-form-box-button">
                                {/* <p>We do not sell, share, trade your information with anyone for any reason. We won’t give spam mails.</p> */}
                                <button type="submit">
                                    <p>Send Message</p>
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ContactUs
