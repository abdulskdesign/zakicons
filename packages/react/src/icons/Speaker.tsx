import * as React from "react";
import { ZakIconProps } from "../types";

export const Speaker = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <rect width="16" height="20" x="4" y="2" rx="2"/><circle cx="12" cy="14" r="4"/><path d="M12 6h.01"/>
        {children}
      </svg>
    );
  }
);

Speaker.displayName = "Speaker";
