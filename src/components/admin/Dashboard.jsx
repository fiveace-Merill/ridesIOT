import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Content from './Content'

function Dashboard() {
    const [clicked, setClicked] = useState('default')
    function setToggle(value) {
        setClicked(value)
    }

    return (
        <div className="md:m-0 md:w-full md:h-full md:flex md:bg-white">
            <Sidebar toggleClick={setToggle} />
            <div className='md:w-10/12 md:top-0 md:left-[16.6666666%] md:h-full md:absolute md:flex md:flex-col md:grow'>
                <Header />
                <Content menuItem={clicked} />
            </div>
        </div>
    )
}

export default Dashboard 