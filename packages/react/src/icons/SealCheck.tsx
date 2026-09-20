import * as React from "react";
import { ZakIconProps } from "../types";

export const SealCheck = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="m12 2 7 4v6c0 5.5-3.5 10-7 12-3.5-2-7-6.5-7-12V6z"/><path d="m9 12 2 2 4-4"/>
        {children}
      </svg>
    );
  }
);

SealCheck.displayName = "SealCheck";
