import { CircleUser, Settings, ShieldCheck } from "@/assets/icon/icons";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import UserInfo from "./UserInfo";
import AuthSignOut from "@/pages/authentication/AuthSignOut";

// import Button from "../ui/Button";

const menu = [
  { url: "/account/profile", name: "profile", icon: CircleUser },
  { url: "/account/settings", name: "settings", icon: Settings },
  { url: "/privacy-and-policy", name: "privacy & policy", icon: ShieldCheck },
];
const UserDropInfo = () => {
  const nav = useNavigate();
  const { user } = useAuth();
  const { role, username, photo_avatar: photo } = user || {};
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);

  const toggleOpenMenu = () => {
    if (setCheck) {
      setCheck((prev) => !prev);
    }
    if (setOpen) {
      setOpen((prev) => !prev);
    }
  };
  return (
    <>
      {user ? (
        <>
          <button
            onClick={toggleOpenMenu}
            className="overflow-hidden rounded-full border"
          >
            <img
              src={photo?.url}
              alt={`avatar-${role}-${username}`}
              className="h-7 w-7 rounded-full"
            />
          </button>
          {open && (
            <div className="absolute right-0 top-10 mt-1 w-52 space-y-1 rounded-md border bg-white p-1 shadow dark:bg-zinc-900 dark:shadow-zinc-800">
              <UserInfo />
              <ul>
                {menu.map(({ icon: Icon, name, url }, i) => (
                  <li key={i}>
                    <Link
                      to={url}
                      className="flex h-7 items-center gap-x-2 rounded-md px-2 py-1 !text-xs text-gray-700 hover:bg-gray-100 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                    >
                      <Icon size={16} />
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
              <AuthSignOut />
            </div>
          )}
        </>
      ) : (
        <>
          <button
            onClick={toggleOpenMenu}
            className="flex size-6 items-center justify-center rounded-lg border"
          >
            <CircleUser size={16} />
          </button>
          {check && (
            <ol className="absolute right-0 top-10 mt-1 flex w-52 flex-col gap-y-1 rounded-lg border bg-white p-1 *:overflow-hidden *:rounded-lg dark:bg-black">
              <button
                className="bg-black text-white hover:bg-black/[0.8] active:bg-black dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:active:bg-zinc-950"
                onClick={() => nav("/auth/sign-in")}
              >
                login
              </button>
              <button
                className="bg-black text-white hover:bg-black/[0.8] active:bg-black dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:active:bg-zinc-950"
                onClick={() => nav("/auth/sign-up")}
              >
                register
              </button>
            </ol>
          )}
        </>
      )}
    </>
  );
};
export default UserDropInfo;
