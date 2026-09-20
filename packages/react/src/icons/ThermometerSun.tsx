import * as React from "react";
import { ZakIconProps } from "../types";

export const ThermometerSun = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M12 9a4 4 0 0 0-2 7.5V18a2 2 0 0 0 4 0v-1.5A4 4 0 0 0 12 9m0-6v2M6.6 6.6 8 8m12-4-2 2M4 12h2m14 0h-2M6.6 17.4 8 16m-4 4 2-2"/>
        {children}
      </svg>
    );
  }
);

ThermometerSun.displayName = "ThermometerSun";
