import { useAuth } from "@/context/AuthContext";

const HomePage = () => {
  const { user } = useAuth();
  console.log(user);
  if (!user) {
    return <div>يرجى تسجيل الدخول لعرض الملف الشخصي</div>;
  }

  return (
    <div>
      <h1>HomePage</h1>
      <h1>Slider</h1>
      <p className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow">
        {user.username}
      </p>
    </div>
  );
};

export default HomePage;
