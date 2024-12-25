import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
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
  signIn?: (email: string, password: string) => Promise<void>;
  signOut?: () => void;
  isAuthenticated: boolean;
  decodeToken: () => IUserType | null; // إضافة وظيفة فك تشفير التوكن
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUserType | null>(null);
  const [token, setToken] = useState<string | null>(null);
   
  useEffect(() => {
    const storedToken = localStorage.getItem("token") || Cookies.get("token");
    if (storedToken) {
      const decodedUser = decodeToken(storedToken);
      if (decodedUser && !isTokenExpired(decodedUser)) {
        setUser(decodedUser);
        setToken(storedToken);
       } else {
        signOut();
      }
    }
  }, []);

  const decodeToken = (tokenToDecode: string): IUserType | null => {
    try {
      return jwtDecode<IUserType>(tokenToDecode);
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  const isTokenExpired = (decodedToken: IUserType) => {
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  };

  const signIn = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/auth/sign-in', { email, password });
      const { token } = response.data;

      const decodedUser = decodeToken(token);
      if (!decodedUser || isTokenExpired(decodedUser)) {
        console.error("Invalid or expired token");
        return;
      }

      setUser(decodedUser);
      setToken(token);
      localStorage.setItem("token", token);
      Cookies.set("token", token, { expires: 7 });

     } catch (error) {
      console.error("Login error:", error);
    }
  };

  const signOut = async () => {
    try {
      if (token) {
        await axios.post(SIGNOUTAPI, {}, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
      Cookies.remove("token");
     }
  };

 

  const value = {
    user,
    isAuthenticated: !!user,
    signIn,
    signOut,
    decodeToken: () => token ? decodeToken(token) : null,
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

