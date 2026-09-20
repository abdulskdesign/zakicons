import * as React from "react";
import { ZakIconProps } from "../types";

export const ShieldOff = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.11 1.17M4.73 4.73 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38M1 1l22 22"/>
        {children}
      </svg>
    );
  }
);

ShieldOff.displayName = "ShieldOff";
