import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const products = useLoaderData();
    const { name } = useParams();

    const product = products.find(product => product.name === name);
    console.log(product)

    return (
        <div className="bg-white rounded-lg lg:w-3/4 mx-auto p-4 flex">
            <div className="w-1/2">
                <img src={product.image} className="w-3/4 rounded-lg" />
            </div>
            <div className="w-1/2 pl-4">
                <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 text-lg mb-2">Brand: {product.brand}</p>
                <p className="text-gray-600 text-lg mb-2">Type: {product.type}</p>
                <p className="text-2xl font-bold mb-2">${product.price}</p>
                <p className="text-2xl font-bold mb-2">{product.rating}</p>
                <div className="text-gray-700 text-lg">
                    <p>{product.description}</p>
                </div>
                <div className="mt-16 flex gap-5">
                    <button className="btn btn-outline btn-info">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Details;