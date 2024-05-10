import product from '../../assets/bike4.jpg'

const handleAddToCart = (event) => {
    console.log('added to cart')
}
const handleClick = (event) => {
    console.log(event.target.textContent)
}

function BikeProductCard({ name, price, design }) {
    return (
        <div className='w-5/12 h-full mx-1 flex flex-col justify-center shadow-lg shadow-forest_green-700 rounded-lg md:w-9/12 md:h-[300px]'>
            <h4 className="text-center hover:text-md hover:text-forest_green-300 hover:cursor-pointer font-bold" onClick={handleClick}>{name}</h4>
            <div className='h-2/6 w-2/6 mx-2 my-2 border-2 self-center border-forest_green-100 bg-forest_green-300 md:h-3/6 md:w-3/6'>
                <img src={product} className='w-full h-full' />
            </div>
            <div className='w-full h-3/6 my-1 text-center'>
                <div className='flex justify-around text-xs md:text-md'>
                    <p className='text-md'>ksh <span className='font-bold'>{price}</span></p>
                    <p onClick={handleClick}>{design}</p>
                </div>
                <p className='text-pretty p-1 text-[9px] box-border h-2/4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores hic nisi repudiandae. Fugit, reiciendis culpa</p>
                <div className='w-full box-border p-1'>
                    <button className='bg-forest_green-200 text-white rounded-md p-2 text-center text-[8px]' onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default BikeProductCard