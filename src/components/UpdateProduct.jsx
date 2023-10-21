import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, image, name, brand, type, price, rating, description } = product;

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const updatedProduct = { image, name, brand, type, price, rating, description }
        console.log(updatedProduct)

        fetch(` https://assignment-10-server-9xncomvgn-farhanrifaz43s-projects.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Product updated successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="">
            <div className="w-fit mx-auto items-center flex flex-col">
                <div className="text-center lg:text-left" data-aos="zoom-in" data-aos-duration="600">
                    <h1 className="text-4xl font-bold text-center mt-16"><span className="text-pink-400">Update</span> {name}</h1>
                    <p className="py-6 text-center text-gray-500">Please provide the required informations.</p>
                </div>
                <div className="flex-grow w-full mx-auto border border-pink-400 rounded-lg bg-base-100 mt-10" data-aos="fade-up" data-aos-duration="600">
                    <div className="card-body rounded-lg">
                        <form onSubmit={handleUpdateProduct}>
                            <div className="flex gap-10">
                                <div className="form-control flex-grow">
                                    <label className="label">
                                        <span className="label-text">Product Image</span>
                                    </label>
                                    <input type="text" placeholder="" defaultValue={image} name="image" className="input input-bordered" />
                                </div>
                                <div className="form-control flex-grow">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input type="text" placeholder="" defaultValue={name} name="name" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="form-control flex-grow">
                                    <label className="label">
                                        <span className="label-text">Brand Name</span>
                                    </label>
                                    <input type="text" placeholder="" defaultValue={brand} name="brand" className="input input-bordered" />
                                </div>
                                <div className="form-control flex-grow">
                                    <label className="label">
                                        <span className="label-text">Product Type</span>
                                    </label>
                                    <input type="text" placeholder="" defaultValue={type} name="type" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="form-control flex-grow">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" placeholder="" defaultValue={price} name="price" className="input input-bordered" />
                                </div>
                                <div className="form-control flex-grow">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" placeholder="" defaultValue={rating} name="rating" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control flex-grow">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="textarea" placeholder="" defaultValue={description} name="description" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-8">
                                <button className="btn hover:text-pink-400 text-black hover:bg-black">Update Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;