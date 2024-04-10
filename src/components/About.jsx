import '../style/About.css'
import iot from '../assets/iot1.jpg'
import bike1 from '../assets/bike1.jpg'
import chart from '../assets/chart.jpg'
import arrow from '../assets/arrow.png'
import texture from '../assets/texture.png'

function About() {
    return (
        <div className='flex flex-col items-center my-0 box-border justify-center p-1 md:h-[600px] md:grid md:grid-rows-2 md:grid-cols-4 md:justify-around md:align-middle'>
            <div className='shadow-md py-3 px-0 my-0 w-full mb-3'>
                <h3 className='text-2xl text-center tracking-wider leading-5 md:text-3xl lg:text-4xl font-bold text-forest_green-400'>Adventure Awaits</h3>
                <p className='text-white text-md md:text-lg lg:text-xl mt-2 text-justify p-2'>Embark on thrilling rides with our smart bikes, track your triumphs in real-time, explore new routes, connect with fellow riders at events, and find your dream bike at unbeatable prices. Adventure awaits!</p>
                <div className='flex flex-col'>
                    <input type='text' placeholder='email..' id='email' className='bg-rich_black-400 rounded-sm border-2 border-forest_green-200 mb-5'></input>
                    <label htmlFor='email' className='bg-robin_egg_blue-400 rounded-lg p-2 text-base self-center'>Get Started</label>
                </div>
            </div>
            <div className='h-4/5 w-full bg-rich_black-300 mb-3 shadow-lg shadow-inherit hover:z-50 text-forest_green-900 rounded-2xl flex flex-col items-center justify-center py-3'>
                <img src={iot} className='product-image opacity-70' />
                <p className='description py-4'>Discover the future with our IoT platform, a revolution in smart devices and bicycles. We are not just a business, we are a community dedicated to enhancing your daily life with our diverse range of products.</p>
                <div className='flex bg-forest_green-400 hover:bg-robin_egg_blue-400 rounded-lg h-9 w-2/4 items-center justify-center'>
                    <button className='button'>iot</button>
                    <img src={arrow} className='h-5 w-5 ml-2' />
                </div>
            </div>
            <div className='h-4/5 w-full bg-rich_black-300 my-3 shadow-lg shadow-inherit hover:z-50 text-forest_green-900 rounded-2xl flex flex-col items-center justify-center py-3'>
                <img src={bike1} className='product-image opacity-70' />
                <p className='description py-4'>Discover the future with our IoT platform, a revolution in smart devices and bicycles. We are not just a business, we are a community dedicated to enhancing your daily life with our diverse range of products.</p>
                <div className='flex bg-forest_green-400 hover:bg-robin_egg_blue-400 rounded-lg h-9 w-2/4 items-center justify-center'>
                    <button className='button'>bikes</button>
                    <img src={arrow} className='h-5 w-5 ml-2' />
                </div>
            </div>
            <div className='h-4/5 w-full bg-rich_black-300 my-3 shadow-lg shadow-inherit hover:z-50 text-forest_green-900 rounded-2xl flex flex-col items-center justify-center py-3'>
                <img src={chart} className='product-image opacity-70' />
                <p className='description py-4'>Discover the future with our IoT platform, a revolution in smart devices and bicycles. We are not just a business, we are a community dedicated to enhancing your daily life with our diverse range of products.</p>
                <div className='flex bg-forest_green-400 hover:bg-robin_egg_blue-400 rounded-lg h-9 w-2/4 items-center justify-center py-3'>
                    <button className='button'>subscription</button>
                    <img src={arrow} className='h-5 w-5 ml-2' />
                </div>
            </div>

        </div>
    )
}

export default About
