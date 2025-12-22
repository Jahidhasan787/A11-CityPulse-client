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
import BecomeStaff from "../Pages/BecomeStaff";
import PrivateRoutes from "./PrivateRoutes";
import IssueDetails from "../Component/IssueDetails";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import MyIssues from "../Pages/Dashboard/Citizen/MyIssues";
import ReportIssue from "../Pages/Dashboard/Citizen/ReportIssue";
import Update from "../Component/Update";
import Payment from "../Component/Payment";
import PaymentSuccess from "../Component/PaymentSuccess";
import PaymentCancel from "../Component/PaymentCancel";
import PaymentsHistory from "../Pages/Dashboard/Admin/PaymentsHistory";
import ApproveStaff from "../Pages/Dashboard/Admin/ApproveStaff";
import UsersManage from "../Pages/Dashboard/Admin/UsersManage";
import AdminRoutes from "./AdminRoutes";

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
        path: "/become-staff",
       element: (
          <PrivateRoutes>
            <BecomeStaff></BecomeStaff>
          </PrivateRoutes>)
      },
      {
        path: "/staffs",
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
         },
         {
            path:"payment/:id",
            Component: Payment,
         },
         {
            path:"payment-history",
            element:<AdminRoutes><PaymentsHistory></PaymentsHistory></AdminRoutes>,
         },
         {
            path:"payment-success",
            Component: PaymentSuccess,
         },
         {
            path:"payment-cancelled",
            Component: PaymentCancel,
         },
         {
            path:"approve-staff",  
            element:<AdminRoutes><ApproveStaff></ApproveStaff></AdminRoutes>,
         },
         {
            path:"user-manage",  
            element:<AdminRoutes><UsersManage></UsersManage></AdminRoutes>,
         },
        ],
  },
]);
