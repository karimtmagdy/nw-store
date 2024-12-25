import { useAuth } from "@/context/AuthContext";
import { House, Shield } from "@/assets/icon/icons";
import { useNavigate } from "react-router";

const SwitchAdmin = () => {
  const nav = useNavigate();
  const { user } = useAuth();
  return (
    <>
      {user?.role === "admin" && location.pathname.includes("admin") ? (
        <button
          className="flex size-6 items-center justify-center rounded-md border"
          onClick={() => nav("/")}
        >
          <House size={16} />
        </button>
      ) : user?.role === "admin" ? (
        <button
          className="flex size-6 items-center justify-center rounded-md border"
          onClick={() => nav("/admin")}
        >
          <Shield size={16} />
        </button>
      ) : null}
    </>
  );
};

export default SwitchAdmin;
