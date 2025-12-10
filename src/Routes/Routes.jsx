import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Error from "../Component/Error";
import Home from "../Pages/Home";

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
        }
    ]
}
])