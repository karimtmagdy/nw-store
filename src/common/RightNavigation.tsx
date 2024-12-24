import { useLocation } from "react-router";
import { useTheme } from "@/context/ThemeContext";
import { Bell, Heart, Moon, ShoppingBag, Sun } from "@/assets/icon/icons";
import SwitchAdmin from "./SwitchAdmin";
import UserDropInfo from "./UserDropInfo";

const RightNavigation = () => {
  const location = useLocation();
  const { isDarkMode, toggleMode } = useTheme();

  return (
    <nav className="relative z-50 h-9 items-center rounded-lg border px-2 py-1">
      <div className="flex h-full items-center gap-x-1">
        {location.pathname.includes("admin") ? null : (
          <>
            <button className="flex size-6 items-center justify-center rounded-lg border">
              <ShoppingBag size={16} />
            </button>
            <button className="flex size-6 items-center justify-center rounded-lg border">
              <Heart size={16} />
            </button>
            <button className="flex size-6 items-center justify-center rounded-lg border">
              <Bell size={16} />
            </button>
          </>
        )}
        <button
          className="flex size-6 items-center justify-center rounded-lg border"
          onClick={toggleMode}
        >
          {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
        </button>
        <SwitchAdmin />
        <UserDropInfo />
      </div>
    </nav>
  );
};

export default RightNavigation;
