import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brands from "./Brands";
import Footer from "./Footer";

const Home = () => {
    
const brands = useLoaderData();

    return (
        <>
        <Banner></Banner>
        <Brands brands={brands}></Brands>
        <Footer></Footer>
        </>
    );
};

export default Home;