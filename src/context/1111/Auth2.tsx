import axios from "axios";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { SIGNINAPI, SIGNUPAPI } from "@/constants/constants";
// import { AuthContextType, IUserType } from "@/types/IUserType";
 




export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUserType | null>(null);




  const register = async (data: IUserType): Promise<void> => {
    try {
      const response = await axios.post(SIGNUPAPI, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      if (response.status === 200) {
        const { token, ...userData } = response.data;
        // Cookies.set("token", token, { secure: true, sameSite: "strict" });
        sessionStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        console.log("Registration successful!");
      }
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const login = async (
    email: string,
    password: string,
    remember: boolean,
  ): Promise<void> => {
    try {
      const response = await axios.post(
        SIGNINAPI,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        const { token, ...userData } = response.data;
       
        if (remember) {
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(userData));
          Cookies.set("token", token);
          // Cookies.set("remember", "true", { secure: true, sameSite: "strict" });
        } else {
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("user", JSON.stringify(userData));
        }
        setUser(userData);
        // console.log(userData);
        console.log("Login successful!");
        return userData;
      }
      throw new Error("Login failed");
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };



  

  

  return (
    <AuthContext.Provider value={{ user, setUser, register, login, logout ,decodeToken, isTokenValid}}>
      {children}
    </AuthContext.Provider>
  );
};


