import { CATEGORIESAPI, PRODUCTSAPI } from "@/services/api";
import { ICategory, stateCategoryType } from "@/types/ICategoryType";
import axios, { AxiosError } from "axios";

import {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
  PropsWithChildren,
} from "react";
import { useAuth } from "@/context/AuthContexted";
import { IProduct } from "@/types/IProductType";

type ProductContextType = {
  products: IProduct[];
  setProducts: any;
  fetchProducts: any;
  loading: boolean;
  error: string | null;
  currentPage?: number;
  totalPages?: number;
  handlePageChange?: (newPage: number) => void;
  setCurrentPage?: any;
  setError?: React.Dispatch<React.SetStateAction<string | null>>;
  categories: ICategory[];
  setCategories: React.Dispatch<React.SetStateAction<ICategory[] | undefined>>;
  fetchCategory: any;
  handleChangeProduct?: any;
  createProduct?: any;
};

export const ProductContext = createContext<ProductContextType | undefined>(
  {} as ProductContextType,
);
export const ProductProvider = ({ children }: PropsWithChildren) => {
  const { user } = useAuth();
  // const { id } = useParams<{ id: string | undefined }>();
  // eslint-disable-next-line no-constant-binary-expression
  const [products, setProducts] = useState<IProduct[]>([] || {
      title: "",
      description: "",
      price: "",
      stock: "",
      category: "",
      createdBy: user?._id || "",
  } as unknown as IProduct);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0 as number);
  const fetchProducts = async (page: number) => {
    setLoading(true);
    try {
      const response = await axios.get(`${PRODUCTSAPI}`, {
        params: {
          page: currentPage,
          limit: 10,
        },
      });

      setProducts(response.data.products);
      const totalItems = response.data.results;
      setTotalPages(Math.ceil(totalItems / 10));
      setCurrentPage(page);
    } catch (error: AxiosError | any) {
      if (axios.isAxiosError(error) || error instanceof AxiosError) {
        setError(error.response?.data?.message || error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  //   const fetchSingleProduct = async (id: string) => {};
  //   // const fetchProductsByCategory = async (id: string) => {}

  const createProduct = async (
    post: Omit<IProduct, "createdBy"> & { createdBy: string },
  ) => {
    try {
      if (!user) throw new Error("User not authenticated");
      const response = await axios.post(`${PRODUCTSAPI}`, post);
      //   setProducts((prev) => [...prev, response.data]);
      setProducts(response.data);
    } catch (error: AxiosError | any) {
      if (axios.isAxiosError(error) || error instanceof AxiosError) {
        setError(error.response?.data?.message || error.message);
      }
    }
  };

  const handleChangeProduct = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    try {
      setProducts({ ...products, [e.target.name]: e.target.value });
    } catch (error) {
      if (axios.isAxiosError(error) || error instanceof AxiosError) {
        setError(error.response?.data?.message || error.message);
      }
      console.log(error);
    }
  };
  //   const changeProduct = async (post: IProduct) => {
  //     try {
  //       const response = await axios.put(`${PRODUCTSAPI}/${post._id}`, post);
  //       setProducts((prev) => [...prev, response.data]);

  //       const { data } = await axios.get(`${CATEGORIESAPI}`);
  //       setCategories(data.categories);
  //       //   return response.data;
  //     } catch (error: AxiosError | any) {
  //       if (axios.isAxiosError(error) || error instanceof AxiosError) {
  //         setError(error.response?.data?.message || error.message);
  //       }
  //     }
  //   };
  const fetchCategory = async () => {
    try {
      const response = await axios.get<any>(`${CATEGORIESAPI}`);
      setCategories(response.data.categories);
    } catch (error: AxiosError | any) {
      if (axios.isAxiosError(error) || error instanceof AxiosError) {
        setError(error.response?.data?.message || error.message);
      }
    }
  };
  //   const updateProduct = async (id: string) => {};
  //   const deleteProduct = async (id: string) => {};

  useLayoutEffect(() => {
    fetchProducts(currentPage);
    fetchCategory();
  }, []);
  const value = {
    products,
    setProducts,
    fetchProducts,
    loading,
    setError,
    error,
    handlePageChange,
    createProduct,
    categories,
    setCategories,
    fetchCategory,
    handleChangeProduct,
    currentPage,
    setCurrentPage,
    totalPages,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
