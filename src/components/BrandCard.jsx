import { Link } from "react-router-dom";

const BrandCard = ({brand}) => {

    const {image, name} = brand;

    return (
        <div>
            <div className="card w-80 h-96 bg-base-100 shadow-xl border border-gray-50" data-aos="zoom-out-up" data-aos-duration="1000">
                <figure><img className="w-full h-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-xl items-center text-center">
                        {name}
                        <div className="badge badge-info ml-2">tech</div>
                    </h2>
                    <div className="justify-center mt-5 flex gap-3">
                        <Link to={`/product/${name}`}><div className="btn btn-outline">View Products</div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;