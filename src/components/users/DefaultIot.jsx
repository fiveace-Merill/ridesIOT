import { FaArrowRight } from "react-icons/fa"
import IotProductCard from './IotProductCard'
function DefaultIot({ handleClick = f => f }) {
    return (
        <>
            <div className='my-2 flex flex-col items-center relative rounded-lg md:w-9/12 md:mx-auto'>
                <h3 className="hover:text-md hover:text-forest_green-300 hover:cursor-pointer font-bold" onClick={(event) => handleClick(event.target.textContent)}>Television</h3>
                <IotProductCard></IotProductCard>
                <div className='absolute p-2 top-[50%] -right-1 opacity-20 md:hidden'>
                    <FaArrowRight size={20}></FaArrowRight>
                </div>
            </div>
            <div className='my-2 flex flex-col items-center relative rounded-lg md:w-9/12 md:mx-auto'>
                <h3 className="hover:text-md hover:text-forest_green-300 hover:cursor-pointer font-bold" onClick={(event) => handleClick(event.target.textContent)}>Watch</h3>
                <IotProductCard></IotProductCard>
                <div className='absolute p-2 top-[50%] -right-1 opacity-20 md:hidden'>
                    <FaArrowRight size={20}></FaArrowRight>
                </div>
            </div>
            <div className='my-2 flex flex-col items-center relative rounded-lg md:w-9/12 md:mx-auto'>
                <h3 className="hover:text-md hover:text-forest_green-300 cursor-pointer font-bold" onClick={(event) => handleClick(event.target.textContent)}>Fridge</h3>
                <IotProductCard></IotProductCard>
                <div className='absolute p-2 top-[50%] -right-1 opacity-20 hover:-z-50 md:hidden'>
                    <FaArrowRight size={20}></FaArrowRight>
                </div>
            </div>
        </>
    )
}

export default DefaultIot