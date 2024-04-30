import { BiKey } from "react-icons/bi"
import { FaArrowRight } from "react-icons/fa"
import BikeProductCard from './BikeProductCard'
function DefaultBike({ handleClick = f => f}) {
    return (
        <>
            <div className='my-2 flex flex-col items-center relative rounded-lg'>
                <h3 className="hover:text-md hover:text-forest_green-300 hover:cursor-pointer font-bold" onClick={(event) => handleClick(event.target.textContent)}>Road Bikes</h3>
                <BikeProductCard></BikeProductCard>
                <div className='absolute p-2 top-[50%] -right-1 opacity-20 md:hidden'>
                    <FaArrowRight size={20}></FaArrowRight>
                </div>
            </div>
            <div className='my-2 flex flex-col items-center relative rounded-lg'>
                <h3 className="hover:text-md hover:text-forest_green-300 hover:cursor-pointer font-bold" onClick={(event) => handleClick(event.target.textContent)}>Mountain Bikes</h3>
                <BikeProductCard></BikeProductCard>
                <div className='absolute p-2 top-[50%] -right-1 opacity-20 md:hidden'>
                    <FaArrowRight size={20}></FaArrowRight>
                </div>
            </div>
            <div className='my-2 flex flex-col items-center relative rounded-lg'>
                <h3 className="hover:text-md hover:text-forest_green-300 cursor-pointer font-bold" onClick={(event) => handleClick(event.target.textContent)}>BMX</h3>
                <BikeProductCard></BikeProductCard>
                <div className='absolute p-2 top-[50%] -right-1 opacity-20 hover:-z-50 md:hidden'>
                    <FaArrowRight size={20}></FaArrowRight>
                </div>
            </div>
        </>
    )
}

export default DefaultBike