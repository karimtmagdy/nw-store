import { cn } from "@/utility/classnames";
import { TableRowProps } from "@/types/TableTypes";
import { forwardRef, memo } from "react";

const TableRow = memo(
  forwardRef<HTMLTableRowElement, TableRowProps>(
    ({ className, children, ...props }, ref) => {
      return (
        <tr
          ref={ref}
          {...props}
          className={cn(
            "table-row bg-white odd:hover:bg-gray-200 even:hover:bg-gray-300 dark:bg-black dark:text-gray-400 dark:hover:text-white dark:odd:hover:bg-zinc-700 dark:even:hover:bg-neutral-900",
            className,
          )}
        >
          {children}
        </tr>
      );
    },
  ),
);

export default TableRow;
