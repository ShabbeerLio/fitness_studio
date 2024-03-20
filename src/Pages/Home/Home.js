import React from 'react'
import "./Home.css"
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import About from '../../Components/About/About'
import Gallery from '../../Components/Gallery/Gallery'
import Footer from '../../Components/Footer/Footer'
import ContactUs from '../../Components/ContactUs/ContactUs'
import Enquiry from '../../Components/Enquiry/Enquiry'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <section className="Banner-box" id="home">
          <Banner />
        </section>
        <section className="section" id="about">
          <About />
        </section>
        <section className="section" id="gallery">
          <Gallery />
        </section>
        <section className="section" id="contactUs">
          <ContactUs />
          <Enquiry />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Home
