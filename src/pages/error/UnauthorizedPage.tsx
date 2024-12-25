import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";

const UnauthorizedPage = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <section className="fixed inset-0 flex select-none flex-col items-center justify-center bg-white font-outfit text-black dark:bg-black dark:text-white">
      <div className="flex flex-col">
        <h6 className="text-6xl font-extrabold text-black dark:text-white">
          Unauthorized
        </h6>
        <p className="text-3xl text-zinc-600 dark:text-zinc-300">
          you are not unthorized to view this page.
        </p>
        <p className="mt-2 flex items-center gap-x-2 text-lg font-medium text-zinc-400 dark:text-zinc-400">
          You’ll be redirected to the homepage in 5 seconds...
          <span className="flex size-8 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-900">
            {countdown}
          </span>
        </p>
      </div>
    </section>
  );
};

export default UnauthorizedPage;
