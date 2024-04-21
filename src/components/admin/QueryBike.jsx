function QueryBike({ handleInputChange, handleSubmit, details }) {
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
                <button type="submit">Query</button>
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