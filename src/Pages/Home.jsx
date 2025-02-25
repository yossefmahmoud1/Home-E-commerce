import Slider from "../Components/Slider"
import Category from "../Components/Category"
import Arrival from "../Components/Arrival"
import Popular from "../Components/Popular"
import Bestseller from "../Components/BestSeller"
import Banner from "../Components/Banner"
import Brand from "../Components/Brand"
import Contactus from "../Components/Contactus"

const Home = () => {
  return (
    <div>
          <div className="bg-white">
      <Slider/>
      <Category/>
      <Arrival/>
      <Popular/>
      <Bestseller/>
      <Banner/>
      <Brand/>
    </div>
    <Contactus/>
    </div>

  )
}

export default Home
