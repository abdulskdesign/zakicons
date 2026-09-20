import * as React from "react";
import { ZakIconProps } from "../types";

export const ArrowLeftRight = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M8 3 4 7l4 4m8 10 4-4-4-4M4 7h16m0 10H4"/>
        {children}
      </svg>
    );
  }
);

ArrowLeftRight.displayName = "ArrowLeftRight";
