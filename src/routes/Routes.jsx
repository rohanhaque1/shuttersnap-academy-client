import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../components/Pages/Homepage/Home/Home";
import Errorpage from "../components/Pages/Errorpage/Errorpage";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
import Instructors from "../components/Pages/Others/Instructors/Instructors";
import Classes from "../components/Pages/Others/Classes/Classes";
import Dashboard from "../layout/Dashboard/Dashboard";
import SelectedClasses from "../components/Pages/Others/Dashboard/StudentDashboard/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../components/Pages/Others/Dashboard/StudentDashboard/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../components/Pages/Others/Dashboard/StudentDashboard/PaymentHistory/PaymentHistory";
import PrivateRoutes from "./PrivateRoutes";
import ManageUsers from "../components/Pages/Others/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import ManageClasses from "../components/Pages/Others/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import AdminHome from "../components/Pages/Others/Dashboard/AdminDashboard/AdminHome/AdminHome";
import InstructorHome from "../components/Pages/Others/Dashboard/InstructorDashboard/InstructorHome/InstructorHome";
import AddClass from "../components/Pages/Others/Dashboard/InstructorDashboard/AddClass/AddClass";
import MyClass from "../components/Pages/Others/Dashboard/InstructorDashboard/MyClass/MyClass";
import Modal from "../components/Shared/Modal/Modal";
import Feedback from "../components/Shared/Feedback/Feedback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "selectedclass",
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: "enrolledclass",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manageclass",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "instructorhome",
        element: <InstructorHome></InstructorHome>,
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myclass",
        element: <MyClass></MyClass>,
      },
      {
        path: 'modal/:id',
        element: <Modal></Modal>
      },
      {
        path: 'feedback/:id',
        element: <Feedback></Feedback>
      }
    ],
  },
]);

export default router;