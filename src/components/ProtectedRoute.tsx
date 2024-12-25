import { useAuth } from "@/context/AuthContext";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
