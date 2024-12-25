import { cn } from "@/utility/classnames";
import { ReactNode } from "react";

const Pagination = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("flex items-center justify-between px-4 py-3", className)}
    >
      {children}
    </div>
  );
};

export default Pagination;
