import * as React from "react";
import { ZakIconProps } from "../types";

export const Blind = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <circle cx="8" cy="4" r="1.5"/><path d="m10 8.5-3 5 4 1.5 2 7M7 11l-3 4m10 2 4 4"/>
        {children}
      </svg>
    );
  }
);

Blind.displayName = "Blind";
