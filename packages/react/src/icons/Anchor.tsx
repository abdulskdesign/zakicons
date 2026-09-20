import * as React from "react";
import { ZakIconProps } from "../types";

export const Anchor = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <circle cx="12" cy="5" r="3"/><path d="M12 8v13m-7-9H2a10 10 0 0 0 20 0h-3"/>
        {children}
      </svg>
    );
  }
);

Anchor.displayName = "Anchor";
