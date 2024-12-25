import { cn } from "@/utility/classnames";
import { TableHeadProps } from "@/types/TableTypes";
import { forwardRef, memo } from "react";

const TableHead = memo(
  forwardRef<HTMLTableCellElement, TableHeadProps>(
    ({ className, children, ...props }, ref) => {
      return (
        <th
          ref={ref}
          {...props}
          className={cn(
            "table-cell whitespace-nowrap border-b border-neutral-200 py-2 text-center align-middle text-xs font-medium uppercase tracking-wider text-gray-500 dark:border-neutral-600 dark:text-gray-400",
            className,
          )}
        >
          {children}
        </th>
      );
    },
  ),
);

export default TableHead;
