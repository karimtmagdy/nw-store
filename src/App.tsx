import "./App.css";
import { createBrowserRouter as create, RouterProvider } from "react-router";
import RootLayout from "./layout/RootLayout";
import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";
import AuthFormLayout from "./layout/AuthFormLayout";
import AuthRegister from "./pages/authentication/AuthRegister";

function App() {
  const router = create([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/auth",
          element: <AuthFormLayout />,
          children: [
            { path: "/auth/sign-in", element: <div>login</div> },
            { path: "/auth/sign-up", element: <div>register</div> },
            { path: "/register", element: <AuthRegister /> },
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
