import * as React from "react";
import { ZakIconProps } from "../types";

export const Expand = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M15 3h6v6m0-6-7 7M9 21H3v-6m0 6 7-7"/>
        {children}
      </svg>
    );
  }
);

Expand.displayName = "Expand";
