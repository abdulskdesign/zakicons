import * as React from "react";
import { ZakIconProps } from "../types";

export const Map = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4zm7-4v16m8-12v16"/>
        {children}
      </svg>
    );
  }
);

Map.displayName = "Map";
