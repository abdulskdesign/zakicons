import * as React from "react";
import { ZakIconProps } from "../types";

export const SunBeach = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M2 20c4-1 8 1 12 0s6-1 8 0m-6-4c-2-2-4-5-3-9 2 0 4 1 5 3"/><path d="M14 8c1-3 4-4 7-3-1 2-2 4-4 5"/><circle cx="6" cy="7" r="3"/>
        {children}
      </svg>
    );
  }
);

SunBeach.displayName = "SunBeach";
