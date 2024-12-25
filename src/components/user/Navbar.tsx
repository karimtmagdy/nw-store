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
        "http://localhost:8000/api/v1/categories",
        // "https://nw-express.vercel.app/api/v1/categories",
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
    <nav className="h-10 w-full overflow-hidden border-b">
      <ul className="flex h-full snap-x snap-mandatory items-center gap-x-1 overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden lg:[&::-webkit-scrollbar]:flex lg:[&::-webkit-scrollbar]:h-1">
        {categories.map(({ name, _id, slug }) => {
          return (
            <li key={_id} className="flex-shrink-0 snap-center">
              <Link
                className="text-nowrap rounded bg-gray-300 px-3 py-1 text-base font-medium text-zinc-800 hover:bg-gray-400 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white"
                to={`/categories/${_id}-${slug}`}
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
