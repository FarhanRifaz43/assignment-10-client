import { useLoaderData, useParams } from "react-router-dom";
import FilterProducts from "./FilterProducts";

const Products = () => {

    const { name } = useParams();

    const products = useLoaderData();

    const filterProducts = products.filter(product => product.brand === name)

    return (
        <div className="grid grid-cols-4 gap-10">
            <div className="col-span-3">
                <h2 className="text-center mt-8 font-bold text-2xl">Products of {name}</h2>
                <div className="grid lg:grid-cols-2 grid-cols-1 my-5 gap-8 ml-5">
                    <div className=" col-span-2 w-screen">
                        {(filterProducts.length == 0) &&
                            <>
                                <h2 className="w-fit mx-auto font-bold text-lg mt-20">Oops!</h2>
                                <p className="mx-auto mt-3 w-fit">No products available right now.</p>
                            </>}
                    </div>
                    {
                        filterProducts.map(filterProduct => <FilterProducts key={filterProduct._id} filterProduct={filterProduct}></FilterProducts>)
                    }
                </div>
            </div>
            <div className="bg-gray-100">
                <h2 className="text-center my-4 text-sm font-bold">Ads From Our Sponsors</h2>
                <div className="h-[100vh] lg:w-full carousel carousel-vertical">
                    <div className="carousel-item border border-black">
                        <img className="w-full" src="https://img.freepik.com/free-psd/business-promotion-corporate-instagram-story-template_120329-1470.jpg" />
                    </div>
                    <div className="carousel-item border border-black">
                        <img className="w-full" src="https://c8.alamy.com/comp/2JBC70X/realistic-mayonnaise-vertical-ads-poster-with-outdoor-scenery-table-and-eggs-with-plates-and-product-package-vector-illustration-2JBC70X.jpg" />
                    </div>
                    <div className="carousel-item border border-black">
                        <img className="w-full" src="https://influencermarketinghub.com/wp-content/uploads/2020/01/photo_2020-01-29_18-06-47-1-576x1024.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;