 // import { api } from "@/config/axiosConfig";
 

// import { removeCookie, setCookie } from "@/utility/cookie";
// import { SIGNINAPI, SIGNOUTAPI, SIGNUPAPI } from "@/services/api";
// import { AuthContextType, IUserType } from "@/types/IUserType";

// export const AuthContext = createContext<AuthContextType | undefined>(
//   undefined,
// );
// export const AuthProvider = ({ children }: PropsWithChildren) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState<string | null>(null);

//   useLayoutEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     const storedToken = localStorage.getItem("token");
//     if (storedUser && storedToken) {
//       setUser(JSON.parse(storedUser));
//       setToken(storedToken);
//     }
//   }, []);

//   const register = async (data: IUserType) => {
//     const response = await axios.post(SIGNUPAPI, data);
//     const { token, user } = response.data;
//     // تخزين التوكن والبيانات
//     setCookie("token", token, { secure: true, sameSite: "strict" });
//     sessionStorage.setItem("user", JSON.stringify(user));
//     sessionStorage.setItem("token", token);
//     // setTokenApi(token);
//     setUser(user);
//     setToken(token);
//   };
//   const login = async (data: IUserType) => {
//     const response = await axios.post(SIGNINAPI, data);
//     const { token, user } = response.data;
//     // تخزين التوكن والبيانات
//     setCookie("token", token, {
//       secure: true,
//       sameSite: "strict",
//       expires: 7 * 24 * 60 * 60,
//     });
//     localStorage.setItem("user", JSON.stringify(user));
//     localStorage.setItem("token", token);
//     // setTokenApi(token);
//     setUser(user);
//     setToken(token);
//   };
 
//   return (
//     <AuthContext.Provider
//       value={{ user, token, setToken, register, login,   }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

 