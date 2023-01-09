import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import NotFound from "../NotFound/NotFound";
import Login from "../pages/AuthinticatePage/Login/Login";
import Register from "../pages/AuthinticatePage/Register/Register";
import Blogs from "../pages/BlogsPage/Blogs/Blogs";
import AddProducts from "../pages/DashboardPage/SellerDashboard/AddProducts/AddProducts";
import ProductsCategory from "../pages/HomePage/Category/ProductsCategory";
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
                path:'/category/:categoryName',
                loader:({params})=>{
                    return fetch(`http://localhost:5000/products?category=${params.categoryName}`)
                },
                element:<ProductsCategory></ProductsCategory>
            },
           
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            }
        ]  
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
           
            {
                path:'/dashboard/addproduct',
                element:<AddProducts></AddProducts>
            },

        ]

    }
    ,
    {
        path:'*',
        element:<NotFound></NotFound>
    }

])