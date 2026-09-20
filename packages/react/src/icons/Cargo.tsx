import * as React from "react";
import { ZakIconProps } from "../types";

export const Cargo = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="m2 9 10-5 10 5-10 5zm0 6 10 5 10-5"/><path d="M2 9v6l10 5 10-5V9"/>
        {children}
      </svg>
    );
  }
);

Cargo.displayName = "Cargo";
