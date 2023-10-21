const TechNewsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-800 border-b p-4 text-white">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold text-center uppercase">Latest Updates</h1>
                </div>
            </header>
            <div className="container mx-auto p-4 flex">
                <main className="w-2/3 pr-4">
                    <div className="bg-white p-4 shadow-xl mb-4 lg:flex gap-5 rounded-lg">
                        <img className="lg:w-64 h-64 w-full rounded-lg lg:mb-0 mb-3" src="https://i.ibb.co/RDf8Nbc/Power-Solar-480x480.webp" alt="" />
                        <div>
                            <h2 className="text-xl font-semibold mb-5">New Smartphone Released</h2>
                            <p className="text-gray-400 text-sm">The tech world is buzzing with excitement as the latest smartphone offering from a leading manufacturer hits the market. Packed with an array of groundbreaking features, this new device promises to redefine the mobile experience. Equipped with a state-of-the-art processor and a cutting-edge camera system, it's poised to set new standards for performance and photography. The device's sleek design, coupled with its impressive battery life, ensures that users can stay connected and productive throughout the day. Tech enthusiasts and consumers alike are eagerly awaiting the opportunity to get their hands on this innovative piece of technology.</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 shadow-xl mb-4 lg:flex gap-5 rounded-lg">
                        <img className="lg:w-64 h-64 w-full rounded-lg lg:mb-0 mb-3" src="https://i.ibb.co/9qBM50s/wordpress-923188-1280.jpg" alt="" />
                        <div>
                            <h2 className="text-xl font-semibold mb-5">Tech Company's Earnings Report</h2>
                            <p className="text-gray-400 text-sm">In a stunning turn of events, the renowned tech company has released its quarterly earnings report, shattering all expectations. With a staggering increase in revenue and profits, the company's financial performance has reached new heights. This impressive success can be attributed to a series of strategic moves, including the launch of groundbreaking products, expansion into global markets, and the growing demand for its diverse range of services. Industry analysts and investors are closely monitoring the company's every move as it continues to dominate the tech landscape and shape the future of innovation.</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 shadow-xl mb-4 lg:flex gap-5 rounded-lg">
                        <img className="lg:w-64 h-64 w-full rounded-lg lg:mb-0 mb-3" src="https://i.ibb.co/ZXd8bVQ/alexandre-debieve-FO7-JIlwj-Ot-U-unsplash.jpg" alt="" />
                        <div>
                            <h2 className="text-xl font-semibold mb-5"> Latest Trends in AI</h2>
                            <p className="text-gray-400 text-sm">The field of Artificial Intelligence (AI) is experiencing a seismic shift, with the latest trends pushing the boundaries of what's possible. Machine learning algorithms are becoming increasingly sophisticated, enabling machines to make sense of vast amounts of data and make more accurate predictions. Natural Language Processing (NLP) breakthroughs are ushering in a new era of human-computer interaction, making voice assistants and chatbots more intuitive and useful. These advancements in AI are not confined to a single industry; they have far-reaching implications across healthcare, finance, transportation, and more. As AI continues to evolve, it promises to revolutionize the way we work, live, and interact with technology.</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 shadow-xl mb-4 lg:flex gap-5 rounded-lg">
                        <img className="lg:w-64 h-64 w-full rounded-lg lg:mb-0 mb-3" src="https://i.ibb.co/XzwS9b8/maxim-hopman-Iay-KLkmz6g0-unsplash.jpg" alt="" />
                        <div>
                            <h2 className="text-xl font-semibold mb-5">Gaming Console Review</h2>
                            <p className="text-gray-400 text-sm">In the world of gaming, excitement is at an all-time high as we dive into an in-depth review of the latest gaming console. This powerhouse of a gaming machine promises an immersive experience like no other. With jaw-dropping graphics, lightning-fast load times, and a vast library of games that cater to every type of gamer, it's a force to be reckoned with. Whether you're a casual player looking for some downtime or a hardcore enthusiast seeking the next gaming challenge, this console has something to offer. Join us as we explore every nook and cranny of this gaming marvel, from its sleek design to its game-changing features. This review will leave no stone unturned, helping you decide if it's the right gaming console for you.</p>
                        </div>
                    </div>
                </main>
                <aside className="w-1/3">
                    <div className="bg-gray-100 p-4">
                        <h3 className="text-lg font-semibold mb-2 text-center">Ads</h3>
                        <img src="https://i.ibb.co/fn4xpzn/7674576.jpg" alt="Advertisement" className="mb-2" />
                        <img src="https://i.ibb.co/1bfBq25/7492438.jpg" alt="Advertisement" className="mb-2" />
                        <img src="https://i.ibb.co/NLkPxpt/student-849822-1280.jpg" alt="Advertisement" className="mb-2" />
                        <img src="https://i.ibb.co/J3LZpfQ/clark-tibbs-oq-Stl2-L5ox-I-unsplash.jpg" alt="Advertisement" />
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default TechNewsPage;
