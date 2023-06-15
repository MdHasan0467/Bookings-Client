import About from "../Pages/About";
import Home from "../Pages/Home";
import Main from "../Layouts/Main";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import MyProfile from "../Pages/MyProfile";

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
    path: '/dashboard',
    element: <Dashboard />,
    children : [
        {
            path: "/dashboard",
            element: <MyProfile />
        }
    ]
}







]);
