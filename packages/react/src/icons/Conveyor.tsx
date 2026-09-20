import * as React from "react";
import { ZakIconProps } from "../types";

export const Conveyor = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <rect width="20" height="5" x="2" y="13" rx="2.5"/><circle cx="6" cy="15.5" r="1"/><circle cx="12" cy="15.5" r="1"/><circle cx="18" cy="15.5" r="1"/><rect width="8" height="7" x="8" y="6" rx="1"/>
        {children}
      </svg>
    );
  }
);

Conveyor.displayName = "Conveyor";
