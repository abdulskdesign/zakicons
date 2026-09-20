import * as React from "react";
import { ZakIconProps } from "../types";

export const RouteLogistics = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M6 16v-4a4 4 0 0 1 4-4h4a4 4 0 0 0 4-4v1"/><path d="m15 7 3-2-3-2"/>
        {children}
      </svg>
    );
  }
);

RouteLogistics.displayName = "RouteLogistics";
