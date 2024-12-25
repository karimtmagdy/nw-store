import { cn } from "@/utility/classnames";
import { memo, ReactNode } from "react";

const Container = memo(
  ({ className, children }: { className?: string; children: ReactNode }) => {
    return <div className={cn("container", className)}>{children}</div>;
  },
);

export default Container;
