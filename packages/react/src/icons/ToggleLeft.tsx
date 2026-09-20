import * as React from "react";
import { ZakIconProps } from "../types";

export const ToggleLeft = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <rect width="22" height="14" x="1" y="5" rx="7" ry="7"/><circle cx="8" cy="12" r="3"/>
        {children}
      </svg>
    );
  }
);

ToggleLeft.displayName = "ToggleLeft";
