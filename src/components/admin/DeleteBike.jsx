import '../../style/admin/bike.css'

function DeleteBike({ handleInputChange, handleSubmit }) {
    return (
        <>
            <form onSubmit={handleSubmit} className='md:grow md:flex md:flex-col md:justify-center md:gap-5'>
                <label className='md:text-lg'>
                    Id:
                    <input
                        className='md:w-10/12 md:h-10 p-3 rounded-lg'
                        type="text"
                        name="id"
                        onChange={handleInputChange}></input>
                </label>
                <button type="submit" className="bg-robin_egg_blue-400 text-white md:hover:bg-robin_egg_blue-300 md:hover:rounded-full md:hover:text-xs md:w-4/12 h-8 text-sm rounded-md mx-auto my-2">DELETE</button>
            </form>
        </>
    )
}

export default DeleteBike