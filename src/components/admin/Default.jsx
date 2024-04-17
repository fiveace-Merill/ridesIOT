function Default(){
    return(
        <div className="md:container md:my-3 md:p-3 md:grid md:grid-rows-3 md:grid-cols-3 md:h-[97%] md:gap-3">
            <div className="md:row-span-3 md:bg-forest_green-400 md:rounded-2xl md:gap-1 md:p-3 md:shadow-lg md:shadow-forest_green-500 md:text-white">
                <h3 className="md:text-center md:text-3xl md:font-bold">Bikes</h3>
                <div>
                    <h3 className="md:text-lg">Stock Snapshot</h3>
                    <table className="md:my-2 md:w-full md:text-lg border-separate border-spacing-2 border border-white">
                        <tr>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Orders</th>
                        </tr>
                        <tr>
                            <td className="border border-white">Mountain Bike</td>
                            <td className="border border-white">10</td>
                            <td className="border border-white">3</td>
                        </tr>
                        <tr>
                            <td className="border border-white">Road Bike</td>
                            <td className="border border-white">9</td>
                            <td className="border border-white">3</td>
                        </tr>
                        <tr>
                            <td className="border border-white">BMX</td>
                            <td className="border border-white">15</td>
                            <td className="border border-white">7</td>
                        </tr>
                    </table>
                </div>
                <div className="md:my-5">
                    <h3 className="md:text-lg">Notifications</h3>
                </div>
            </div>
            <div className="md:col-start-2 md:col-span-2 md:bg-rich_black-600 md:rounded-2xl md:p-2 md:shadow-lg md:shadow-blue-400">
                <h3 className="md:text-center md:text-3xl">IoT</h3>
            </div>
            <div className="md:bg-fuchsia-900 md:col-span-2 md:row-span-2 md:rounded-2xl md:p-2 md:shadow-lg md:shadow-fuchsia-300">
                <h3 className="md:text-center md:text-3xl">Events</h3>
            </div>
        </div>
    )
}

export default Default