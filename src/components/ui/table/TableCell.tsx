import { cn } from "@/utility/classnames";
import { TableCellProps } from "@/types/TableTypes";
import { forwardRef, memo } from "react";

const TableCell = memo(
  forwardRef<HTMLTableCellElement, TableCellProps>(
    ({ className, children, ...props }, ref) => {
      return (
        <td
          ref={ref}
          {...props}
          className={cn(
            "table-cell whitespace-nowrap px-6 py-2 align-middle text-sm font-medium",
            className,
          )}
        >
          {children}
        </td>
      );
    },
  ),
);

export default TableCell;

 