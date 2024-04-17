import Navbar from "../components/home/Navbar"
import About from "../components/home/About"
import Services from "../components/home/Services"
import Testimonials from '../components/home/Testimonials'
import Footer from "../components/home/Footer"


function Home() {
    return (
        <div id="home">
            <Navbar />
            <About />
            <Services />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Home