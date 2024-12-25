import { useNavigate } from "react-router";

const ForbiddenPage = () => {
  const navigate = useNavigate();
  return (
    <section className="fixed inset-0 flex select-none flex-col items-center justify-center bg-white font-outfit text-black dark:bg-black dark:text-white">
      <div className="flex flex-col items-center justify-center p-4 leading-loose">
        <h1 className="text-9xl font-bold leading-none">403</h1>
        {/* <h2>Restricted Access Denied</h2> */}
        <h2 className="text-2xl">Access Denied</h2>
        <p>You lack permissions to access this page</p>
        <span className="text-6xl font-bold">Forbidden</span>
        <button
          onClick={() => navigate("/")}
          className="rounded-lg bg-zinc-100 px-4 py-1 uppercase text-black hover:bg-zinc-200 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
        >
          back home
        </button>
      </div>
    </section>
  );
};

export default ForbiddenPage;
