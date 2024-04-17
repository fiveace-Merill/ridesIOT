import '../../style/About.css'
import iot from '../../assets/iot1.jpg'
import bike1 from '../../assets/bike1.jpg'
import chart from '../../assets/chart.jpg'
import arrow from '../../assets/arrow.png'

function About() {
    return (
        <div className='w-full flex flex-col items-center my-0 box-border justify-center p-1` md:my-5 md:flex-row' id='about'>
            <div className='ctn md:flex md:flex-col'>
                <div className='py-3 px-0 my-0 w-full mb-3'>
                    <h3 className='text-xl text-center tracking-wider leading-5 md:text-3xl lg:text-4xl font-bold text-forest_green-400'>Adventure Awaits</h3>
                    <p className='text-white text-md m-2 text-justify p-2 md:text-center md:text-xl md:px-5'>Embark on thrilling rides with our smart bikes, track your triumphs in real-time, explore new routes, connect with fellow riders at events, and find your dream bike at unbeatable prices. Adventure awaits!</p>
                    <div className='flex flex-col'>
                        <input type='text' placeholder='email..' id='email' className='bg-rich_black-400 rounded-sm border-2 border-forest_green-200 mb-5 w-3/4 md:w-2/4 self-center'></input>
                        <label htmlFor='email' className='bg-robin_egg_blue-400 rounded-lg p-2 text-base self-center'>Get Started</label>
                    </div>
                </div>
                <div className='md:flex md:justify-center md:w-full'>
                    <div className='mx-auto pb-2 text-sm h-4/5 w-[95%] bg-rich_black-300 mb-5 text-forest_green-900 rounded-t-3xl flex flex-col items-center justify-center md:h-full md:w-2/6 md:mx-5 md:my-0'>
                        <img src={iot} className='product-image-small opacity-70 rounded-t-3xl' />
                        <p className='description p-3 md:p-0 md:grow'>Revolutionize your experience with our IoT solutions smart, seamless, and service-driven for your home, fitness, and cycling adventures.</p>
                        <div className='mb-2 flex bg-forest_green-400 hover:bg-robin_egg_blue-400 rounded-lg h-9 w-2/4 items-center justify-center'>
                            <button className='button'>IoT</button>
                            <img src={arrow} className='h-4 w-5 ml-2' />
                        </div>
                    </div>
                    <div className='mx-auto pb-2 text-sm h-4/5 w-[95%] bg-rich_black-300 mb-5 text-forest_green-900 rounded-2xl flex flex-col items-center justify-center md:h-full md:w-2/6 md:m-0 md:mx-5 md:my-0'>
                        <img src={bike1} className='product-image-small opacity-70 rounded-t-3xl' />
                        <p className='description py-4 md:p-0'>Elevate your ride with our IoT-enabled bicycles—smart, sleek, and designed for the modern urbanite. Experience the city like never before.</p>
                        <div className='mb-2 flex bg-forest_green-400 hover:bg-robin_egg_blue-400 rounded-lg h-9 w-2/4 items-center justify-center'>
                            <button className='button'>Bikes</button>
                            <img src={arrow} className='h-5 w-5 ml-2' />
                        </div>
                    </div>
                    <div className='mx-auto pb-2 text-sm h-4/5 w-[95%] bg-rich_black-300 mb-5 text-forest_green-900 rounded-2xl flex flex-col items-center justify-center md:h-full md:w-2/6 md:m-0 md:mx-5 md:my-0'>
                        <img src={chart} className='product-image-small opacity-70 rounded-t-3xl' />
                        <p className='description py-4 md:p-0'>Join our vibrant community events, where data-driven insights craft unforgettable cycling experiences. Ride, connect, and explore with us.</p>
                        <div className='mb-2 flex bg-forest_green-400 hover:bg-robin_egg_blue-400 rounded-lg h-9 w-2/4 items-center justify-center'>
                            <button className='button'>Events</button>
                            <img src={arrow} className='h-5 w-5 ml-2' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
