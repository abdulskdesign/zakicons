import * as React from "react";
import { ZakIconProps } from "../types";

export const Luggage = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <rect width="12" height="14" x="6" y="7" rx="2"/><path d="M9 7V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3m-9 5h12M6 16h12"/><circle cx="9" cy="21" r="1"/><circle cx="15" cy="21" r="1"/>
        {children}
      </svg>
    );
  }
);

Luggage.displayName = "Luggage";
