import { cn } from "@/utility/classnames";
import { TableFooterProps } from "@/types/TableTypes";
import { forwardRef, memo } from "react";

const TableFooter = memo(
  forwardRef<HTMLTableSectionElement, TableFooterProps>(
    ({ className, ...props }, ref) => {
      return (
        <tfoot
          ref={ref}
          {...props}
          className={cn(
            "  bg-transparent font-medium ",
            className,
          )}
        />
      );
    },
  ),
);

export default TableFooter;
