import Navbar from "../navbar/Navbar"
import Navlog from "../navbar/Navlog"
import Slider from "../../pages/slider/Slider"
import Footer from "../footer/Footer"
import Card from "../../pages/card/Card"
import Event from "../../pages/events/Event"

function Home() {
  return (
    <>
      <Navlog />
      <Navbar />
      <Slider />
      <Card />
      <Event />
      <Footer />
    </>
  )
}

export default Home