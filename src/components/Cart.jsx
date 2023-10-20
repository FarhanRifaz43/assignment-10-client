import { useLoaderData } from "react-router-dom";

const Cart = () => {
    const cart = JSON.parse(localStorage.getItem('productName'));

    const products = useLoaderData();

    // const cartProducts = products.filter(product => cart.includes(product.name));
    return (
        <div>
            {cart.length}
            {/* {products.length} */}
        </div>
    );
};

export default Cart;