import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shear/Footer/Footer";
import Navbar from "../Shear/Navbar/Navbar";


const Root = () => {
  
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
  
    return (
        <div>
  { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
   { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;