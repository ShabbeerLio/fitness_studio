import React from 'react'
import "./ContactUs.css"

const ContactUs = () => {
    return (
        <div className='contactUs'>
            <div class="overlay"></div>
            <div className="contactUs-main">
                <div className='contactUs-left'>
                    <h2>Contact Details</h2>
                    <p>Address: Gym Address, City, Country</p>
                    <p>Phone: +1234567890</p>
                    <p>Email: gym@example.com</p>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
