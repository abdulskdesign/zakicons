import * as React from "react";
import { ZakIconProps } from "../types";

export const Gauge = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="m12 14 4-4M3.34 19a10 10 0 1 1 17.32 0"/>
        {children}
      </svg>
    );
  }
);

Gauge.displayName = "Gauge";
