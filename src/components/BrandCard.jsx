import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BrandCard = ({brand}) => {

    const {image, name} = brand;

    return (
        <div>
            <div className="lg:w-80 flex flex-col h-96 bg-base-100 shadow-xl rounded-xl border border-gray-50" data-aos="zoom-out-up" data-aos-duration="1000">
                <figure><img className="lg:w-full h-52 rounded-t-xl" src={image} alt="Shoes" /></figure>
                <div className="mt-8">
                    <h2 className="font-bold text-xl items-center text-center">
                        {name}
                        <div className="badge badge-info ml-2">tech</div>
                    </h2>
                    <div className="justify-center mt-8 flex gap-3">
                        <Link to={`/product/${name}`}><div className="btn btn-outline">View Products</div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object,
}

export default BrandCard;