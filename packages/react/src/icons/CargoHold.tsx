import * as React from "react";
import { ZakIconProps } from "../types";

export const CargoHold = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 6h16m-8-6v16"/>
        {children}
      </svg>
    );
  }
);

CargoHold.displayName = "CargoHold";
