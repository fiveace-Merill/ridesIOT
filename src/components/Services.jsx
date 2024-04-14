import '../style/services.css'
import bikeSolid from '../assets/bicycle-solid.svg'
import calendarSolid from '../assets/calendar-days-solid.svg'
import CircleSolid from '../assets/circle-nodes-solid.svg'
function Services() {
    return (
        <div id='services'>
            <div className="flex flex-col md:hidden">
                <h3 className='self-center text-forest_green-400 text-xl'>Services</h3>
                <div className='my-4 w-full flex justify-around text-robin_egg_blue-400'>
                    <div><img src={bikeSolid} className='h-8 w-8 mb-3' /><p>Bikes</p></div>
                    <div> <img src={CircleSolid} className='h-8 w-8 mb-3' /><p>IoT</p></div>
                    <div><img src={calendarSolid} className='h-8 w-8 mb-3' /><p>Events</p></div>
                </div>
            </div>
            <div className="services text-white md:w-3/4 md:h-52 md:flex md:items-center md:grow md:ml-auto md:mr-auto md:mt-20">
                <div className="md:border-2 md:border-forest_green-100 md:h-full md:flex md:flex-col md:justify-center">
                    <h3 className="md:text-left md:ml-5 font-bold">bikes</h3>
                    <p className="text-white md:p-3 md:text-jusify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptates nostrum eveniet facere in nam modi dolor. Impedit, sunt quasi!</p>
                    <p className="md:self-end md:mr-16"><a>shop</a></p>
                </div>
                <div className="md:mx-5 md:border-2 md:border-forest_green-100 md:h-full md:flex md:flex-col md:justify-center">
                    <h3 className="md:text-left md:ml-5 font-bold">IoT</h3>
                    <p className="text-white md:p-3 md:text-jusify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptates nostrum eveniet facere in nam modi dolor. Impedit, sunt quasi!</p>
                    <p className="md:self-end md:mr-16"><a>shop</a></p>
                </div>
                <div className="md:border-2 md:border-forest_green-100 md:h-full md:flex md:flex-col md:justify-center">
                    <h3 className="md:text-left md:ml-5 font-bold">Events</h3>
                    <p className="text-white md:p-3 md:text-jusify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptates nostrum eveniet facere in nam modi dolor. Impedit, sunt quasi!</p>
                    <p className="md:self-end md:mr-16"><a>shop</a></p>
                </div>
            </div>
        </div>
    )
}

export default Services