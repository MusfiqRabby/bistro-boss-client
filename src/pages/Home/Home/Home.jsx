import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Fetured from "../Fetured/Fetured";
import PopularMenu from "../Popular/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Fetured></Fetured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;