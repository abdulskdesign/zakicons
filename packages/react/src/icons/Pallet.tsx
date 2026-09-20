import * as React from "react";
import { ZakIconProps } from "../types";

export const Pallet = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <rect width="20" height="3" x="2" y="14" rx="1"/><path d="M4 17v4m8-4v4m8-4v4M5 14V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8"/>
        {children}
      </svg>
    );
  }
);

Pallet.displayName = "Pallet";
