import notification from '../../assets/notification.png'
import message from '../../assets/message.png'
import profile from '../../assets/profile-picture-1.jpg'
function Header() {
    return (
        <div className="md:fixed md:z-20 md:flex md:w-auto md:h-14 md:items-center md:my-2 md:ml-6 md:bg-yellow-500">
            <input type='text' placeholder="search" className='md:pl-5 md:ml-10 md:w-1/4 h-8 md:self-center rounded-md'></input>
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