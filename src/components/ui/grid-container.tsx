import { cn } from "@/lib/utils";
import React from "react";

const GridContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("w-full max-w-[1128px] mx-auto lg:px-4", className)}
      {...props}
    >
      {children}
    </div>
  );
});
GridContainer.displayName = "GridContainer";

export { GridContainer };
