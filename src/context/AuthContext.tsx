import {
  createContext,
  PropsWithChildren,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import axios from "axios";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { removeCookie, getCookie, setCookie } from "@/utility/cookie";
import { SIGNINAPI, SIGNOUTAPI } from "@/services/api";
type Gender = "male" | "female";
type Role = "user" | "admin" | "super-admin" | "moderator" | "manager";
export type IUserType = {
  exp: number;
  _id?: string;
  username?: string;
  email: string;
  password: string;
  display_name?: string;
  gender?: Gender;
  phone_number?: string;
  confirm_password: string;
  role?: Role;
  active?: boolean;
  slug?: string;
  status?: "online" | "offline";
  joinedAt?: string;
  photo_avatar?: { url: string };
  updatedAt?: string;
  remember_me?: boolean;
  [key: string]: any;
};
export type AuthContextType = {
  user?: IUserType | null;
  token?: string | null;
  signUp?: () => Promise<void>;
  signIn?: (email: string, password: string) => Promise<void>;
  signOut?: () => void | Promise<void> | undefined;
  isAuthenticated: boolean;
  decodeToken?: (token: string) => JwtPayload | null;
  // isTokenValid: (token: string) => boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUserType | null>(null);
  const [token, setToken] = useState<string | null>(null);
  useLayoutEffect(() => {
    const storedToken = localStorage.getItem("token") || getCookie("token");
    if (storedToken) {
      try {
        const decodedUser = jwtDecode<IUserType>(storedToken);
        if (!isTokenExpired(decodedUser)) {
          setUser(decodedUser);
          setToken(storedToken);
        } else {
          signOut();
        }
      } catch (error) {
        console.error("Invalid token:", error);
        signOut();
      }
    }
  }, []);
  const signUp = async () => {};

  const signIn = async (email: string, password: string) => {
    try {
      const response = await axios.post(`http://localhost:8000${SIGNINAPI}`, {
        email,
        password,
      });
      const { token } = response.data;

      const decodedUser = jwtDecode<IUserType>(token);
      console.log(decodedUser.userId, "decodedUser");
      if (isTokenExpired(decodedUser)) {
        console.error("Token expired. Please login again.");
        return;
      }

      setUser(decodedUser);
      setToken(token);
      localStorage.setItem("token", token);
      setCookie("token", token, { expires: 7 });
    } catch (error) {
      console.error("Login error:", error);
    }
    setToken(token);
  };
  const isTokenExpired = (decodedToken: IUserType) => {
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  };
  const signOut = async () => {
    try {
      const token = localStorage.getItem("token") || getCookie("token");
      if (!token) {
        console.error("No token found");
        return;
      }
      const response = await axios.post(
        `http://localhost:8000${SIGNOUTAPI}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.status === 200) {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
        removeCookie("token");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const value = {
    user: { ...user?.userId } as IUserType | null,
    isAuthenticated: !user,
    // isAuthenticated: !!user,
    token,
    // setUser,
    // setToken,
    signUp,
    signIn,
    signOut,
    decodeToken: (token: string) => jwtDecode(token),
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
