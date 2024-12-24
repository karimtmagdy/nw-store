import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <h1>RootLayout</h1>
      <Outlet />
    </div>
  );
};

export default RootLayout;
