import Navbar from "@/components/user/Navbar";
import UserHeader from "@/components/user/UserHeader";
import { Outlet } from "react-router";

const UserLayout = () => {
  return (
    <>
      <UserHeader />
      <Navbar />
      <Outlet />
    </>
  );
};

export default UserLayout;
