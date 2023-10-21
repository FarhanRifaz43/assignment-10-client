import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const Details = () => {
    const product = useLoaderData();
    const { setLocalStorage } = useContext(AuthContext);

    return (
        <div className="bg-white rounded-lg lg:w-3/4 mx-auto p-4 lg:flex">
            <div className="lg:w-1/2">
                <img src={product.image} className="lg:w-3/4 lg:mb-0 mb-5 rounded-lg" />
            </div>
            <div className="lg:w-1/2 pl-4">
                <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 text-lg mb-2">Brand: {product.brand}</p>
                <p className="text-gray-600 text-lg mb-2">Type: {product.type}</p>
                <p className="text-2xl font-bold mb-2">${product.price}</p>
                <p className="text-2xl font-bold mb-2">{product.rating}</p>
                <div className="text-gray-700 text-lg">
                    <p>{product.description}</p>
                </div>
                <div className="mt-16 flex gap-5">
                    <button onClick={() => setLocalStorage(product.name)} className="btn btn-outline btn-info">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Details;