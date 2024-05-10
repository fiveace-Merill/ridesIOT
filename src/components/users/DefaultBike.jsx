import { FaArrowRight } from "react-icons/fa"
import BikeProductCard from './BikeProductCard'
function DefaultBike() {
    return (
        <>
            <div className='my-2 flex flex-col items-center relative rounded-lg md:w-9/12 md:mx-auto md:relative'>
                <BikeProductCard name={"scott"} design={"Mountain Bike"} price={15000}></BikeProductCard>
                <div className='absolute p-2 top-[50%] right-5 opacity-20 md:hidden'>
                    <FaArrowRight size={20}></FaArrowRight>
                </div>
            </div>
            {/* <div className='my-2 flex flex-col items-center relative rounded-lg md:w-9/12 md:mx-auto'>
                <BikeProductCard name={"Trek"} design={"Gravel Bike"} price={12599}></BikeProductCard>
                <div className='absolute p-2 top-[50%] -right-1 opacity-20 md:hidden'>
                    <FaArrowRight size={20}></FaArrowRight>
                </div>
            </div>
            <div className='my-2 flex flex-col items-center relative rounded-lg md:w-9/12 md:mx-auto'>
                <BikeProductCard name={"pavillion"} design={"BMX"} price={8950}></BikeProductCard>
                <div className='absolute p-2 top-[50%] -right-1 opacity-20 hover:-z-50 md:hidden'>
                    <FaArrowRight size={20}></FaArrowRight>
                </div>
            </div> */}
        </>
    )
}

export default DefaultBike