import * as React from "react";
import { ZakIconProps } from "../types";

export const CraneArm = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M3 21h18M5 21V5l16 8H5m10 0v6m-2 0h4"/>
        {children}
      </svg>
    );
  }
);

CraneArm.displayName = "CraneArm";
