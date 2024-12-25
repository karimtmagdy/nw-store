import { cn } from "@/utility/classnames";
import { TableBodyProps } from "@/types/TableTypes";
import { forwardRef, memo } from "react";

const TableBody = memo(
  forwardRef<HTMLTableSectionElement, TableBodyProps>(
    ({ className, children, ...props }, ref) => {
      return (
        <tbody
          ref={ref}
          {...props}
          className={cn(
            "divide-y divide-neutral-200 bg-white dark:divide-neutral-600 dark:bg-black",
            className,
          )}
        >
          {children}
        </tbody>
      );
    },
  ),
);

export default TableBody;
