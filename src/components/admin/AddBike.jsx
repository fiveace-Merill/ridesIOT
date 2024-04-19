import '../../style/admin/bike.css'

function AddBike({ bikeDetails, handleSubmit, handleInputChange }) {
    return (
        <form onSubmit={handleSubmit} className="md:flex md:flex-col md:h-full text-sm md:grow">
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={bikeDetails.name}
                    onChange={handleInputChange}
                    placeholder="Bike Name"
                />
            </label>
            <label>
                Design:
                <input
                    type="text"
                    name="design"
                    value={bikeDetails.design}
                    onChange={handleInputChange}
                    placeholder="Design"
                />
            </label>
            <label>
                Price:
                <input
                    type="number"
                    name="price"
                    value={bikeDetails.price}
                    onChange={handleInputChange}
                    placeholder="Price"
                />
            </label>
            <label>
                <span className='text-md text-center text-robin_egg_blue-400 font-bold ml-5'>Features</span>
                <fieldset className="md:flex md:flex-col">
                    <label>
                        Brake Type:
                        <input
                            type="text"
                            name="brake_type"
                            value={bikeDetails.features.brake_type}
                            onChange={handleInputChange}
                            placeholder="Brakes"
                        />
                    </label>
                    <label>
                        Wheel Size:
                        <input
                            type="number"
                            name="wheel_size"
                            value={bikeDetails.features.wheel_size}
                            onChange={handleInputChange}
                            placeholder="Wheel Size"
                        />
                    </label>
                    <label>
                        Frame Material:
                        <input
                            type="text"
                            name="frame_material"
                            value={bikeDetails.features.frame_material}
                            onChange={handleInputChange}
                            placeholder="Frame Material"
                        />
                    </label>
                    <label>
                        Suspension:
                        <input
                            type="text"
                            name="suspension"
                            value={bikeDetails.features.suspension}
                            onChange={handleInputChange}
                            placeholder="Suspension"
                        />
                    </label>
                    <label>
                        Weight:
                        <input
                            type="number"
                            name="weight"
                            value={bikeDetails.features.weight}
                            onChange={handleInputChange}
                            placeholder="Weight"
                        />
                    </label>
                    <label>
                        Gears:
                        <input
                            type="number"
                            name="gears"
                            value={bikeDetails.features.gears}
                            onChange={handleInputChange}
                            placeholder="Gears"
                        />
                    </label>
                    <label>
                        Color:
                        <input
                            type="text"
                            name="color"
                            value={bikeDetails.features.color}
                            onChange={handleInputChange}
                            placeholder="Color"
                        />
                    </label>
                    <label>
                        Tires:
                        <input
                            type="text"
                            name="tires"
                            value={bikeDetails.features.tires}
                            onChange={handleInputChange}
                            placeholder="Tires"
                        />
                    </label>
                </fieldset>

            </label>
            <textarea
                rows={5}
                cols={40}
                name="description"
                value={bikeDetails.description}
                onChange={handleInputChange}
                placeholder="Product Description"
                className='w-full'
            >
            </textarea>
            <button type="submit" className="bg-robin_egg_blue-400 text-white md:hover:bg-robin_egg_blue-300 md:hover:rounded-full md:hover:text-xs md:w-4/12 h-8 text-sm rounded-md mx-auto my-2">ADD</button>
        </form>
    )
}

export default AddBike