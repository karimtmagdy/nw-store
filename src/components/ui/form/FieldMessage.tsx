import { cn } from "@/utility/classnames";
import { memo } from "react";

const FieldMessage = memo(
  ({ text, className }: { text: string; className?: string }) => {
    return (
      <small className={cn("translate-x-3 text-zinc-400", className)}>
        {text}
      </small>
    );
  },
);

export default FieldMessage;
