import * as React from "react";
import { ZakIconProps } from "../types";

export const Fleet = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M4 14V6h10v8m0-5h4l2 2v3h-6M2 18h2m8 0h2m6 0h2"/><circle cx="6" cy="18" r="2"/><circle cx="16" cy="18" r="2"/>
        {children}
      </svg>
    );
  }
);

Fleet.displayName = "Fleet";
