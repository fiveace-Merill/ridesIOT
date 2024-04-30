import product from '../../assets/bike4.jpg'

const handleClick = () => {
    console.log('added to cart')
}

function BikeProductCard() {
    return (
        <div className='w-11/12 h-full mx-1 flex flex-col justify-center shadow-lg shadow-forest_green-700'>
            <div className='h-3/6 w-3/6 mx-2 my-2 border-2 self-center border-forest_green-100 bg-forest_green-300'>
                <img src={product} className='w-full h-full' />
            </div>
            <div className='w-full h-3/6 my-1 text-center'>
                <div className='flex justify-around'>
                    <p>Scott</p>
                    <p>Mountain Bike</p>
                </div>
                <p className='text-pretty p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores hic nisi repudiandae. Fugit, reiciendis culpa</p>
                <div className='w-full' onClick={handleClick}>
                    <button className='bg-forest_green-200 text-white rounded-md p-3 text-center text-xs'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default BikeProductCard