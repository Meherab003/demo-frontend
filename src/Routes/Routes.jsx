import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main/Main";
import SignIn from "../Pages/Authentication/SignIn";
import Registration from "../Pages/Authentication/Registration";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path: '/signin',
          element: <SignIn />
        },
        {
          path: '/register',
          element: <Registration />
        }
      ]
    },
  ]);

  export default router;