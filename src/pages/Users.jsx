import { FaShoppingCart, FaSignOutAlt, FaWindowClose, FaInstagram, FaTwitter, FaDiscord, FaWhatsapp, FaFacebook, FaSearch } from 'react-icons/fa'
import logo from '../assets/logo2.jpeg'
import '../style/users/users.css'
import DefaultBike from '../components/users/DefaultBike'
import DefaultIot from '../components/users/DefaultIot'
import DefaultEvent from '../components/users/DefaultEvent'
import { useNavigate } from 'react-router'
import { GrMenu } from 'react-icons/gr'
import { useState, useEffect } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '..'

function Users() {

    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isLogoVisible, setIsLogoVisible] = useState(true);

    const navigate = useNavigate()

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsLogoVisible(!isLogoVisible);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
        <div className="h-auto w-[99%] mx-auto bg-forest_green-900 md:h-full md:w-full">
            <nav className='flex flex-1 justify-between pr-2 py-4' style={{ zIndex: isOpen ? 1 : 0 }}>
                {isLogoVisible && <img src={logo} className='h-10 w-10 ml-6 rounded-full md:self-center md:ml-20' />}
                {(isMobile && isOpen) || !isMobile ? (
                    <div className='animate__animated animate__slideInDown flex flex-col md:w-5/12'>
                        {isMobile && isOpen && (
                            <button onClick={toggleMenu} className='h-10 w-10 self-end p-1 mr-5'><FaWindowClose></FaWindowClose></button>
                        )}
                        <ul className='cursor-pointer pl-2 text-sm text-robin_egg_blue flex flex-col justify-between list-none align-start align-self-end w-screen menu md:flex-row md:w-auto md:p-2 md:items-center md:flex-1 md:space-x-4 md:text-base'>
                            <li className='hover:text-forest_green-400 user-page-phone-list'><a href='#bikes'>bikes</a></li>
                            <li className='hover:text-forest_green-400 user-page-phone-list'><a href='#iot'>iot</a></li>
                            <li className='hover:text-forest_green-400 user-page-phone-list'><a href='#events'>events</a></li>
                            <li className='md:flex md:items-center'>
                                <div className='flex flex-row justify-around items-center md:flex-row md:justify-around mt-4'>
                                    <button className='rounded-md bg-forest_green-400 text-white h-9 w-40 text-base mb-4 hover:bg-robin_egg_blue-400 md:mx-3' onClick={handleSignOut}>Sign Out</button>
                                </div>
                            </li>

                        </ul>

                    </div>
                ) : null}
                {isMobile && !isOpen && (
                    <div className='flex items-center justify-between w-3/6'>
                        <div>
                            <FaShoppingCart size={20}></FaShoppingCart>
                        </div>
                        <div>
                            <FaSignOutAlt onClick={handleSignOut} size={20}></FaSignOutAlt>
                        </div>
                        <button onClick={toggleMenu} className='h-8 w-8'><GrMenu size={20}></GrMenu></button>
                    </div>
                )
                }
            </nav >
            <header className='relative'>
            </header>
            <main className='md:flex md:flex-col md:justify-center'>
                <div className='relative md:mb-5' id='bikes'>
                    <h2 className='ml-10 text-start md:text-center md:text-lg'>Bikes</h2>
                    <div className='flex flex-col md:grid md:h-9/12 md:grid-rows-1 md:grid-cols-3 md:gap-5 md:w-10/12 md:mx-[auto]'>
                        <DefaultBike handleClick={processProduct}></DefaultBike>
                    </div>
                    <p className='absolute top-0 right-10 md:top-80 md:right-20'>view all</p>
                </div>

                <div className='relative md:mb-5' id='iot'>
                    <h2 className='ml-10 text-start md:text-center md:text-lg'>IoT Devices</h2>
                    <div className='flex flex-col md:grid md:h-9/12 md:grid-rows-1 md:grid-cols-3 md:gap-5 md:w-10/12 md:mx-[auto]'>
                        <DefaultIot handleClick={processProduct}></DefaultIot>
                    </div>
                    <p className='absolute top-0 right-10 md:top-80 md:right-20'>view all</p>
                </div>
                <div className='w-full h:auto md:h-[500px] md:rounded-lg md:mx-auto' id='events'>
                    <DefaultEvent></DefaultEvent>
                </div>
            </main>
            <footer className='bg-forest_green-200 h-full w-full text-white md:px-2 md:h-[350px] mx-auto md:mt-3'>
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
                                <li>Poisson</li>
                                <li>Trek</li>
                                <li>Scott</li>
                            </ul>
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
                <div className='my-1 py-2 text-center md:p-3 md:row-start-2 md:col-span-4 md:h-auto text-sm md:mt-20'>
                    <p>Copyrights@2024<span className='text-xs italic'> developed by five-ace</span></p>
                </div>
            </footer>
        </div >
    )
}

export default Users