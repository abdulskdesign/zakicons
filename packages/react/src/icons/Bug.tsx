import * as React from "react";
import { ZakIconProps } from "../types";

export const Bug = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <rect width="8" height="14" x="8" y="6" rx="4"/><path d="m19 7-3 2M5 7l3 2m11 10-3-2M5 19l3-2m12-4h-4M4 13h4m2-9 1 2m3-2-1 2"/>
        {children}
      </svg>
    );
  }
);

Bug.displayName = "Bug";
