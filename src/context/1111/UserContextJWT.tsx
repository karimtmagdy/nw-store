import axios from "axios";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from "react";
import { SIGNINAPI, SIGNUPAPI } from "@/constants/constants";
import { AuthContextType, IUserType } from "@/types/IUserType";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

// تعريف نوع البيانات للـ JWT payload
interface JwtPayload {
  userId: string;
  email: string;
  role: string;
  // أضف أي حقول إضافية موجودة في الـ token الخاص بك
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUserType | null>(null);

  useEffect(() => {
    // محاولة استرداد الـ token عند تحميل التطبيق
    const token =
      localStorage.getItem("token") ||
      sessionStorage.getItem("token") ||
      Cookies.get("token");
    if (token) {
      try {
        const decodedToken = jwtDecode<JwtPayload>(token);
        setUser({
          id: decodedToken.userId,
          email: decodedToken.email,
          role: decodedToken.role,
          // أضف أي حقول إضافية هنا
        });
      } catch (error) {
        console.error("Error decoding token:", error);
        logout(); // قم بتسجيل الخروج إذا كان الـ token غير صالح
      }
    }
  }, []);

  const register = async (data: IUserType): Promise<void> => {
    try {
      const response = await axios.post(SIGNUPAPI, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const { token } = response.data;
        handleAuthentication(token, false);
      }
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const login = async (data: IUserType, remember: boolean): Promise<void> => {
    try {
      const response = await axios.post(SIGNINAPI, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const { token } = response.data;
        handleAuthentication(token, remember);
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const handleAuthentication = (token: string, remember: boolean) => {
    try {
      const decodedToken = jwtDecode<JwtPayload>(token);
      const userData: IUserType = {
        id: decodedToken.userId,
        email: decodedToken.email,
        role: decodedToken.role,
        // أضف أي حقول إضافية هنا
      };

      setUser(userData);

      if (remember) {
        localStorage.setItem("token", token);
        Cookies.set("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }

      console.log("Authentication successful!");
    } catch (error) {
      console.error("Error decoding token:", error);
      throw error;
    }
  };

  const logout = (): void => {
    setUser(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    Cookies.remove("token");
    console.log("User logged out.");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
