import { Outlet } from "react-router-dom";
import Footer from "../Shear/Footer/Footer";
import Navbar from "../Shear/Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;