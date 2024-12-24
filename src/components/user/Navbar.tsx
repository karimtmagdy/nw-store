import { ICategory } from "@/types/ICategoryType";
import axios from "axios";
import { useCallback, useLayoutEffect, useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  // استخدام useCallback لتثبيت الدالة
  const fetchCategories = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://nw-express.vercel.app/api/v1/categories",
      );
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }, []); // بدون أي تغييرات حتى لا يتم إعادة الإنشاء

  useLayoutEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  return (
    <nav className="flex h-9 items-center gap-x-1 border-b">
      <ul className="flex h-full items-center gap-x-1">
        {categories.map(({ name, _id }) => {
          return (
            <li key={_id}>
              <Link
                className="h-5 rounded bg-gray-300 px-3 py-1 text-base font-medium text-zinc-800 hover:bg-gray-400 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white"
                to={`/categories/${_id}`}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
