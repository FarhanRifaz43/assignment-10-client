import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const FilterProducts = ({ filterProduct }) => {

    const { _id, image, name, brand, type, price, rating } = filterProduct;

    return (
        <div className="lg:card-side lg:flex rounded-xl bg-base-100 shadow-xl w-fit lg:mx-auto p-4 border" data-aos="zoom-in-down" data-aos-duration="600">
            <figure><img src={image} alt="Album" className="lg:w-80 lg:h-80" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{brand}</p>
                <p>{type}</p>
                <p>${price}</p>
                <p>{rating}</p>
                <div className="card-actions justify-end">
                    <Link to={`/product/details/${_id}`}><button className="btn btn-info">Details</button></Link>
                    <Link to={`/update/${_id}`}><button className="btn btn-success">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

FilterProducts.propTypes = {
    filterProduct: PropTypes.object,
}

export default FilterProducts;