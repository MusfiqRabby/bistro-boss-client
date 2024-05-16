import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Fetured from "../Fetured/Fetured";
import PopularMenu from "../Popular/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Fetured></Fetured>
        </div>
    );
};

export default Home;