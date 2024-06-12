import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "./redux/thunk/authThunks";
import RouterLayout from "./components/layouts/RouterLayout";
import UserLayout from "./components/layouts/UserLayout";
import AdminLayout from "./components/layouts/AdminLayout";
import EmployerLayout from "./components/layouts/EmployerLayout";
import Register from "./components/user/Regitser";
import Loging from "./components/Login";
import Employers from "./components/layouts/Employers";
import Candidates from "./components/layouts/Candidates";
import Packages from "./components/layouts/Packages";
import Pages from "./Pages";
import Home from './components/Home'
import Jobs from './Jobs'
import Postingnewjob from './components/user/Postingnewjob'
import Mainpage from "./components/Mainpage";
import SignInSignOut from "./components/layouts/SignInSignOut";

export default function App() {
  const user = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifyUser());
  }, []);
  let fireSwal = (title, text, is) => {
    Swal.fire({
      title,
      text,
      icon: is ? "success" : "error",
    });
  };

  useEffect(() => {
    console.log("jatin", user);
  }, [user]);
  let router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
          children: [],
        },
        {
          path: "jobs",
          element: <Jobs />,
          children: [],
        },
        {
          path: "Employer",
          element: <Employers />,
          children: [],
        },
        {
          path: "candidate",
          element: <Candidates />,
          children: [],
        },
        {
          path: "packages",
          element: <Packages />,
          children: [],
        },
        {
          path: "pages",
          element: <Pages />,
          children: [],
        },
        {
          path: "",
          element: <UserLayout />,
          children: [],
        },
        {
          path: "employer",
          element: <EmployerLayout />,
          children: [],
        },
        {
          path: "admin",
          element: <AdminLayout />,
          children: [],
        },

        {
          path: "register",
          element: <Register />,
          children: [],
        },
        {
          path: "loging",
          element: <Loging />,
          children: [

          ]
        },
        {
          path: 'PostingNewjob',
          element: <Postingnewjob />,
          children: [

          ]
        },
        {
          path: 'mainPage',
          element: <Mainpage />,
          children: [

          ]
        },
        {
          path: 'signinsignout',
          element: <SignInSignOut />,
          children : [
            
          ]
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
