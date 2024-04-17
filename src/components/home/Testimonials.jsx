import logo from '../../assets/profile-picture-1.jpg'
function Testimonials() {
    return (
        <div className='md:my-16 md:w-full'>
            <div className='w-full flex flex-col py-3 justify-between bg-rich_black-300 md:flex-row md:h-[300px] md:w-3/4 md:rounded-r-full md:ml-5 md:shadow-lg md:shadow-forest_green-200 md:p-0'>
                <img src={logo} className='mx-3 rounded-full self-center items-center h-8 w-8 mr-auto md:h-full md:w-auto md:rounded-none md:m-0' />
                <div className='relative flex flex-col md:w-full md:h-full md:mx-3 md:justify-center'>
                    <p className='absolute opacity-5 text-6xl text-white left-3/4 md:left-1/4 md:text-[250px] md:-rotate-12 '>riot</p>
                    <p className='p-3 w-full text-balance text-sm text-white md:p-2 md:text-2xl md:text-pretty md:z-50'>"IoT service platform: unique, smart lifestyle with connected devices, bicycles."</p>
                    <p className='self-start pl-3 text-2xl md:self-end md:mr-20'><span className='font-bold text-forest_green-500'>Chris Harris,</span><span className='text-forest_green-300 md:text-sm'> CEO/Founder</span></p>
                </div>
            </div>
            <div>
                {/* Create a dynamic card to post user revies with react window virtual lists */}
            </div>
        </div>
    )
}

export default Testimonials