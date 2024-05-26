import Banner from './components/Banner'
import FAQ from './components/FAQ'
import Navbar from './components/Navbar'
import OurService from './components/OurService'
import PromoBanner from './components/PromoBanner'
import Testimonial from './components/Testimonial'
import WhyUs from './components/WhyUs'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <OurService />
      <WhyUs />
      <Testimonial />
      <PromoBanner />
      <FAQ />
    </div>
  )
}

export default App
