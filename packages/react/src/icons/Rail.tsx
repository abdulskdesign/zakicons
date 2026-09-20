import * as React from "react";
import { ZakIconProps } from "../types";

export const Rail = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M5 3 2 21M19 3l3 18M4 8h16M3 14h18M2 20h20"/>
        {children}
      </svg>
    );
  }
);

Rail.displayName = "Rail";
