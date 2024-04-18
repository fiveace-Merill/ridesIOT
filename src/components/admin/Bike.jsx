import { useState, useEffect } from "react"
import AddBike from "./AddBike";
function Bike() {
    const [bikeDetails, setBikeDetails] = useState({
        name: '',
        design: '',
        price: '',
        description: '',
        features: {
            brake_type: '',
            wheel_size: '',
            frame_material: '',
            color: '',
            gears: '',
            tires: '',
            weight: '',
            suspension: '',
        }
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name in bikeDetails.features) {
            setBikeDetails({
                ...bikeDetails,
                features: {
                    ...bikeDetails.features,
                    [name]: value
                }
            });
        } else {
            setBikeDetails({
                ...bikeDetails,
                [name]: value
            });
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically send the bikeDetails to a server
        // or save it in a JSON file as needed
        console.log(bikeDetails);
    };

    useEffect(() => {
        console.log(bikeDetails)

    }, [])

    return (
        <div className="w-full h-[99%] md:bg-slate-100 md:p-3 md:grid md:grid-cols-3 md:gap-3 md:relative">
            <div className="md:px-5 md:py-2 md:h-[99%] md:rounded-xl md:row-span-2 md:col-span-1 md:row-start-1 md:col-start-1 md:bg-white md:shadow-lg md:shadow-robin_egg_blue-300 md:hover:z-50">
                <h3 className="text-center text-lg text-robin_egg_blue-400 font-extrabold">Add Bike</h3>
                <AddBike bikeDetails={bikeDetails} handleSubmit={handleSubmit} handleInputChange={handleInputChange}></AddBike>
            </div>
            <div className="md:bg-yellow-700 md:rounded-lg">
                <h3>Delete Bike</h3>
            </div>
            <div className="md:row-start-2 md:col-2 md:bg-rich_black-500 md:rounded-lg">
                <h3>Update Bike</h3>
            </div>
            <div className="md:col-start-3 md:row-span-2 md:bg-brunswick_green-500 md:rounded-lg">
                <h3>Get bike</h3>
            </div>

        </div>
    )
}

export default Bike