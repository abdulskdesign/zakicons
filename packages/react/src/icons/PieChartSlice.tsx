import * as React from "react";
import { ZakIconProps } from "../types";

export const PieChartSlice = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M12 2a10 10 0 0 1 10 10H12zm0 10L4.93 4.93A10 10 0 1 0 22 12z"/>
        {children}
      </svg>
    );
  }
);

PieChartSlice.displayName = "PieChartSlice";
