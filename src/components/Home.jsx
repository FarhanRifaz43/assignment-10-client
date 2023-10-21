import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brands from "./Brands";
import Footer from "./Footer";
import News from "./News";
import Questions from "./Questions";

const Home = () => {
    
const brands = useLoaderData();

    return (
        <>
        <Banner></Banner>
        <Brands brands={brands}></Brands>
        <News></News>
        <Questions></Questions>
        <Footer></Footer>
        </>
    );
};

export default Home;