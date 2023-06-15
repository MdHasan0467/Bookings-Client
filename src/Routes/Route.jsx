import About from "../Pages/About";
import Home from "../Pages/Home";
import Main from "../Layouts/Main";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import MyProfile from "../Pages/MyProfile";
import SignIn from "../Pages/SignIn";
import Authentication from "../Layouts/Authentication";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        ],
    },


{
    path: '/authentication',
    element: <Authentication />,
    children : [
        {
            path: "/authentication/sign-in",
            element: <SignIn />
        },
        {
            path: "/authentication/sign-up",
            element: <SignUp />
        },
    ]
},







{
    path: '/dashboard',
    element: <Dashboard />,
    children : [
        {
            path: "/dashboard",
            element: <MyProfile />
        }
    ]
},







]);
