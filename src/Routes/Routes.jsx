import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Error from "../Component/Error";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import Issues from "../Pages/Issues";
import Stuffs from "../Pages/Stuffs";
import ContactUs from "../Component/ContactUs";
import Error2 from "../Component/Error2";

export const router = createBrowserRouter([
{
    path:"/",
    Component: Root, 
    errorElement: <Error></Error>,
    children:[
        {
            index:true,
            path:"/",
            Component:Home,
        },
        {
            path:"/login",
            Component:LogIn,
        },
        {
            path:"/register",
            Component: Register,
        },
        {
            path:"/issues",
            Component:Issues,
        },
        {
            path:"/stuffs",
            Component: Stuffs,
        },
        {
            path:"/contact",
            Component: ContactUs,
        },
        {
            path:"/issues/*",
            Component: Error2,
        },
    ]
}
])