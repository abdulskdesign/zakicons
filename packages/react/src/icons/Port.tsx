import * as React from "react";
import { ZakIconProps } from "../types";

export const Port = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M2 20h20M6 20V8l6-4 6 4v12m-8-8h4m-2 0v8m-8-6 2-1m14 1-2-1"/>
        {children}
      </svg>
    );
  }
);

Port.displayName = "Port";
