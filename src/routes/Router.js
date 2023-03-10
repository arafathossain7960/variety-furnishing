import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import NotFound from "../NotFound/NotFound";
import AdminRoute from "../pages/AuthinticatePage/AdminRoute/AdminRoute";
import Login from "../pages/AuthinticatePage/Login/Login";
import PrivetRoute from "../pages/AuthinticatePage/PrivetRoute/PrivetRoute";
import Register from "../pages/AuthinticatePage/Register/Register";
import Blogs from "../pages/BlogsPage/Blogs/Blogs";
import AllBuyers from "../pages/DashboardPage/AddminDashborad/AllBuyers/AllBuyers";
import AllReports from "../pages/DashboardPage/AddminDashborad/AllReports/AllReports";
import AllSellers from "../pages/DashboardPage/AddminDashborad/AllSellers/AllSellers";
import Dashborad from "../pages/DashboardPage/AddminDashborad/Dashboard/Dashborad";
import MyOrders from "../pages/DashboardPage/BuyerDashboard/MyOrders/MyOrders";
import Payment from "../pages/DashboardPage/BuyerDashboard/Payment/Payment";
import AddProducts from "../pages/DashboardPage/SellerDashboard/AddProducts/AddProducts";
import MyProducts from "../pages/DashboardPage/SellerDashboard/MyProducts/MyProducts";
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
                    return fetch(`https://variety-furnishing-server-site.vercel.app/products?category=${params.categoryName}`)
                },
                element:<PrivetRoute><ProductsCategory></ProductsCategory></PrivetRoute>
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
        element:<PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
        children:[
           {
            path:'/dashboard',
            element:<Dashborad></Dashborad>
           },
            {
                path:'/dashboard/addproduct',
                element:<AddProducts></AddProducts>
            },
            {
                path:'/dashboard/allSellers',
                element:<AllSellers></AllSellers>
            },
            {
                path:'/dashboard/allBuyers',
                element:<AllBuyers></AllBuyers>
            },
            {
                path:'/dashboard/allReports',
                element:<AllReports></AllReports>
            },
            {
                path:'/dashboard/myProducts',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/dashboard/myOrders',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>
            },

        ]

    }
    ,
    {
        path:'*',
        element:<NotFound></NotFound>
    }

])