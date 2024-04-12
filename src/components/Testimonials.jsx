import logo from '../assets/logo2.jpeg'
function Testimonials() {
    return (
        <div className='md:my-16'>
            <div className='w-full flex flex-col py-3 justify-between bg-rich_black-300 md:flex-row md:h-[300px] md:w-3/4 md:rounded-r-full md:ml-3 md:shadow-lg md:shadow-forest_green-200 md:p-0'>
                <img src={logo} className='rounded-full self-center items-center h-8 w-8 mr-auto md:h-full md:w-auto md:rounded-none' />
                <div className='flex flex-col md:w-full md:h-full md:mx-3 md:justify-center'>
                    <p className='p-2 w-full text-balance text-sm text-white md:text-2xl md:text-pretty md:z-50'>"IoT service platform: unique, smart lifestyle with connected devices, bicycles."</p>
                    <p className='self-start pl-3 text-2xl md:self-end md:mr-20 md:z-50'><span className='font-bold text-forest_green-500'>Freddie,</span><span className='text-forest_green-300 '> CEO/Founder</span></p>
                </div>
            </div>
            <div>
                {/* Create a dynamic card to post user revies with react window virtual lists */}
            </div>
        </div>
    )
}

export default Testimonials