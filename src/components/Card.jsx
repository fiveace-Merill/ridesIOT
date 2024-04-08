import mockup from '../assets/mock-bike2.jpg'
import frame from '../assets/icons8-electric-bike-50.png'
import weight from '../assets/icons8-weight-50.png'
import suspension from '../assets/icons8-suspension-64.png'
import size from '../assets/icons8-size-30.png'
import tires from '../assets/icons8-racing-tires-50.png'
import gears from '../assets/icons8-gears-50.png'
import color from '../assets/icons8-color-50.png'
//import brakes from '../assets/iconse-brakes-50.png'

function Card({ name, design, features, description, price }) {
    return (
        <div className="lg:flex lg:flex-col lg:m-3 lg:rounded-3xl lg:bg-cyan-950 lg:shadow-md p-0">
            <div className='lg:flex lg:flex-1'>
                <img className='lg:h-6/12 lg:w-7/12 lg:opacity-40 lg:z-50 lg:align-top lg:self-start' src={mockup} alt="mockup" />
                <ul className="lg:flex lg:flex-col lg:list-none lg:justify-between lg:items-start lg:text-pretty lg:ml-auto lg:py-8 lg:px-5">
                    <li className='self-center'><h2>{name}</h2></li>
                    <li className='lg:flex lg:justify-between'><img src={frame} className="lg:h-4 lg:w-4 lg:mr-2" /><p>{features.frame_material}</p></li>
                    <li className='lg:flex lg:justify-between'><img src={color} className="lg:h-4 lg:w-4 lg:mr-2" /><p>{features.color}</p></li>
                    <li className='lg:flex lg:justify-between'><img src={suspension} className='lg:h-4 lg:w-4 lg:mr-2' /><p>{features.suspension}</p></li>
                    <li className='lg:flex lg:justify-between'><img src={tires} className='lg:h-4 lg:w-4 lg:mr-2' /><p>{features.tires}</p></li>
                    <li className='lg:flex lg:justify-between'><img src={weight} className='lg:h-4 lg:w-4 lg:mr-2' /><p>{features.weight}</p></li>
                    <li className='lg:flex lg:justify-between'><img src={size} className='lg:h-4 lg:w-4 lg:mr-2' /><p>{features.wheel_size}</p></li>
                    <li className='lg:flex lg:justify-between'><img src={gears} className='lg:h-4 lg:w-4 lg:mr-2' /><p>{features.gears}</p></li>
                    <li className='lg:flex lg:justify-between'><img src={gears} className='lg:h-4 lg:w-4 lg:mr-2' /><p>{features.brake_type}</p></li>
                </ul>
            </div>
            <div className='lg:p-2'>
                <div className="lg:flex lg:justify-between lg:align-bottom lg:my-5 lg:mr-3 lg:px-10">

                    <p>{design}</p>
                    <p>price:{` \$ ${price}`}</p>
                </div>
                <div className="lg:mt-2">
                    <p className="lg:text-justify lg:p-5">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card