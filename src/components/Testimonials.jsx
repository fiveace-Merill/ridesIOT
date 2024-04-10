import logo from '../assets/logo2.jpeg'
function Testimonials() {
    return (
        <div>
            <div className='w-full flex flex-col py-3 justify-between bg-rich_black-300'>
                <div className='flex ml-6'>
                    <img src={logo} className='rounded-full self-center items-center h-8 w-8 mr-auto' />
                    <p className='p-2 w-full flex-grow text-balance text-sm'>"IoT service platform: unique, smart lifestyle with connected devices, bicycles."</p>
                </div>
                <p className='self-start pl-3 text-2xl'><span className='font-bold text-forest_green-500'>Freddie,</span><span className='text-forest_green-300'> CEO/Founder</span></p>
            </div>
            <div>
                {/* Create a dynamic card to post user revies with react window virtual lists */}
            </div>
        </div>
    )
}

export default Testimonials