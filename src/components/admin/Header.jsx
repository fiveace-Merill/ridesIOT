import notification from '../../assets/notification.png'
import message from '../../assets/message.png'
import profile from '../../assets/profile-picture-1.jpg'
function Header() {
    return (
        <div className="header md:my-3 md:ml-2 md:sticky md:z-20 md:flex md:h-14 md:w-[99%] md:items-center md:rounded-full md:shadow-md md:shadow-yellow-100 md:bg-robin_egg_blue-400">
            <input type='text' placeholder="search" className='md:pl-3 md:rounded-full md:w-1/4 h-full md:self-center rounded-md'></input>
            <div className="md:flex md:h-full md:ml-auto md:mr-16 md:items-center md:justify-center md:py-5">
                <div className='md:relative'>
                    <img src={notification} alt="notification" className='h-7 w-7 md:my-[50%] md:mx-5' />
                    <p className='text-lg text-white text-center bg-red-700 h-6 w-6 rounded-full md:absolute md:top-6 md:right-4 '>1</p>
                </div>
                <div className='relative'>
                    <img src={message} alt="messages" className='h-7 w-7 md:my-[50%] md:mx-5' />
                    <p className='text-lg text-white text-center bg-red-700 h-6 w-6 rounded-full md:absolute md:top-6 md:right-4'>0</p>
                </div>
                <img src={profile} alt="profile" className="rounded-full h-12 w-12 md:ml-5" />
            </div>
        </div>
    )
}

export default Header