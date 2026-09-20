import * as React from "react";
import { ZakIconProps } from "../types";

export const Key = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="m21 2-2 2m-1.5 1.5L14 9l-2-2-4 4 4 4 1-1 3.5 3.5M7 13a4 4 0 1 1-5.66-5.66A4 4 0 0 1 7 13"/>
        {children}
      </svg>
    );
  }
);

Key.displayName = "Key";
