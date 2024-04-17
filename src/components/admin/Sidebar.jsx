function Sidebar({ toggleClick }) {
    function handleClick() {
        var bikeMenu = document.getElementById('bike-menu');
        if (bikeMenu.classList.contains('hidden')) {
            bikeMenu.classList.remove('hidden');
        } else {
            bikeMenu.classList.add('hidden');
        }
    }

    return (
        <div className='sidebar md:fixed md:inset-y-0 md:left-0 md:overflow-hidden md:z-30 md:h-full md:w-2/12 md:flex'>
            <div className="md:h-full md:w-full md:py-5 md:pl-5 md:text-2xl bg-rich_black-400 text-white md:flex md:flex-col">
                <h1 className='font-bold md:text-md md:text-left md:p-3'>ADMIN DASHBOARD</h1>
                <div className="md:text-2xl md:flex md:flex-col md:ml-5 md:grow md:justify-around">
                    <div>
                        <h4 onClick={handleClick} className="md:hover:cursor-pointer">Products</h4>
                        <div className="hidden md:p-3" id="bike-menu">
                            <p className="hover:cursor-pointer" id="menu-item-1" onClick={(event) => toggleClick(event.target.value)}>Bikes</p>
                            <p className="hover:cursor-pointer" id="menu-item-2" onClick={(event) => toggleClick(event.target.value)}>IoT</p>
                            <p className="hover:cursor-pointer" id="menu-item-3" onClick={(event) => toggleClick(event.target.value)}>Events</p>
                        </div>
                    </div>
                    <div>
                        <h4>Users</h4>
                    </div>
                    <div>
                        <h4>Orders</h4>
                    </div>
                    <div>
                        <h4>Reviews</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
