import * as React from "react";
import { ZakIconProps } from "../types";

export const ShipBoat = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M2 21c3-1 6-1 10 0s7 1 10 0l-2-6H4zm3-6V8l7-4 7 4v7m-9-7h4"/>
        {children}
      </svg>
    );
  }
);

ShipBoat.displayName = "ShipBoat";
