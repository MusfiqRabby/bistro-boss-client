import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils,  } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
   
    const [cart] = useCart();
    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();
   
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
         <ul className="menu p-4">
           
           {
            isAdmin ? <>
             <li>
                <NavLink to='/dashboard/adminHome'>
                <FaHome/>
                Adimin Home</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/addItems'>
                <FaUtensils/>
                Add Items</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/manageItems'>
               <FaList/>
                Manage Items</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/bokings'>
                <FaBook/>
               Manage Bookings</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/users'>
                <FaUsers/>
                All Users</NavLink>
            </li>
            </>
            : 
            <>
             <li>
                <NavLink to='/dashboard/userHome'>
                <FaHome/>
                User Home</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/reservation'>
                <FaCalendar/>
                Reservation</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/cart'>
                <FaShoppingCart/>
                My Cart ({cart.length})</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/review'>
                <FaAd/>
               Add a Review</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/bookings'>
                <FaList/>
                My Bookings</NavLink>
            </li>
            </>
           }

            {/* sheared nav Links */}
            <div className="divider text-white"></div>
            <li>
                <NavLink to='/'>
                <FaHome/>
                 Home</NavLink>
            </li>
            <li>
                <NavLink to='/order/salad'>
                <FaSearch/>
                 Menu</NavLink>
            </li>
            <li>
                <NavLink to='/order/contact'>
                <FaEnvelope/>
                Contact</NavLink>
            </li>
         </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
          <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;