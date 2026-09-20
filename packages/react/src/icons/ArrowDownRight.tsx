import * as React from "react";
import { ZakIconProps } from "../types";

export const ArrowDownRight = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="m7 7 10 10m0-10v10H7"/>
        {children}
      </svg>
    );
  }
);

ArrowDownRight.displayName = "ArrowDownRight";
