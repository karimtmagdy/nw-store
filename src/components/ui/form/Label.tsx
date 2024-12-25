import { cn } from "@/utility/classnames";
import { forwardRef, LabelHTMLAttributes, memo, ReactNode } from "react";
export interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;

  id?: string;
  children?: ReactNode;
  content?: string;
}
const Label = memo(
  forwardRef<HTMLLabelElement, ILabelProps>(
    ({ content, id, className, children, ...props }, ref) => {
      // const content = label || children;
      return (
        <label
          htmlFor={id}
          ref={ref}
          className={cn(
            "w-fit -translate-y-1 text-sm capitalize dark:text-zinc-600",
            className,
          )}
          {...props}
        >
          {content || children}
        </label>
      );
    },
  ),
);
Label.displayName = "Label";

export default Label;
