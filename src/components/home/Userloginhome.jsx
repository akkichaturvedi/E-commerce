import Loginnavlog from "../navbar/Loginnavlog"
import Navbar from "../navbar/Navbar"
import Card from "../../pages/card/Card"
import Footer from "../footer/Footer"
import Slider from "../../pages/slider/Slider"

function Userloginhome() {
    return (
        <>
            <Loginnavlog />
            <Navbar />
            <Slider />
            <Card />
            <Footer />
        </>
    )
}

export default Userloginhome