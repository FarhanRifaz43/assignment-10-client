const News = () => {
    return (
        <div data-aos="zoom-in-bottom" className="hero h-[55vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/FhMknvt/desktop-1920x1080.png)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="flex items-center justify-between gap-20">
                    <div data-aos="zoom-in-right">
                        <h2 className="font-bold text-5xl w-3/4 text-left text-white">Subscribe to <span className="text-cyan-300">Our Weekly</span> Newsletter</h2>
                        <p className="text-left mt-8 text-cyan-300">Stay updated with latest tech news and releases!</p>
                    </div>
                    <div>
                        <div className="join" data-aos="fade-left">
                            <input className="input input-bordered join-item" placeholder="Email" />
                            <button className="btn btn-info join-item rounded-r-lg">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;