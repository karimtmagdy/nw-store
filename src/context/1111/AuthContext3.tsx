import {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
  PropsWithChildren,
} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { SIGNINAPI, SIGNOUTAPI, SIGNUPAPI } from "@/services/api";
import { AuthContextType, IUserType } from "@/types/IUserType";

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUserType | null>(null);
  const [token, setToken] = useState<string | null>(null);
  // تحميل بيانات المستخدم عند بدء التطبيق
  useLayoutEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = Cookies.get("token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  const register = async (
    username: string,
    email: string,
    password: string,
  ) => {
    const response = await axios.post(SIGNUPAPI, { username, email, password });
    const { token, user } = response.data;
    // تخزين التوكن والبيانات
    Cookies.set("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    setToken(token);
  };

  const login = async (
    email?: string,
    password?: string,
    remember_me?: boolean,
  ) => {
    const response = await axios.post(SIGNINAPI, {
      email,
      password,
    });
    const { token, user } = response.data;

    if (remember_me) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      Cookies.set("token", token, {
        secure: true,
        sameSite: "strict",
        expires: 7 * 24 * 60 * 60,
      });
    } else {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(user));
    }
    // تخزين التوكن والبيانات

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    Cookies.set("token", token, {
      secure: true,
      sameSite: "strict",
      expires: 7 * 24 * 60 * 60,
    });
    setUser(user);
    setToken(token);
    if (user.role === "admin") {
      window.location.pathname = "/admin";
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, token, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};
