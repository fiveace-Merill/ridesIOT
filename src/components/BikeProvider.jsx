import { BikeContext } from "./BikeContext";
import { useState, useEffect } from 'react';
import { db } from "..";
import {
    getDocs,
    collection
} from 'firebase/firestore'

async function getBikeData() {
    try {
        let bikes = []
        const colRef = collection(db, 'bikes')
        const dbCollection = await getDocs(colRef)
        dbCollection.docs.forEach((doc) => {
            bikes.push({ ...doc.data(), id: doc.id })
        })
        return bikes;
    } catch (err) {
        console.log("Error obtaining bike details data")
    }
}
function BikeProvider({ children }) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        getBikeData().then(bikes => {
            setData(bikes)
            setLoading(false)
        });
    }, [])
    if (isLoading) {
        return (
            <div>LOADING...</div>
        )
    }

    return (
        <BikeContext.Provider value={data}>
            {children}
        </BikeContext.Provider>
    )
}

export default BikeProvider;
