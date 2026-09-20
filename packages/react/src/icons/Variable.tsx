import * as React from "react";
import { ZakIconProps } from "../types";

export const Variable = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M8 21s-4-3-4-9 4-9 4-9m8 0s4 3 4 9-4 9-4 9M15 9l-6 6m0-6 6 6"/>
        {children}
      </svg>
    );
  }
);

Variable.displayName = "Variable";
