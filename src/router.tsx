import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/login/page.tsx";
import SignUp from "./pages/auth/sign-up/page.tsx";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <SignUp />,
      },
    ],
  },
]);
