import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Error from "../Component/Error";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import Issues from "../Pages/Issues";
import Stuffs from "../Pages/Stuffs";
import Error2 from "../Component/Error2";
import Dashboard from "../Pages/Dashboard/DashboardLayout";
import AddIssue from "../Pages/AddIssue";
import PrivateRoutes from "./PrivateRoutes";
import IssueDetails from "../Component/IssueDetails";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import MyIssues from "../Pages/Dashboard/Citizen/MyIssues";
import ReportIssue from "../Pages/Dashboard/Citizen/ReportIssue";
import Update from "../Component/Update";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/issues",
        loader: () => fetch("https://a11-city-pulse-server.vercel.app/issues"),
        Component: Issues,
      },
      {
        path: "/issueDetails/:id",
        loader: ({ params }) =>
          fetch(`https://a11-city-pulse-server.vercel.app/issues/${params.id}`),
        element: (
          <PrivateRoutes>
            <IssueDetails></IssueDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-issue",
        Component: AddIssue,
      },
      {
        path: "/stuffs",
        Component: Stuffs,
      },
     {
          path:"/update-issue/:id",
          loader: ({params})=>fetch(`https://a11-city-pulse-server.vercel.app/issues/${params.id}`),
          element:<PrivateRoutes><Update></Update></PrivateRoutes>
        },
      {
        path: "/issues/*",
        Component: Error2,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
        { 
            path: "my-issues",
            Component: MyIssues
         },
         {
            path:"report-issue",
            Component:ReportIssue
         }
        ],
  },
]);
