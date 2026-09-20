import * as React from "react";
import { ZakIconProps } from "../types";

export const Vendor = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="m3 9 9-6 9 6v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 21v-9h6v9M2 9h20"/>
        {children}
      </svg>
    );
  }
);

Vendor.displayName = "Vendor";
