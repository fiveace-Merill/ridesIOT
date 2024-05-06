import { FaShoppingCart, FaSignOutAlt, FaWindowClose, FaInstagram, FaTwitter, FaDiscord, FaWhatsapp, FaFacebook } from 'react-icons/fa'
import logo from '../assets/logo2.jpeg'
import DefaultBike from '../components/users/DefaultBike'
import DefaultIot from '../components/users/DefaultIot'
import DefaultEvent from '../components/users/DefaultEvent'
import { useNavigate } from 'react-router'
import { GrMenu } from 'react-icons/gr'
import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '..'

function Users() {

    const [selectedBike, setSelectedBike] = useState()
    const navigate = useNavigate()

    function handleMenuClick() {
        console.log('clicked')
    }
    function handleSignOut() {
        signOut(auth)
            .then(() => {
                navigate("/")
                console.log('signed out')
            })
            .catch((err) => console.log(err.message))

    }
    function processProduct(item) {
        //Use item to select which product will be rendered 
    }
    return (
        <div className="h-full bg-forest_green-900 w-screen py-2 md:h-full box-border">
            <nav className='w-full h-16 '>
                <div className='flex w-full h-full items-center justify-around'>
                    <img src={logo} className='h-10 w-10 rounded-full mr-auto ml-12' />
                    <div className='flex justify-around w-6/12'>
                        <div className='relative mx-3'>
                            <FaShoppingCart color='green' size={30}></FaShoppingCart>
                            <p className='absolute h-6 w-6 text-center bg-robin_egg_blue m-auto -top-2 -right-2 text-rich_black-500 rounded-full text-lg'>1</p>
                        </div>
                        <button><FaSignOutAlt size={30} color='green' onClick={handleSignOut}></FaSignOutAlt></button>
                        <button onClick={handleMenuClick}><GrMenu size={30} color='green'></GrMenu></button>
                    </div>
                </div>
                <ul className='hidden flex flex-col h-full justify-around pl-2 absolute top-0 left-0 w-full bg-robin_egg_blue-100 text-white opacity-100 rounded-b-xl shadow-md shadow-robin_egg_blue-800'>
                    <li className='close-menu self-end mr-2'><FaWindowClose size={22}></FaWindowClose></li>
                    <li>Bikes</li>
                    <li>IoT</li>
                    <li>Events</li>
                </ul>
            </nav>
            <main className='md:flex md:flex-col md:justify-center'>
                <div className='flex flex-col md:grid md:h-9/12 md:grid-rows-1 md:grid-cols-3 md:gap-5 md:w-10/12 md:w-11/12 md:mx-[auto]'>
                    <DefaultBike handleClick={processProduct}></DefaultBike>
                </div>
            </main>
            <footer className='bg-forest_green-200 w-full text-white md:px-2 md:h-[350px] mx-auto md:mt-3'>
                <div className='md:grid md:grid-rows-1 md:grid-cols-4'>
                    <div className='my-1 py-2 flex flex-col flex-1 items-center md:p-3 md:items-start'>
                        <h4 className='font-bold text-sm'>Contact us</h4>
                        <ul className='my-3 w-full justify-around flex md:flex-col list-none md:flex-1 md:ml-2 md:justify-around'>
                            <li><FaInstagram size={30}></FaInstagram></li>
                            <li><FaFacebook size={30}></FaFacebook></li>
                            <li><FaWhatsapp size={30}></FaWhatsapp></li>
                            <li><FaTwitter size={30}></FaTwitter></li>
                            <li><FaDiscord size={30}></FaDiscord></li>
                        </ul>
                    </div>
                    <div className='my-1 py-2 flex flex-col flex-1 items-center md:p-3 md:items-start'>
                        <h4 className='font-bold text-sm'>Products</h4>
                        <ul className='my-3 w-full flex justify-around md:ml-2 md:flex-col list-none md:flex-1'>
                            <li>Bikes</li>
                            <li>Iot</li>
                            <li>Events</li>
                        </ul>
                    </div>
                    <div className='my-1 py-2 flex flex-col flex-1 items-center md:p-3 md:items-start md:col-span-2'>
                        <h4 className='font-bold text-sm '>Brands, Sponser's, Locations </h4>
                        <div className='py-3 flex flex-col w-full md:p-0 md:flex-row md:justify-between md:grow'>
                            <ul className='text-xs my-3 w-full flex justify-around md:ml-2 md:flex-col list-none md:flex-1'>
                                <li>NumeralIot</li>
                                <li>Ajiry</li>
                                <li>Harley Davidson</li>
                            </ul>
                            <ul className='text-xs my-3 w-full flex justify-around md:ml-2 md:flex-col list-none md:flex-1'>
                                <li>Nairobi</li>
                                <li>Kiambu</li>
                                <li>Juja</li>
                                <li>Thika</li>
                                <li>Embakasi</li>
                                <li>Lang'ata</li>
                                <li>Gatundu</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='my-1 py-2 text-center md:p-3 md:row-start-2 md:col-span-4 md:h-auto text-sm '>
                    <p>Copyrights@2024<span className='text-xs italic'> developed by five-ace</span></p>
                </div>
            </footer>
        </div>
    )
}

export default Users