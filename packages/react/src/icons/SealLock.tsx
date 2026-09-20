import * as React from "react";
import { ZakIconProps } from "../types";

export const SealLock = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <rect width="8" height="11" x="8" y="10" rx="2"/><path d="M9 10V6a3 3 0 0 1 6 0v4m-3 4v3"/>
        {children}
      </svg>
    );
  }
);

SealLock.displayName = "SealLock";
