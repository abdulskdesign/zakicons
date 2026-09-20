import * as React from "react";
import { ZakIconProps } from "../types";

export const Presentation = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <rect width="18" height="12" x="3" y="3" rx="2"/><path d="M8 21h8m-4-6v6M8 9h8m-8 3h4"/>
        {children}
      </svg>
    );
  }
);

Presentation.displayName = "Presentation";
