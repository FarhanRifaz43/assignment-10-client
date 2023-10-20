import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../firebase/AuthProvider";

const CartItem = ({ item }) => {
    const {removeLocalStorage} = useContext(AuthContext);

    const { name, brand, image, price, rating } = item;
    return (
        <div>
            <div className="flex bg-base-100 shadow-xl p-5 border mb-3" data-aos="zoom-out" data-aos-duration="600">
                <figure><img src={image} alt="Movie" className="w-48 h-48" /></figure>
                <div className="grow mx-4 flex flex-col justify-between">
                    <div className="grow">
                        <h2 className="card-title mb-3">{name}</h2>
                        <p className="text-gray-500">{brand}</p>
                    </div>
                    <p className="text-gray-500">|{rating} Stars</p>
                    <div>

                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <button className="btn btn-outline btn-success">${price}</button>
                    <button onClick={() => removeLocalStorage(name)} className="btn btn-error">Remove</button>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default CartItem;