import { useLoaderData } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
    const cart = JSON.parse(localStorage.getItem('productName'));
    const products = useLoaderData();
    const cartProducts = products.filter(product => cart.includes(product.name));
    return (
        <div>
            {(cart.length == 0) && 
            <>
            <h2 className="w-fit mx-auto font-bold text-lg mt-20">Oops!</h2>
            <p className="mx-auto mt-3 w-fit">No items in the cart right now.</p>
            </>}
        <div className="w-fit mx-auto mt-10 grid lg:grid-cols-2 gap-5">
            { (cart.length > 0) &&
                cartProducts.map(item => <CartItem key={item._id} item={item}></CartItem>)
            }
        </div>
        </div>
    );
};

export default Cart;