import * as React from "react";
import { ZakIconProps } from "../types";

export const Utensils = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M18 2v20m3-7V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zM6 22v-7.5A2.5 2.5 0 0 0 3.5 12H3V2h2v5h2V2h2v5h2V2h2v5a2.5 2.5 0 0 1-2.5 2.5V22"/>
        {children}
      </svg>
    );
  }
);

Utensils.displayName = "Utensils";
