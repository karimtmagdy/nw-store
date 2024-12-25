import { useAuth } from "@/context/AuthContext";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router";

const AuthSignOut = () => {
  const { signOut } = useAuth();
  const nav = useNavigate();
  const handleOut = () => {
    nav("/" );
 if(signOut) signOut();
  };
  return (
    <button
      onClick={handleOut}
      className="flex h-7 w-full items-center gap-x-2 rounded-md px-2 py-1 !text-xs text-gray-700 hover:bg-gray-100 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
    >
      <LogOut size={16} /> sign out
    </button>
  );
};

export default AuthSignOut;
