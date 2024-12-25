import { cn, VariantProps, cva } from "@/utility/classnames";
import {
  ComponentProps,
  InputHTMLAttributes,
  RefAttributes,
  forwardRef,
  memo,
} from "react";
interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof styleInput>,
    RefAttributes<HTMLInputElement>,
    ComponentProps<"input"> {
  className?: string;
}
// className="block h-8 rounded-lg border bg-transparent px-4 py-1 text-sm outline-none focus:border-zinc-200 dark:focus:border-zinc-600"

const base: string[] = [
  "file:text-blue-500",
  "file:focus:ring-2",
  "file:hover:text-blue-600",
  "file:disabled:select-none",
  "file:font-medium",
  "file:text-sm",
  "file:border-0",
  "file:disabled:opacity-50",
  "file:cursor-pointer",
  "file:disabled:cursor-not-allowed",
  "block",
  "file:dark:text-white",
  "file:dark:hover:text-white/[0.3]",
  "file:duration-300",
  "file:transition",
  "file:focus:outline-none",
  "file:bg-transparent",
  "bg-transparent",
  "placeholder:text-gray-500",
  "dark:placeholder:text-neutral-500",
  "text-gray-500",
  "dark:text-neutral-500",
  "duration-300",
  "focus:border-blue-600",
  "dark:focus:border-neutral-600",
  "dark:bg-transparent",
  "border",
  "transition",
  "invalid-visible:border-red-500",
  // "invalid-visible:ring-red-500",
  // "invalid-visible:ring-1",
  "focus-visible:outline-none",
  "dark:ring-offset-black",
  "ring-offset-white",
  "ring-offset-2",
  "focus-visible:ring-1",
  "focus:outline-none",
  "dark:focus-visible:ring-neutral-600",
  "focus-visible:ring-blue-600",
  "dark:focus-visible:ring-neutral-600",
  "font-outfit",
  "font-normal",
  "file:focus:outline-none",
  "disabled:opacity-50",
  "disabled:cursor-not-allowed",
];

const styleInput = cva(base, {
  variants: {
    fullWidth: { true: "w-full" },
    shape: {
      default: "rounded-md",
      rounded: "rounded-xl",
      pill: "rounded-full",
    },
    Size: {
      xs: ["py-0.5", "text-sm", "placeholder:text-sm", "px-2"],
      sm: ["py-1", "text-base", "placeholder:text-base", "px-4"],
      md: ["py-1.5", "text-base", "placeholder:text-base", "px-6"],
    },
  },
  defaultVariants: {
    shape: "default",
    Size: "sm",
  },
});

const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(
    ({ className, shape, Size, fullWidth, ...props }, ref) => {
      return (
        <input
          ref={ref}
          {...props}
          className={cn(styleInput({ shape, Size, fullWidth }), className)}
        />
      );
    },
  ),
);

export default Input;
