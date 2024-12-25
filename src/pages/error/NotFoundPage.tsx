import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <section className="fixed inset-0 flex flex-col items-center justify-center bg-white font-outfit text-black dark:bg-black dark:text-white">
      <div className="space-y-2 p-4">
        <small className="select-none rounded-lg bg-zinc-300 px-2 py-1 dark:bg-zinc-900/80 dark:text-zinc-300">
          Oops!
        </small>
        <h6 className="text-3xl font-medium">Page not found</h6>
        <p className="">It seems the page you're looking for doesn't exist.</p>
        <div className="space-x-2">
          <span className="w-fit text-3xl font-bold uppercase text-red-600 dark:text-red-800">
            error
          </span>
          <span className="w-fit text-3xl font-bold uppercase dark:text-white">
            404
          </span>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="rounded-lg bg-black px-2 py-1 font-medium capitalize text-white transition-colors hover:bg-black/80 dark:bg-white dark:text-black hover:dark:bg-white/90"
        >
          go back
        </button>
      </div>
    </section>
  );
};

export default NotFoundPage;
