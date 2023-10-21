import { useLoaderData } from "react-router-dom";
import FilterProducts from "./FilterProducts";

const AllProducts = () => {
    const products = useLoaderData();

    return (
        <div className="lg:flex gap-10">
            <div>
                <h2 className="text-center mt-8 font-bold text-2xl">All Products</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-5 gap-5 w-fit mx-5">
                    {
                        products.map(product => <FilterProducts key={product._id} filterProduct={product}></FilterProducts>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProducts;