import { Link } from "react-router-dom";

const FilterProducts = ({ filterProduct }) => {

    const { image, name, brand, type, price, rating } = filterProduct;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl w-fit mx-auto p-4 border">
            <figure><img src={image} alt="Album" className="w-80 h-80" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{brand}</p>
                <p>{type}</p>
                <p>${price}</p>
                <p>{rating}</p>
                <div className="card-actions justify-end">
                    <Link to={`/product/details/${name}`}><button className="btn btn-info">Details</button></Link>
                    <button className="btn btn-success">Update</button>
                </div>
            </div>
        </div>
    );
};

export default FilterProducts;