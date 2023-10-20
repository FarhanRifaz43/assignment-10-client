import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const Banner = () => {
const {user} = useContext(AuthContext)

  return (
    <>
      <div className="carousel w-full h-[80vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/ZXd8bVQ/alexandre-debieve-FO7-JIlwj-Ot-U-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-left text-white" data-aos="fade-down">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">Welcome to Innovation and Prosperity</h1>
                {user && <p className="mb-5">Explore and find the best deals for you!</p>}
                {!user && <p className="mb-5">Sign in and start exploring great deals- your one-stop shop for tech products!</p>}
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/XzwS9b8/maxim-hopman-Iay-KLkmz6g0-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-left text-white" data-aos="fade-down">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">Welcome to Innovation and Prosperity</h1>
                {user && <p className="mb-5">Explore and find the best deals for you!</p>}
                {!user && <p className="mb-5">Sign in and start exploring great deals- your one-stop shop for tech products!</p>}
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/hL48MgT/nasa-Q1p7bh3-SHj8-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-left text-white" data-aos="fade-down">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold">Welcome to Innovation and Prosperity</h1>
                {user && <p className="mb-5">Explore and find the best deals for you!</p>}
                {!user && <p className="mb-5">Sign in and start exploring great deals- your one-stop shop for tech products!</p>}
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;