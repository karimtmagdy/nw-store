import "./App.css";
import { createBrowserRouter as create, RouterProvider } from "react-router";
import RootLayout from "./layout/RootLayout";
import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";
import AuthFormLayout from "./layout/AuthFormLayout";
import AuthRegister from "./pages/authentication/AuthRegister";
import AuthLogin from "./pages/authentication/AuthLogin";
import ForbaddenPage from "./pages/error/ForbaddenPage";
import NotFoundPage from "./pages/error/NotFoundPage";

function App() {
  const router = create([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "*", element: <NotFoundPage /> },
        { path: "/forbidden", element: <ForbaddenPage /> },
        {
          path: "/auth",
          element: <AuthFormLayout />,
          children: [
            { path: "/auth/sign-in", element: <AuthLogin /> },
            { path: "/auth/sign-up", element: <AuthRegister /> },
          ],
        },
        { path: "/", element: <UserLayout /> },
        { path: "/admin", element: <AdminLayout /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
