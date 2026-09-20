import * as React from "react";
import { ZakIconProps } from "../types";

export const Crane = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M4 21h16M6 21V7l14-4v4L9 10v11m8-16v8m-2 0h4"/>
        {children}
      </svg>
    );
  }
);

Crane.displayName = "Crane";
