import * as React from "react";
import { ZakIconProps } from "../types";

export const PlaneTakeoff = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M2 22h20M6.36 17.4 4 17l-2-4 1.1-.55 3.42 1.57L11 8.5 7.5 5 9 3.5 14 7l4-2a2 2 0 0 1 2.6 2.6l-2 4 3.5 5 1.5-1.5-3.5-3.5 5.5-4.5 1.57 3.42-.55 1.1-4-2-.4 2.36"/>
        {children}
      </svg>
    );
  }
);

PlaneTakeoff.displayName = "PlaneTakeoff";
