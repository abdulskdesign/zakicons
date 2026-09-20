import * as React from "react";
import { ZakIconProps } from "../types";

export const GitCommit = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <circle cx="12" cy="12" r="4"/><path d="M1.05 12H7m10.01 0h5.95"/>
        {children}
      </svg>
    );
  }
);

GitCommit.displayName = "GitCommit";
