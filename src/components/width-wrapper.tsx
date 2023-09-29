import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface WidthWrapperProps {
  className?: string;
  children: ReactNode;
}

const WidthWrapper = ({ className, children }: WidthWrapperProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default WidthWrapper;
