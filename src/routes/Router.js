import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/AuthinticatePage/Login/Login";
import Blogs from "../pages/BlogsPage/Blogs/Blogs";
import Home from "../pages/HomePage/Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            }
        ]  
    },
    {
        path:'dashboard',
        element:<DashboardLayout></DashboardLayout>

    }

])