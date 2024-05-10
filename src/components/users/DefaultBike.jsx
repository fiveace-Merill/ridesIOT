import { FaArrowRight } from "react-icons/fa";
import BikeProductCard from './BikeProductCard';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../index';
import { useEffect, useState, useRef } from "react";
import { FixedSizeList as List } from 'react-window';

function DefaultBike() {
    const [bikeProducts, setBikeProducts] = useState([]);
    const listContainerRef = useRef();
    const colRef = collection(db, 'bikes');

    useEffect(() => {
        onSnapshot(colRef, (snapshot) => {
            const products = [];
            snapshot.forEach((doc) => {
                products.push({ ...doc.data(), id: doc.id });
            });
            setBikeProducts(products);
        });
    }, []);

    useEffect(() => {
        const listElement = listContainerRef.current;
        if (listElement) {
            const handleWheel = event => {
                event.preventDefault();
                const { deltaY, deltaX } = event;
                listElement.scrollLeft += deltaX || deltaY;
                listElement.scrollRight += deltaX || deltaY;
            };

            listElement.addEventListener('wheel', handleWheel);
            return () => {
                listElement.removeEventListener('wheel', handleWheel);
            };
        }
    }, []);

    const Row = ({ index, style }) => (
        <div style={style} className="md:w-full">
            <BikeProductCard
                key={bikeProducts[index].id}
                name={bikeProducts[index].name}
                design={bikeProducts[index].design}
                price={bikeProducts[index].price}
                description={bikeProducts[index].description}
            />
        </div>
    );

    const width = window.innerWidth;
    const itemSize = window.innerWidth < 768 ? window.innerWidth : window.innerWidth * 0.25;
    const height = window.innerHeight < 768 ? window.innerHeight * 0.75 : 500;

    return (
        <>
            <div className='my-2 w-full flex flex-1 justify-stretch relative rounded-lg md:h-3/4 md:mx-auto md:justify-center'>
                {/* Add styles here to customize the scrollbar */}
                <div ref={listContainerRef} className="w-full mx-2">
                    <List
                        height={height}
                        itemCount={bikeProducts.length}
                        itemSize={itemSize}
                        width={width}
                        layout="horizontal"
                    >
                        {Row}
                    </List>
                </div>
            </div>
        </>
    );
}

export default DefaultBike;
