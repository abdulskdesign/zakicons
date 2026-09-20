import * as React from "react";
import { ZakIconProps } from "../types";

export const Atom = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <circle cx="12" cy="12" r="2"/><path d="M20.2 20.2c2.4-2.4 2.4-6.3 0-8.7L12 3.3l-8.2 8.2c-2.4 2.4-2.4 6.3 0 8.7s6.3 2.4 8.7 0l8.2-8.2"/><path d="M3.8 3.8c-2.4 2.4-2.4 6.3 0 8.7l8.2 8.2 8.2-8.2c2.4-2.4 2.4-6.3 0-8.7s-6.3-2.4-8.7 0L3.8 12"/>
        {children}
      </svg>
    );
  }
);

Atom.displayName = "Atom";
