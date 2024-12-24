type Gender = "male" | "female";

type Role = "user" | "admin" | "super-admin" | "moderator" | "manager";

export type IUserType = {
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
  setUser?: React.Dispatch<React.SetStateAction<IUserType | null>>;
  setToken?: React.Dispatch<React.SetStateAction<string | null>>;
  register?: (data: IUserType) => Promise<void>;
  login?: (data: IUserType) => Promise<void>;
  logout?: () => void;
};
