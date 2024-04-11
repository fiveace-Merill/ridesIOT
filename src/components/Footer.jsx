import whatapp from '../assets/whatapp.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import email from '../assets/email.png'
function Footer() {
    return (
        <div>
            <div className='flex flex-col md:flex-col'>
                <p>socials</p>
                <div className='flex flex-row justify-around md:flex-col'>
                    <img src={whatapp} />
                    <img src={instagram} />
                    <img src={twitter} />
                    <img src={email} />
                </div>
            </div>
            <div className=''>
                <p>copyright</p>
            </div>
        </div>
    )
}

export default Footer