import * as React from "react";
import { ZakIconProps } from "../types";

export const ArrowDownToDot = React.forwardRef<SVGSVGElement, ZakIconProps>(
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
        <path d="M12 2v14m7-7-7 7-7-7"/><circle cx="12" cy="21" r="1"/>
        {children}
      </svg>
    );
  }
);

ArrowDownToDot.displayName = "ArrowDownToDot";
