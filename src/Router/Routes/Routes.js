import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Signup from "../../Login/Signup";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import MyReview from "../../Pages/MyReview/MyReview";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceReview from "../../Pages/ServiceReview/ServiceReview";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
                
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/service',
                element:<AddService></AddService>
            },
            {
                path: '/services/:id',
                element: <ServiceReview/>
            },
            {
                path:'/reviews',
                element:<MyReviews></MyReviews>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/review',
                element: <MyReview></MyReview>
            }
        ]
    }
]);

export default router;