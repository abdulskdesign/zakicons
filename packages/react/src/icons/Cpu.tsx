import * as React from "react";
import { ZakIconProps } from "../types";

export const Cpu = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <rect width="16" height="16" x="4" y="4" rx="2"/><path d="M9 9h6v6H9zm0-8v3m6-3v3M9 20v3m6-3v3m5-14h3m-3 5h3M1 9h3m-3 5h3"/>
        {children}
      </svg>
    );
  }
);

Cpu.displayName = "Cpu";
