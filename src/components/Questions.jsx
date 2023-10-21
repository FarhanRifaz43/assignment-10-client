const Questions = () => {
    return (
        <div className="w-3/4 mx-auto my-24">
            <h2 className="font-bold text-center text-3xl mb-8">Frequently Asked Questions</h2>
            <div className="collapse collapse-arrow bg-gray-100 shadow-md mb-1">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold pl-8">
                    How can I track my order?
                </div>
                <div className="collapse-content text-sm pl-8 text-gray-500">
                    <p>You can easily track your order by following these steps:<br />

                        1. Log in to your account on our website.<br />
                        2. Go to the "Order History" or "My Orders" section.<br />
                        3. Find the order you want to track and click on it.<br />
                        4. You will see the current status of your order, along with a tracking number if applicable.<br />
                        5. Click on the tracking number to get detailed shipment information and the estimated delivery date.<br />
                        If you checked out as a guest or have any issues tracking your order, feel free to contact our customer support for assistance.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-gray-100 shadow-md mb-1">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold pl-8">
                    What payment methods do you accept?
                </div>
                <div className="collapse-content text-sm pl-8 text-gray-500">
                    <p>We accept the following payment methods for your convenience: <br />

                        1. Credit/Debit Cards: We accept major credit and debit cards, including Visa, MasterCard, American Express, and Discover. <br />
                        2. PayPal: You can make secure payments using your PayPal account. <br />
                        3. Online Payment Gateways: We also offer online payment gateways like Apple Pay, Google Pay, and others. <br />
                        Rest assured that all transactions are encrypted and secure to protect your personal and financial information.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-gray-100 shadow-md mb-1">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold pl-8">
                    Do you offer warranty and returns on your products?
                </div>
                <div className="collapse-content text-sm pl-8 text-gray-500">
                    <p>Yes, we stand behind the quality of our products. Here's our warranty and returns policy: <br />

                        Warranty: Most of our tech products come with a manufacturer's warranty. The duration of the warranty may vary by product, so please check the product details for specific information. If you encounter any issues with a product covered by warranty, please contact our customer support, and we will assist you in initiating a warranty claim. <br />

                        Returns: We offer a hassle-free return policy within [X] days of receiving your order. If you are not completely satisfied with your purchase, you can return the product in its original condition and packaging for a refund or exchange. Please review our "Return Policy" page for detailed instructions and eligibility criteria.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-gray-100 shadow-md mb-1">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold pl-8">
                    What is the warranty duration for your tech products?
                </div>
                <div className="collapse-content text-sm pl-8 text-gray-500">
                    <p>The warranty duration for our tech products varies depending on the product and its manufacturer. Typically, products come with a standard manufacturer's warranty, which can range from 1 year to 3 years. You can find the specific warranty information on the product details page. If you have questions about a specific product's warranty, feel free to contact our customer support.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-gray-100 shadow-md mb-1">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold pl-8">
                    How can I cancel or change my order?
                </div>
                <div className="collapse-content text-sm pl-8 text-gray-500">
                    <p> If you wish to cancel or make changes to your order, please contact our customer support as soon as possible. We will do our best to accommodate your request. However, please note that once an order has been shipped, it cannot be canceled or changed. In such cases, you can follow our return and exchange process after receiving the product.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-gray-100 shadow-md mb-1">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold pl-8">
                    What payment security measures are in place?
                </div>
                <div className="collapse-content text-sm pl-8 text-gray-500">
                    <p> We take the security of your payments very seriously. Our website employs industry-standard encryption and security protocols to protect your personal and financial information. All online transactions are processed through secure and reputable payment gateways, ensuring that your data is kept safe. Additionally, we do not store your credit card information, further enhancing your payment security.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-gray-100 shadow-md mb-1">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold pl-8">
                    How do I return or exchange a product?
                </div>
                <div className="collapse-content text-sm pl-8 text-gray-500">
                    <p>If you are not completely satisfied with your purchase, you can initiate a return or exchange within 5 days of receiving the product. To do so, please follow these steps:<br />

                        1. Log in to your account and go to the "Order History" or "My Orders" section. <br />
                        2. Locate the order containing the item you want to return or exchange and click on it.<br />
                        3. Follow the provided instructions to request a return or exchange.<br />
                        4. Once your request is approved, you will receive instructions on how to return the product.<br />
                        For detailed information on our return and exchange process, please visit our "Return Policy" page.</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;