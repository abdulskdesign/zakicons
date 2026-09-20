import * as React from "react";
import { ZakIconProps } from "../types";

export const PlaneLanding = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M2 22h20M3.77 10.77 2 9l2-4 1.1.55 1.57 3.42L11 7.5 10 3l1.5-1.5L15 5l4-2a2 2 0 0 1 2.6 2.6l-2 4 4.5 1-1.5 1.5-4.5-1-1.5 4.5 3.42 1.57.55 1.1-4 2-1.77-1.77"/>
        {children}
      </svg>
    );
  }
);

PlaneLanding.displayName = "PlaneLanding";
