import * as React from "react";
import { ZakIconProps } from "../types";

export const VolumeX = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M11 5 6 9H2v6h4l5 4zm12 4-6 6m0-6 6 6"/>
        {children}
      </svg>
    );
  }
);

VolumeX.displayName = "VolumeX";
