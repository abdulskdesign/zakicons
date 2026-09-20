import * as React from "react";
import { ZakIconProps } from "../types";

export const Mouse = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <rect width="12" height="18" x="6" y="3" rx="6"/><path d="M12 7v4"/>
        {children}
      </svg>
    );
  }
);

Mouse.displayName = "Mouse";
