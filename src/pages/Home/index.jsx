import React from 'react'
import Banner from '../../components/Banner'
import FAQ from '../../components/FAQ'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import OurService from '../../components/OurService'
import PromoBanner from '../../components/PromoBanner'
import Testimonial from '../../components/Testimonial'
import WhyUs from '../../components/WhyUs'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <OurService id="ourservice" />
      <WhyUs id="whyus" />
      <Testimonial id="testimonial" />
      <PromoBanner />
      <FAQ id="faq" />
      <Footer />
    </div>
  )
}

export default Home
