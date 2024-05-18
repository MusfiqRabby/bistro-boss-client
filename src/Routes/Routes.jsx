import {  createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../layouts/Root";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";

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
        }
      ]
    },
  ]);

