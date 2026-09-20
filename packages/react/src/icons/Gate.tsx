import * as React from "react";
import { ZakIconProps } from "../types";

export const Gate = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M4 21V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16M4 11h16M9 4v7m6-7v7"/><circle cx="9" cy="16" r="1"/><circle cx="15" cy="16" r="1"/>
        {children}
      </svg>
    );
  }
);

Gate.displayName = "Gate";
