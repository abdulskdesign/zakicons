import * as React from "react";
import { ZakIconProps } from "../types";

export const Warehouse = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M3 21V9l9-6 9 6v12z"/><path d="M9 21v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8M9 8h6"/>
        {children}
      </svg>
    );
  }
);

Warehouse.displayName = "Warehouse";
