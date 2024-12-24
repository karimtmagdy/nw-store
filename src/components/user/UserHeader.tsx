import Logo from "@/common/Logo";
import RightNavigation from "@/common/RightNavigation";

const UserHeader = () => {
  return (
    <header className="h-12 border-b bg-white dark:bg-zinc-900">
      <div className="container flex h-full w-full items-center justify-between">
        <Logo />
        <RightNavigation />
      </div>
    </header>
  );
};

export default UserHeader;
