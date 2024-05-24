import {  createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../layouts/Root";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import Secret from "../Shear/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItmes/ManageItems";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: 'menu',
          element: <Menu/>
        },
        {
          path: '/order/:category',
          element: <Order/>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp/>
        },
        {
          path: '/secret',
          element: <PrivateRoutes><Secret/></PrivateRoutes>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoutes><Dashboard/></PrivateRoutes>,
      children: [
        
        // normal users routes
        {
          path: 'cart',
          element: <Cart/>
        },

        // admin only routes
        {
          path: 'addItems', 
           element: <AdminRoute><AddItems/></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems/></AdminRoute>
        },
        {
          path: 'users',
          element: <AdminRoute><AllUsers/></AdminRoute>
        }
      ]
    }
  ]);

