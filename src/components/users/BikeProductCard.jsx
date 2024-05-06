import product from '../../assets/bike4.jpg'

const handleClick = () => {
    console.log('added to cart')
}

function BikeProductCard() {
    return (
        <div className='w-11/12 h-full mx-1 flex flex-col justify-center shadow-lg shadow-forest_green-700 md:w-9/12 md:h-[300px]'>
            <div className='h-3/6 w-3/6 mx-2 my-2 border-2 self-center border-forest_green-100 bg-forest_green-300'>
                <img src={product} className='w-full h-full' />
            </div>
            <div className='w-full h-3/6 my-1 text-center'>
                <div className='flex justify-around'>
                    <p>Scott</p>
                    <p>Mountain Bike</p>
                </div>
                <p className='text-pretty p-1 text-[9px] box-border h-2/4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores hic nisi repudiandae. Fugit, reiciendis culpa</p>
                <div className='w-full box-border p-1' onClick={handleClick}>
                    <button className='bg-forest_green-200 text-white rounded-md p-2 text-center text-[8px]'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default BikeProductCard