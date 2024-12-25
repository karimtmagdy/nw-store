import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios, { AxiosError } from "axios";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { SIGNINAPI, SIGNUPAPI } from "@/constants/constants";

export interface AuthContextType {
  register: (data: IUserType) => Promise<void>;

  decodeToken: (token: string) => JwtPayload | null;
  isTokenValid: (token: string) => boolean;
}

export interface JwtPayload {
  exp: number;
  username: string;
  userId: string;
  email: string;
  password: string;
  role: string;
  iat: number;

}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUserType | null>(null);
  const decodeToken = (token: string): JwtPayload | null => {
    try {
      return jwtDecode(token) as JwtPayload;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  const isTokenValid = (token: string): boolean => {
    const decodedToken = decodeToken(token);
    if (!decodedToken) return false;
    const currentTime = Date.now() / 1000;
    return decodedToken.exp > currentTime;
  };
  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token && isTokenValid(token)) {
      const decodedToken = decodeToken(token);
      if (decodedToken) {
        setUser({
          _id: decodedToken.userId,
          username: decodedToken.username,
          email: decodedToken.email,
          password: decodedToken.password,
          display_name: decodedToken.display_name,
          // role: decodedToken.role,
        });
      }
    }
  }, []);

  // register function
  const register = async () => {};
  // login function
  const login = async (email: string, password: string): Promise<void> => {
    try {
      const response = await axios.post(
        SIGNINAPI,
        { email, password },
       
      );
      if (response.status === 200) {
        const { token, ...userData } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        if (response.data.remember) {
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(userData));
          Cookies.set("token", token);
        } else {
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("user", JSON.stringify(userData));
        }
        setUser(userData);
        console.log("Login successful!");
        return userData;
      }

    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        register,
        login,
    
        decodeToken,
        isTokenValid,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
