import { useAuth } from "@/context/AuthContext";
// import OnOff from "@/common/OnOff";

const UserInfo = () => {
  const { user } = useAuth();
  const {
    display_name,
    email,
    role,
    photo_avatar: photo,
    username,
  } = user || {};
  return (
    <article className="relative flex h-12 select-none items-center gap-x-1 rounded-lg border px-2 py-1">
      <div className="img relative shrink-0 rounded-lg border">
        <span className="absolute -right-0.5 -top-0.5 flex h-2 w-2 items-center justify-center rounded-full bg-primary-700" />
        <img
          src={photo?.url}
          alt={`avatar-${role}-${username}`}
          className="h-9 w-9 rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col font-outfit font-medium lowercase leading-4">
        <strong className="text-sm text-zinc-700 dark:text-zinc-500">
          {display_name}
        </strong>
        <span className="text-xs text-zinc-500 dark:text-zinc-400">
          {email}
        </span>
      </div>
      <small className="absolute right-1 top-1 flex h-5 items-center self-end rounded-md bg-zinc-200 px-1 text-xxs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
        {role}
      </small>
    </article>
  );
};

export default UserInfo;
