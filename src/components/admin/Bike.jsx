import { useState, useEffect } from "react"
import { addDoc, deleteDoc, onSnapshot, collection, doc, query, where, updateDoc } from "firebase/firestore";
import { db } from '../../index'
import AddBike from "./AddBike";
import DeleteBike from "./DeleteBike";
import QueryBike from "./QueryBike";

function Bike() {

    let colRef = collection(db, 'bikes')

    const [id, setId] = useState()
    let [query, setQuery] = useState({})

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

    const handleAddInputChange = (e) => {
        e.preventDefault()
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

    const handleDeleteInputChange = (event) => {
        const { value } = event.target
        if (value === '') {
            alert('Id is required')
        } else {
            setId(value)
        }
    }

    const handleQueryInputChange = (event) => {
        const { value } = event.target
        if (value === '') {
            alert('Id is required')
        } else {
            setId(value)
        }
    }

    const handleUpdateInputChange = (event) => {
        const { value } = event.target
        if (value = ' ') {
            alert('Id id required')
        } else {
            setId(value)
        }
    }


    const handleAddSubmit = (event) => {
        event.preventDefault();
        // Check if any of the main fields are empty
        if (!bikeDetails.name || !bikeDetails.design || !bikeDetails.price || !bikeDetails.description) {
            console.log('Please fill in all the fields.');
            return;
        }
        // Check if any of the feature fields are empty
        for (const feature in bikeDetails.features) {
            if (!bikeDetails.features[feature]) {
                alert('Please fill in all the features.');
                return;
            }
        }
        // If all fields are filled, proceed to add the document to Firestore
        addDoc(colRef, bikeDetails);
        setBikeDetails({
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
        }
        )
    };

    const handleDeleteSubmit = (event) => {
        event.preventDefault();
        if (id) {
            const docRef = doc(db, 'bikes', id);
            deleteDoc(docRef);
        } else {
            alert('Id is required');
        }
    }

    const handleUpdateSubmit = (event) => {
        event.preventDefault()
        if (id) {
            const docRef = doc(db, 'bikes', id);
            updateDoc(docRef, {

            })
        }
    }

    const handleQuerySubmit = async (event) => {
        event.preventDefault();
        if (id) {
            const docRef = doc(db, 'bikes', id);
            onSnapshot(docRef, (doc) => {
                if (doc.exists()) {
                    query = setQuery({ ...doc.data(), id: id })
                    return query
                } else {
                    alert("No such document!");
                }
            });
        }
    }

    useEffect(() => {
        onSnapshot(colRef, (snapshot) => {
            let bikes = []
            snapshot.forEach((doc) => {
                bikes.push({ ...doc.data(), id: doc.id })
            })
            //This has a problem of rendering alot fix later
        })
    }, [bikeDetails])

    return (
        <div className="w-full h-[99%] md:bg-slate-100 md:p-3 md:grid md:grid-cols-3 md:gap-3 md:relative">
            <div className="md:px-5 md:py-2 md:h-[99%] md:rounded-xl md:row-span-2 md:col-span-1 md:row-start-1 md:col-start-1 md:bg-white md:shadow-lg md:shadow-robin_egg_blue-300 md:hover:z-50">
                <h3 className="text-center text-lg text-robin_egg_blue-400 font-extrabold">Add Bike</h3>
                <AddBike bikeDetails={bikeDetails} handleSubmit={handleAddSubmit} handleInputChange={handleAddInputChange}></AddBike>
            </div>
            <div className="md:bg-white md:rounded-xl md:shadow-lg md:shadow-robin_egg_blue-300 md:flex md:flex-col md:items-center md:justify-around md:px-2 md:py-3">
                <h3 className="text-center text-lg text-robin_egg_blue-400 font-extrabold">Delete Bike</h3>
                <p className="md:text-rich_black-200 md:text-md md:text-justify md:mt-10">Enter Product Id in the field below to delete</p>
                <DeleteBike handleInputChange={handleDeleteInputChange} handleSubmit={handleDeleteSubmit}></DeleteBike>
            </div>
            <div className="md:row-start-2 md:col-2 md:bg-white md:rounded-lg md:shadow-xl md:shadow-robin_egg_blue-300 md:px-2 md:py-3">
                <h3 className="text-center text-lg text-robin_egg_blue-400 font-extrabold">Query Bike</h3>
                <QueryBike handleInputChange={handleQueryInputChange} handleSubmit={handleQuerySubmit} details={query}></QueryBike>
            </div>
            <div className="md:col-start-3 md:row-span-2 md:bg-white md:rounded-lg md:shadow-xl md:shadow-robin_egg_blue-300 md:px-2 md:py-3">
                <h3>Update Bike</h3>
            </div>
        </div>
    )
}

export default Bike