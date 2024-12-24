import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter as create,
  RouterProvider,
  useNavigate,
} from "react-router";
import RootLayout from "./layout/RootLayout";
import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";
import AuthFormLayout from "./layout/AuthFormLayout";
import AuthRegister from "./pages/authentication/AuthRegister";

function App() {
  const nav = useNavigate();

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
  return (
    <>
      <RouterProvider router={router} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
