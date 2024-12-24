export type ICategory = stateCategoryType & {
  _id: string;
  name: string;
  slug: string;
  createdAt?: string;
  updatedAt?: string;
};

export type stateCategoryType = {
  categories?: ICategory[];
  setCategories?: React.Dispatch<React.SetStateAction<ICategory[]>>;
};
// export type Props = stateCategoryType &
//   ICategory & {
//     setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
//     setCurrentCategory: React.Dispatch<React.SetStateAction<ICategory | null>>;
//   };
export type ICategoryType = Omit<ICategory, "slug">;

export type prop = ICategory &
  stateCategoryType & {
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    setCurrentCategory: React.Dispatch<React.SetStateAction<ICategory | null>>;
  };
