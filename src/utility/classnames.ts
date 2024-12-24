import {
    cva,
    type VariantProps,
    cx,
    type CxOptions,
    type CxReturn,
  } from "class-variance-authority";
  export { cva, type VariantProps };
  import { clsx, type ClassValue } from "clsx";
  import { twMerge } from "tailwind-merge";
  
  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
  
  export function cv<T extends (...args: string[]) => string>(
    base: T,
    ...inputs: CxOptions
  ): CxReturn & T {
    const combinedFunction = (...args: Parameters<T>) => {
      const baseResult = base(...args);
      return cx(baseResult, ...inputs);
    };
    return Object.assign(combinedFunction, base) as CxReturn & T;
  }