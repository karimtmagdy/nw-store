import { cn } from "@/utility/classnames";
import React, { forwardRef, memo } from "react";

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  ref: React.RefAttributes<HTMLFormElement>;
}

const Form = memo(
  forwardRef<HTMLFormElement, FormProps>(({ className, ...props }, ref) => {
    return <form {...props} ref={ref} className={cn("", className)} />;
  }),
);

export default Form;
