import * as React from "react";
import { ZakIconProps } from "../types";

export const CloudCog = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 4 14.9"/><circle cx="12" cy="17" r="3"/><path d="M12 12v2m0 6v2m-5-5h2m6 0h2"/>
        {children}
      </svg>
    );
  }
);

CloudCog.displayName = "CloudCog";
