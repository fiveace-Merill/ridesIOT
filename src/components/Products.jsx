import { useContext } from "react";
import { BikeContext } from "./BikeContext";
import Card from './Card'

function Products() {
    const bikeCtx = useContext(BikeContext)
    return (
        <div className="lg:h-auto lg:flex lg:justify-between lg:w-auto">
            <p>{console.log(bikeCtx)}</p>
            {
                bikeCtx.map(bike => (
                    <Card name={bike.name} design={bike.design} features={bike.features} description={bike.description} price={bike.price} key={bike.id} />
                ))
            }
        </div>
    )
}

export default Products;
