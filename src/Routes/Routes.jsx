import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Error from "../Component/Error";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import Issues from "../Pages/Issues";
import Stuffs from "../Pages/Stuffs";
import Error2 from "../Component/Error2";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddIssue from "../Pages/AddIssue";
import PrivateRoutes from "./PrivateRoutes";
import IssueDetails from "../Component/IssueDetails";

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
             loader:()=>fetch('http://localhost:3000/issues'),
            Component:Issues,
        },
        {
          path:'/issueDetails/:id',
          loader: ({params})=>fetch(`http://localhost:3000/issues/${params.id}`),
          element:<PrivateRoutes><IssueDetails></IssueDetails></PrivateRoutes>
        },
        {
            path:"/stuffs",
            Component: Stuffs,
        },
        {
            path:"/add-issue",
            Component: AddIssue,
        },
        {
            path:"/issues/*",
            Component: Error2,
        },
        {
            path:"/dashboard",
            Component: Dashboard,
        },
    ]
}
])