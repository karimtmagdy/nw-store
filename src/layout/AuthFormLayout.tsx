import { Lightbulb } from "@/assets/icon/icons";
import { useTheme } from "@/context/ThemeContext";
import { Outlet, useLocation } from "react-router";

const AuthFormLayout = () => {
  const { isDarkMode, toggleMode } = useTheme();
  const { pathname } = useLocation();
  const title: string = pathname === "/auth/sign-in" ? "Login" : "Register";
  const message = pathname.includes("sign-in")
    ? "Welcome back!"
    : "Join us today!";
  return (
    <section className="relative flex min-h-dvh w-full overflow-hidden">
      <div className="flex w-full items-center justify-center lg:w-1/2">
        <div className="flex h-full w-full items-center justify-center p-4">
          <div className="flex h-2/3 w-full flex-col justify-center gap-y-2 rounded-lg p-4 *:rounded-xl *:border *:p-4 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-2/3 2xl:w-2/3">
            <Outlet context={{ title }} />
          </div>
        </div>
      </div>
      <div className="hidden grow items-center justify-center lg:flex">
        {message}
      </div>

      <button className="absolute right-4 top-0" onClick={toggleMode}>
        <Lightbulb
          className={`rotate-180 ${isDarkMode ? "text-yellow-300" : ""}`}
        />
      </button>
    </section>
  );
};

export default AuthFormLayout;
