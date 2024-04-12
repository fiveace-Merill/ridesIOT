import whatsapp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import email from '../assets/email.png'

function Footer() {
    return (
        <div className='md:ml-5'>
            <div className='flex flex-col'>
                <div className='flex my-5 h-full flex-col items-center justify-between' id='contacts'>
                    <p className='text-lg text-white'>socials</p>
                    <div className='flex mt-5 w-1/3 items-center justify-between'>
                        <a href='#'><img src={whatsapp} className='h-6 w-6 md:h-12 md:w-12' /></a>
                        <a href='https://www.instagram.com/ridesiot/'><img src={instagram} className='h-6 w-6 md:h-12 md:w-12' /></a>
                        <a href='#'><img src={twitter} className='h-6 w-6 md:h-12 md:w-12' /></a>
                        <a href='#'><img src={email} className='h-6 w-6 md:h-12 md:w-12' /></a>
                    </div>
                </div>
            </div>
            <div className='my-3'>
                <div className='text-white text-sm rounded-full p-2 border-b-2 border-forest_green-400 text-center'>
                    <p>copyright@2024</p>
                </div>
            </div>
        </div>
    )
}

export default Footer