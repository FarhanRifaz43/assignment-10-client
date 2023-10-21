import Swal from 'sweetalert2'

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newProduct = { image, name, brand, type, price, rating, description }
        console.log(newProduct)

        fetch(' https://assignment-10-server-9xncomvgn-farhanrifaz43s-projects.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Product added successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="">
            <div className="w-fit mx-auto items-center flex flex-col mb-8">
                <div className="text-center lg:text-left" data-aos="zoom-in" data-aos-duration="600">
                    <h1 className="text-4xl font-bold text-center mt-16"><span className="text-pink-400">Add</span> New Product</h1>
                    <p className="py-6 text-center text-gray-500">Add a new product by providing the required information.</p>
                </div>
                <div className="flex-grow w-full mx-auto border border-pink-400 rounded-lg bg-base-100 mt-10" data-aos="fade-up" data-aos-duration="600">
                    <div className="card-body rounded-lg">
                        <form onSubmit={handleAddProduct}>
                            <div className="flex gap-10">
                                <div className="form-control flex-grow">
                                    <label className="label">
                                        <span className="label-text">Product Image</span>
                                    </label>
                                    <input type="text" placeholder="" name="image" className="input input-bordered" />
                                </div>
                                <div className="form-control flex-grow">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input type="text" placeholder="" name="name" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="form-control flex-grow">
                                    <label className="label">
                                        <span className="label-text">Brand Name</span>
                                    </label>
                                    <input type="text" placeholder="" name="brand" className="input input-bordered" />
                                </div>
                                <div className="form-control flex-grow">
                                    <label className="label">
                                        <span className="label-text">Product Type</span>
                                    </label>
                                    <input type="text" placeholder="" name="type" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="form-control flex-grow">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" placeholder="" name="price" className="input input-bordered" />
                                </div>
                                <div className="form-control flex-grow">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" placeholder="" name="rating" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control flex-grow">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="textarea" placeholder="" name="description" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-8">
                                <button className="btn hover:text-pink-400 text-black hover:bg-black">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;