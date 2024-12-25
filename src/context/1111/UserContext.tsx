// import axios from "axios";
import { SIGNINAPI } from "@/services/api";
import axios, { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";

import {
  createContext,
  PropsWithChildren,
  useContext,
  // useLayoutEffect,
  useState,
} from "react";

export type UserContextType = {
  logout: () => void  
  // register: (data: IUserType) => Promise<void>;
  user: IUserType | null;
  login: (email: string, password: string) => Promise<void>; //  remember: boolean
  // token?: string;
  userData?: any;
  setUser: React.Dispatch<React.SetStateAction<IUserType | null>>;
  setUserData?: any;
  saveUserData?: any;
  // decodeToken: (token: string) => JwtPayload | null;
  // isTokenValid: (token: string) => boolean;
};

export type IUserType = {
  _id?: string;
  username?: string;
  email: string;
  password: string;
  display_name?: string;
  profile_image?: string;
  token?: string;
  role?: ("user" | "admin" | "super-admin" | "moderator" | "manager")[];
  remember?: boolean;
  joined?: string;
  updatedAt?: string;
  active?: boolean;
};
export const UserContext = createContext<UserContextType>(
  {} as UserContextType,
);

export const UserProvider = ({ children }: PropsWithChildren) => {
  // const [token, setToken] = useState(null);
  const [user, setUser] = useState<IUserType | null>(null);
  // const saveUserData = () => {
  //   if (localStorage.getItem("token") !== null) {
  //     const encodedToken = localStorage.getItem("token");
  //     const decodedToken = jwtDecode(encodedToken || "");
  //     return decodedToken;
  //   }
  // };
  const [userData, setUserData] = useState(() => {
    // const token = localStorage.getItem("token");
    const encodedToken = localStorage.getItem("token");
    if (encodedToken !== null) {
      try {
        return jwtDecode(encodedToken); //  extract user data
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token"); // remove invalid token
      }
    }
    return null; // if token is null
  });
  const saveUserData = (encodedToken: string) => {
    if (encodedToken) {
      localStorage.setItem("token", encodedToken); //  save token
      const decodedToken = jwtDecode(encodedToken); // extract user data
      setUserData(decodedToken); // save user data
      console.log(decodedToken);
    } // else { console.error("Token is null or undefined.") }
  };

  // const register = async (username: string, email: string, password: string, confirm_password: string) => {};

  const login = async (email: string, password: string) => {
    try {
      const { data } = await axios.post(
        SIGNINAPI,
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      if (data.status === "success") {
        setUser({
          email: data.user.email,
          password: data.user.password,
        });
      }
      throw new Error("Login failed");
    } catch (error) {
      if (error instanceof axios.AxiosError) {
        const axiosError = error as AxiosError<unknown>;
        console.log(axiosError.response?.data);
        console.error("Registration error:", error);
        throw error;
        // return error
      }
      console.error("Login error:", error);
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setUserData(null);

    // sessionStorage.removeItem("token");
    // console.log("User logged out.");
    // Cookies.remove("token");
    // Cookies.withAttributes({ secure: true, sameSite: "strict" }).remove("token");
  };
  const value = {
    user,
    setUser,
    login,
    logout,
    userData,
    saveUserData,
    setUserData,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export const useAuth = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
//   ,
