import Navbar from "../components/Navbar"
import About from "../components/About"
import Services from "../components/Services"
import Testimonials from '../components/Testimonials'
import Footer from "../components/Footer"

function Home() {
    return (
        <div>
            <Navbar />
            <About />
            <Services />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Home