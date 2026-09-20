import * as React from "react";
import { ZakIconProps } from "../types";

export const PalletTruck = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M6 17V6h4m0 0 3 7h7v4H6"/>
        {children}
      </svg>
    );
  }
);

PalletTruck.displayName = "PalletTruck";
