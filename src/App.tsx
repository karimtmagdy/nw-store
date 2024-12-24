 
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter as create,
  RouterProvider,
  useNavigate,
} from "react-router";

function App() {
  const nav = useNavigate();

  const router = create([
    {
      path: "/",
      element: <h1>Home</h1>,
    },
    {
      path: "/about",
      element: <h1>About</h1>,
    },
    {
      path: "/admin",
      element: <h1>Admin</h1>,
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
      <div className="card">
        <button onClick={() => nav("/admin")}>admin</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
