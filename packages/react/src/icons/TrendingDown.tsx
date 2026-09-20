import * as React from "react";
import { ZakIconProps } from "../types";

export const TrendingDown = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="m23 18-9.5-9.5-5 5L1 6"/><path d="M17 18h6v-6"/>
        {children}
      </svg>
    );
  }
);

TrendingDown.displayName = "TrendingDown";
