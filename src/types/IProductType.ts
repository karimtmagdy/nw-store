export type IProduct = {
  _id: string;
  title: string;
  description: string;
  stock: string;
  sold: string;
  price: string;
  discount: string;
  rating: string;
  slug: string;
  image_cover: string;
  ratings_quntity: string;
  colors: string;
  sizes: string;
  images: string;
  about: string;
  brand: string;
  category: {
    _id: string;
    name: string;
  };
  status: string;
  reviews: string;
  createdBy: {
    _id: string;
    username: string;
  };
  createdAt?: string;
  updatedAt?: string;
};

// export type stateProductType = {
//   categories?: IProduct[];
//   setCategories?: React.Dispatch<React.SetStateAction<IProduct[]>>;
// };
// export type Props = stateCategoryType &
//   ICategory & {
//     setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
//     setCurrentCategory: React.Dispatch<React.SetStateAction<ICategory | null>>;
//   };
// export type ICategoryType = Omit<IProduct, "slug">;

// export type prop = IProduct &
//   stateProductType & {
//     setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
//     setCurrentCategory: React.Dispatch<React.SetStateAction<IProduct | null>>;
//   };
