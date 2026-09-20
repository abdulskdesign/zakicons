import * as React from "react";
import { ZakIconProps } from "../types";

export const Ship = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M2 19c3-1 6-1 10 0s7 1 10 0l-2-7H4zm4-7V6h12v6m-8-6V3h4v3M4 22c3-1 6-1 10 0s7 1 10 0"/>
        {children}
      </svg>
    );
  }
);

Ship.displayName = "Ship";
