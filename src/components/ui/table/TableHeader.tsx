import { cn } from "@/utility/classnames";
import { TableHeaderProps } from "@/types/TableTypes";
import { forwardRef, memo } from "react";

const TableHeader = memo(
  forwardRef<HTMLTableSectionElement, TableHeaderProps>(
    ({ className, children, ...props }, ref) => {
      return (
        <thead
          // "[&_tr]:border-b"
          ref={ref}
          {...props}
          className={cn(
            "table-header-group [&>tr]:hover:!bg-inherit [&_tr]:divide-x-[1px]",
            className,
          )}
        >
          {children}
        </thead>
      );
    },
  ),
);

export default TableHeader;
