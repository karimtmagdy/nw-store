export const sign_up = {
  path: "sign-up",
  lazy: async () => {
    const { default: AuthRegister } = await import(
      "@/pages/authentication/AuthRegister"
    );
    return { Component: AuthRegister };
  },
};
export const sign_in = {
  path: "sign-in",
  lazy: async () => {
    const { default: AuthLogin } = await import(
      "@/pages/authentication/AuthLogin"
    );
    return { Component: AuthLogin };
  },
};
// export const overview = {
//   path: "overview",
//   lazy: async () => {
//     const { default: OverviewAdminPage } = await import(
//       "@/pages/admin/content/overview/OverviewAdminPage"
//     );
//     return { Component: OverviewAdminPage };
//   },
// };
// export const dashboard = {
//   path: "dashboard",
//   lazy: async () => {
//     const { default: AdminDashboardPage } = await import(
//       "@/pages/admin/content/dashboard/AdminDashboardPage"
//     );
//     return { Component: AdminDashboardPage };
//   },
// };
// export const categories = {
//   path: "categories",
//   lazy: async () => {
//     const { default: AdminCategoriesPage } = await import(
//       "@/pages/admin/content/category/AdminCategoriesPage"
//     );
//     return { Component: AdminCategoriesPage };
//   },
// };
// export const add_category = {
//   path: "categories/add-category",
//   lazy: async () => {
//     const { default: AdminCategoriesPage } = await import(
//       "@/pages/admin/content/category/AdminAddCategoryPage"
//     );
//     return { Component: AdminCategoriesPage };
//   },
// };
// export const update_Category = {
//   path: "categories/update-category/:id",
//   lazy: async () => {
//     const { default: AdminUpdateCategoryPage } = await import(
//       "@/pages/admin/content/category/AdminUpdateCategoryPage"
//     );
//     return { Component: AdminUpdateCategoryPage };
//   },
// };
// export const products = {
//   path: "products",
//   lazy: async () => {
//     const { default: AdminProductsPage } = await import(
//       "@/pages/admin/content/product/AdminProductsPage"
//     );
//     return { Component: AdminProductsPage };
//   },
// };
// export const add_product = {
//   path: "products/add-product",
//   lazy: async () => {
//     const { default: AddProductPage } = await import(
//       "@/pages/admin/content/product/AddProductPage"
//     );
//     return { Component: AddProductPage };
//   },
// };
// export const update_product = {
//   path: "products/update-product/:id",
//   lazy: async () => {
//     const { default: AdminUpdateProductPage } = await import(
//       "@/pages/admin/content/product/AdminUpdateProductPage"
//     );
//     return { Component: AdminUpdateProductPage };
//   },
// };
// export const brands = {
//   path: "brands",
//   lazy: async () => {
//     const { default: AdminBrandsPage } = await import(
//       "@/pages/admin/content/brand/AdminBrandsPage"
//     );
//     return { Component: AdminBrandsPage };
//   },
// };
// export const add_brand = {
//   path: "brands/add-brand",
//   lazy: async () => {
//     const { default: AdminAddBrandPage } = await import(
//       "@/pages/admin/content/brand/AdminAddBrandPage"
//     );
//     return { Component: AdminAddBrandPage };
//   },
// };
// export const update_brand = {
//   path: "brands/update-brand/:id",
//   lazy: async () => {
//     const { default: AdminUpdateBrandPage } = await import(
//       "@/pages/admin/content/brand/AdminUpdateBrandPage"
//     );
//     return { Component: AdminUpdateBrandPage };
//   },
// };
// export const users = {
//   path: "users",
//   lazy: async () => {
//     const { default: UsersPage } = await import(
//       "@/pages/admin/content/user/UsersPage"
//     );
//     return { Component: UsersPage };
//   },
// };
// export const add_user = {
//   path: "users/add-user",
//   lazy: async () => {
//     const { default: AdminAddUser } = await import(
//       "@/pages/admin/content/user/AdminAddUser"
//     );
//     return { Component: AdminAddUser };
//   },
// };
// export const update_user = {
//   path: "users/update-user/:id",
//   lazy: async () => {
//     const { default: AdminUserEditPage } = await import(
//       "@/pages/admin/content/user/AdminUserEditPage"
//     );
//     return { Component: AdminUserEditPage };
//   },
// };
