import { useState } from "react"
import { GrAdd } from 'react-icons/gr'
import { onSnapshot } from "firebase/firestore"
import { db } from '../../index'
function UpdateBike({ handleInputChange, handleSubmit }) {
    const [bike, setBike] = useState()
    function handleClick(event){
        const {value} = event.target
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={} onChange={handleInputChange}></input>
                <div className="md:bg-robin_egg_blue-400 rounded-full md:h-10 md:w-10 flex justify-center items-center">
                    <GrAdd color="white" onClick={handleClick}/>
                </div>
                <button type="submit">UPDATE</button>
            </form>
        </div>
    )
}


export default UpdateBike
