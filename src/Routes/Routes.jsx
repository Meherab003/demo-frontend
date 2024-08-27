import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main/Main";
import SignIn from "../Pages/Authentication/SignIn";
import Registration from "../Pages/Authentication/Registration";
import PrivateRoutes from "./PrivateRoutes";
import CreateAssignment from "../Pages/Assignments/CreateAssignment";
import AllAssignments from "../Pages/Assignments/AllAssignments";
import AssignmentDetails from "../Pages/Assignments/AssignmentDetails";
import MySubmittedAssignments from "../Pages/Assignments/MySubmittedAssignments";
import UpdateAssignment from "../Pages/Assignments/UpdateAssignment";
import PendingAssignmentSubmits from "../Pages/Assignments/PendingAssignmentSubmits";
import ErrorPage from "../Pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/createassignment",
        element: (
          <PrivateRoutes>
            <CreateAssignment></CreateAssignment>
          </PrivateRoutes>
        ),
      },
      {
        path: "/assignments",
        element: <AllAssignments />,
      },
      {
        path: "/assignment/:id",
        element: (
          <PrivateRoutes>
            <AssignmentDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/assignment/${params.id}`),
      },
      {
        path: '/submitted_assignment',
        element: <PrivateRoutes><MySubmittedAssignments /></PrivateRoutes>
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateAssignment />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/assignment/${params.id}`),
      },
      {
        path: '/pending_assignments',
        element: <PrivateRoutes><PendingAssignmentSubmits /></PrivateRoutes>
      }
    ],
  },
]);

export default router;
