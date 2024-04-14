// import Content from "./Content";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
import notification from '../../assets/notification.png'
import message from '../../assets/message.png'
import profile from '../../assets/profile-picture-1.jpg'

function Dashboard() {
    return (
        <div className="md:m-0 md:w-full md:h-full md:flex md:bg-white">
            <div className='sidebar md:fixed md:inset-y-0 md:left-0 md:overflow-hidden md:z-30 md:h-full md:w-2/12 md:flex'>
                <div className="md:h-full md:w-full md:py-5 md:pl-5 md:text-2xl bg-rich_black-400 text-white md:flex md:flex-col">
                    <h1 className='font-bold md:text-md md:text-center md:p-3'>ADMIN DASHBOARD</h1>
                    <ul className="md:mt-5 md:grow md:flex md:flex-col md:justify-around md:items-start">
                        <li>Dashboard</li>
                        <li>Products</li>
                        <li>Users</li>
                        <li>Orders</li>
                        <li>Reviews</li>
                        <li>Analytics</li>
                    </ul>
                </div>
            </div>
            <div className='md:w-10/12 md:top-0 md:left-[16.6666666%] md:h-full md:absolute md:flex md:flex-col md:grow'>
                <div className="header md:sticky md:z-20 md:flex md:h-14 md:w-full md:items-center md:bg-yellow-500">
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
                <div className='content md:flex-1 md:overflow-y-auto md:bg-blue-200 md:h-full md:w-full'>
                    <div className="md:container md:mx-auto px-6 py-8">
                        <p>Add Dynamic content from sidebar actions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard 