import React, { useState, useEffect } from 'react';
import logo from '../assets/logo2.jpeg';
import humburger from '../assets/humburger.png';
import close from '../assets/close.png'
import '../style/navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isLogoVisible, setIsLogoVisible] = useState(true);

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

    return (
        <div className='flex justify-between pr-2 py-4' style={{ zIndex: isOpen ? 1 : 0 }}>
            {isLogoVisible && <img src={logo} className='h-10 w-10 ml-6 rounded-full md:self-center' />}
            {(isMobile && isOpen) || !isMobile ? (
                <div className='flex flex-col'>
                    {isMobile && isOpen && (
                        <button onClick={toggleMenu} className='h-10 w-10 self-end p-1'><img src={close} /></button>
                    )}
                    <ul className='cursor-pointer text-sm flex flex-col justify-between list-none align-start align-self-end w-screen menu md:flex-row md:w-auto md:ml-auto md:p-2 md:items-center md:flex-1 md:space-x-4 md:text-base'>
                        <li className='hover:text-robin_egg_blue-400 phone-list'><a>Home</a></li>
                        <li className='hover:text-robin_egg_blue-400 phone-list'><a>About Us</a></li>
                        <li className='hover:text-robin_egg_blue-400 phone-list'><a>Products</a></li>
                        <li className='hover:text-robin_egg_blue-400 phone-list'><a>Contact Us</a></li>
                        <li className='md:flex md:items-center'>
                            <div className='flex flex-row justify-around items-center md:flex-row md:justify-around mt-4'>
                                <button className='rounded-md bg-forest_green-400 text-white h-9 w-40 text-base mb-4 hover:bg-robin_egg_blue-400 md:mx-3'>Login</button>
                                <button className='rounded-md bg-forest_green-400 text-white h-9 w-40 text-base mb-4 hover:bg-robin_egg_blue-400 md:mx-3'>Sign Up</button>
                            </div>
                        </li>

                    </ul>

                </div>
            ) : null}
            {isMobile && !isOpen && (
                <div>
                    <button onClick={toggleMenu} className='h-8 w-8'><img src={humburger} /></button>
                </div>
            )}
        </div>
    );
}

export default Navbar;
