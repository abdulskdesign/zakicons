import * as React from "react";
import { ZakIconProps } from "../types";

export const Signpost = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M12 3v18M6 5h8l3 3-3 3H6zm12 8h-8l-3 3 3 3h8z"/>
        {children}
      </svg>
    );
  }
);

Signpost.displayName = "Signpost";
