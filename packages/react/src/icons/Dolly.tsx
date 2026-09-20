import * as React from "react";
import { ZakIconProps } from "../types";

export const Dolly = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <circle cx="7" cy="19" r="2"/><path d="m7 17 4-12h2"/><path d="M9 13h9a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9M5 19h2"/>
        {children}
      </svg>
    );
  }
);

Dolly.displayName = "Dolly";
