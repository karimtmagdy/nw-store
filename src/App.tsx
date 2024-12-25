import { createBrowserRouter as create, RouterProvider } from "react-router";
import RootLayout from "@/layout/RootLayout";
import AdminLayout from "@/layout/AdminLayout";
import UserLayout from "@/layout/UserLayout";
import AuthFormLayout from "@/layout/AuthFormLayout";
import ForbiddenPage from "@/pages/error/ForbiddenPage";
import NotFoundPage from "@/pages/error/NotFoundPage";
import UnauthorizedPage from "@/pages/error/UnauthorizedPage";
import { sign_in, sign_up } from "@/routes/router";
import HomePage from "@/pages/home/HomePage";
import ProtectedRoute from "@/components/ProtectedRoute";

function App() {
  const router = create(
    [
      {
        path: "",
        element: <RootLayout />,
        children: [
          { path: "*", element: <NotFoundPage /> },
          { path: "/forbidden", element: <ForbiddenPage /> },
          { path: "/unauthorized", element: <UnauthorizedPage /> },
          {
            path: "/auth",
            element: <AuthFormLayout />,
            children: [sign_up, sign_in],
          },
          {
            path: "/",
            action: async () =>
              await new Promise((resolve) => setTimeout(resolve, 1000)),
            element: <UserLayout />,
            children: [{ index: true, element: <HomePage /> }],
          },
          {
            path: "/admin",
            element: (
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
    {
      future: {
        v7_partialHydration: false,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_skipActionErrorRevalidation: true,
        v7_startTransition: true,
        LoadingFallback: LoadingFallback,
      },
    },
  );
  return (
    <RouterProvider
      router={router}
      {...{
        future: { v7_startTransition: true },
        fallbackElement: <LoadingFallback />,
      }}
    />
  );
}

export default App;
function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="border-primary h-8 w-8 animate-spin rounded-full border-b-2" />
    </div>
  );
}
// overview,
// dashboard,
// categories,
// add_category,
// update_Category,
// users,
// add_user,
// update_user,
// products,
// add_product,
// update_product,
// brands,
// add_brand,
// update_brand,
// { path: "/account/profile", element: <ProfilePage /> },
