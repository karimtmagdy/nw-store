import { cn } from "@/utility/classnames";
import { memo, ReactNode } from "react";

const Field = memo(
  ({
    className,
    children,
    ...props
  }: {
    className?: string;
    children: ReactNode;
  }) => {
    return (
      <fieldset className={cn("flex flex-col", className)} {...props}>
        {children}
      </fieldset>
    );
  },
);

export default Field;
