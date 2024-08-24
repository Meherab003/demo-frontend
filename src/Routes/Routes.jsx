import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main/Main";
import SignIn from "../Pages/Authentication/SignIn";
import Registration from "../Pages/Authentication/Registration";
import PrivateRoutes from "./PrivateRoutes";
import CreateAssignment from "../Pages/Assignments/CreateAssignment";
import AllAssignments from "../Pages/Assignments/AllAssignments";
import AssignmentDetails from "../Pages/Assignments/AssignmentDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
    ],
  },
]);

export default router;
