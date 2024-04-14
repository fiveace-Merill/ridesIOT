function Sidebar() {
    return (
        <div className="md:h-full md:w-auto md:fixed md:inset-y-0 md:left-0 md:overflow-hidden">
            <div className="md:h-full md:py-5 md:pl-5 md:text-2xl bg-rich_black-400 text-white md:flex md:flex-col">
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
    )
}

export default Sidebar