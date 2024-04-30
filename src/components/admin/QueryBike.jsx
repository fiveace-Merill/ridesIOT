import { PiBracketsSquare } from "react-icons/pi"

function QueryBike({ handleInputChange, handleSubmit, details }) {
    // let { frame_material, brakes, suspension, } = details.features
    console.log(details)
    return (
        <div className="md:flex md:flex-col md:justify-between ">
            <form onSubmit={handleSubmit} className="md:self-center md:items-center">
                <label>
                    Id:
                    <input
                        type="text"
                        name="id"
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit" className="bg-robin_egg_blue-400 text-white md:hover:bg-robin_egg_blue-300 md:hover:rounded-full md:hover:text-xs md:w-4/12 h-8 text-sm rounded-md mx-auto my-2">QUERY</button>
            </form>
            <div className="md:w-full md:h-auto md:grow">
                <ul>
                    <li>Name: {details.name}</li>
                    <li>Design: {details.design}</li>
                    <li>Price: {details.price}</li>
                </ul>
                <p>Features</p>
            </div>
        </div>
    )
}

export default QueryBike