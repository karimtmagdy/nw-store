import { cn } from "@/utility/classnames";
// import { Container } from "@/components/ui";
import { forwardRef, memo } from "react";
import { TableProps } from "@/types/TableTypes";

const TableSection = memo(
  forwardRef<HTMLTableElement, TableProps>(
    ({ className, children, ...props }, ref) => {
      return (
        // px-4 mt-6
        <div className="container overflow-hidden mt-2">
          <div className="w-full overflow-x-auto rounded-lg border border-gray-200 dark:border-neutral-600">
            <table
              ref={ref}
              {...props}
              className={cn("w-full border-collapse font-outfit", className)}
            >
              {children}
            </table>
          </div>
        </div>
      );
    },
  ),
);
export default TableSection;
