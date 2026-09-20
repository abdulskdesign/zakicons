import * as React from "react";
import { ZakIconProps } from "../types";

export const Crown = React.forwardRef<SVGSVGElement, ZakIconProps>(
  ({ size = 24, strokeWidth = 2, color = "currentColor", className = "", children, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
        {...props}
      >
        <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7zm3 16h14"/>
        {children}
      </svg>
    );
  }
);

Crown.displayName = "Crown";
