import BrandCard from "./BrandCard";
import PropTypes from 'prop-types';

const Brands = ({ brands }) => {

    return (
        <div>
            <h2 className="text-center mt-16 text-2xl font-bold">Popular Brands</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-fit mx-auto gap-10 mb-16 mt-8">
                {
                    brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

Brands.propTypes = {
    brands: PropTypes.array,
    map: PropTypes.func,
}

export default Brands;