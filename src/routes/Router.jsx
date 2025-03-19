import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import BookService from "../pages/BookService/BookService";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import MyBookings from "../pages/MyBookings/MyBookings";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/serviceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                // loader: ({params}) => fetch(`http://localhost:5000/serviceDetails/${params.id}`),
                loader: ({params}) => fetch(`https://car-doctor-server-zeta-bice.vercel.app/serviceDetails/${params.id}`),
            },
            {
                path: '/bookService/:id',
                element: <PrivateRoute><BookService></BookService></PrivateRoute>,
                // loader: ({params}) => fetch(`http://localhost:5000/bookService/${params.id}`),
                loader: ({params}) => fetch(`https://car-doctor-server-zeta-bice.vercel.app/bookService/${params.id}`),
            },
            {
                path: '/myBookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])