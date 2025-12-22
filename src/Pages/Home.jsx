import Slider from "../Components/Slider"
import Category from "../Components/Category"
import Popular from "../Components/Popular"
import Bestseller from "../Components/BestSeller"
import Banner from "../Components/Banner"
import Contactus from "../Components/Contactus"
import Testimonials from "../Components/Testimonials"
import FAQ from "../Components/FAQ"
import About from "../Components/About"
import Features from "../Components/Features"
import { useRef } from "react"

const Home = () => {
  // Create a ref for the Contact section if we want to scroll to it
  const contactRef = useRef(null);

  return (
    <div className="animate-fadeIn">
      <div className="bg-white">
        <Slider/>
        <div id="features">
          <Features />
        </div>
        <Category/>
        <Popular/>
        <Bestseller/>
        <Banner/>
        <About />
        <Testimonials />
        <FAQ />
      </div>
      <div ref={contactRef} id="contact">
        <Contactus/>
      </div>
    </div>
  )
}

export default Home
