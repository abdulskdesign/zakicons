import * as React from "react";
import { ZakIconProps } from "../types";

export const CloudRain = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M16 13v8m-8-8v8m4-6v8m8-6.42A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>
        {children}
      </svg>
    );
  }
);

CloudRain.displayName = "CloudRain";
