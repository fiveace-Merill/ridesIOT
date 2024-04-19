
function DeleteBike({ handleInputChange, handleSubmit }) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Id:
                    <input
                        type="text"
                        name="id"
                        placeholder="id"
                        onChange={handleInputChange}></input>
                </label>
                <button type="submit" className="bg-robin_egg_blue-400 text-white md:hover:bg-robin_egg_blue-300 md:hover:rounded-full md:hover:text-xs md:w-4/12 h-8 text-sm rounded-md mx-auto my-2">DELETE</button>
            </form>
        </>
    )
}

export default DeleteBike