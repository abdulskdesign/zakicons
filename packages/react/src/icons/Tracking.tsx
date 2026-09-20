import * as React from "react";
import { ZakIconProps } from "../types";

export const Tracking = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3M3 12h2m14 0h2m-9-9v2m0 14v2"/>
        {children}
      </svg>
    );
  }
);

Tracking.displayName = "Tracking";
